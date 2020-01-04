import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from './Aux';
//import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => (
  //<div> Toolbar, SideDrawer, Backdrop</div>
  <Aux>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
export default layout;
