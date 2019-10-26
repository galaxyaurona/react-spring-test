import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from "./CustomDrawer";
import useToggle from "./hooks/useToggle";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [IsMobileOpen, toggleIsMobileOpen] = useToggle(false);
    return (
        <div className={classes.root}> 
            <AppBar position="fixed" className={classes.appBar}>

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleIsMobileOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                </Typography>
                </Toolbar>

            </AppBar>
            <CustomDrawer mobileOpen={IsMobileOpen} onClose={toggleIsMobileOpen}></CustomDrawer>
            <main className={classes.content}>
                // empty padding for fixed toolbar
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    )
}