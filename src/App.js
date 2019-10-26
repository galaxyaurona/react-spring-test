import React from 'react';
import logo from './logo.svg';
import Experimental from "./Experimental"
import './App.css';
import Spring from "./Spring"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/">
          <Experimental></Experimental>
        </Route>
        <Route path="/springs">
          <Spring></Spring>
        </Route>
      </Layout>
    </div >
  );
}

export default App;
