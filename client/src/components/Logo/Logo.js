import React from 'react';

import classes from './Logo.module.css';
import calTaskLogo from '../../Assets/calTaskLogo.png';
//import NavigationItems from '../NavigationItems/NavigationItems';
//import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
//<img src="../../assets/images/burger-logo.png" />
const logo = props => (
  // <div className={classes.Logo} style={{ height: props.height }}>
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={calTaskLogo} alt="CalTask" />
  </div>
);

export default logo;
