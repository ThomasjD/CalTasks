import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from './Aux';
//import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
export default layout;
