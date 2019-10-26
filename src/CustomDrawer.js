import React from "react";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme, makeStyles, createStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import StyleSharpIcon from '@material-ui/icons/StyleSharp';
import Divider from '@material-ui/core/Divider';
import { Link, useRouteMatch } from "react-router-dom";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        '& a': {
            textDecoration: 'none'
        }
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function LinkedListItem({ to, text, Icon, activeOnlyWhenExact}) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });
    return (
        <Link  to={to}>
            <ListItem button selected={match} key={text}>
                <ListItemIcon>
                    <Icon>
                    </Icon>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    )
}

export default function CustomDrawer(props) {
    const theme = useTheme();

    const classes = useStyles();
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <LinkedListItem text="Experiment" to="/" activeOnlyWhenExact={true} Icon={StyleSharpIcon}/>
                <LinkedListItem text="Springs" to="/springs" Icon={StyleSharpIcon}/>
            </List>


        </div>
    );

    return (
        < nav className={classes.drawer} aria-label="mailbox folders" >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            < Hidden smUp implementation="css" >
                <Drawer
                    //container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.onClose}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden >
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav >
    )
}

