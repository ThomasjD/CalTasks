import React from 'react';
//import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

//2 props expected: link & active
const navigationItem = props => (
  <li className={classes.NavigationItem}>
    {/* set the link here ref dynamically from props.link */}

    {/* <a only works when attached to a link, 
    if props.active true then the active class will be passe in */}
    <a className={props.active ? classes.active : null} href={props.link}>
      {' '}
      {props.children}{' '}
    </a>
  </li>
);

export default navigationItem;
//<a href={props.link}> {props.children} </a>
