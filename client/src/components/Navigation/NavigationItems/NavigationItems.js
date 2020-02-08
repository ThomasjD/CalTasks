import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem active link="/">
      Today's Tasks
    </NavigationItem>

    <NavigationItem link="/" active>
      Tasks by Day
    </NavigationItem>

    <NavigationItem link="/" active>
      Objective
    </NavigationItem>

    <NavigationItem active link="/">
      Calendar
    </NavigationItem>
  </ul>
);

export default navigationItems;
