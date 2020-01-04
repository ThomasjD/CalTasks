import React, { useEffect, useState, useContext } from 'react';
//import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';
// import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
// import Template from '../../Template/Template';
import TasksContext from '../../../../context/tasksContext';

const HowBusyThisDay = props => {
  const taskscContext = useContext(TasksContext);

  let taskIcon = null;
  let iconNum = 0;
  if (props.type == 'Saturday' || props.type == 'Sunday') {
    taskIcon = <i class="fas fa-hourglass-start" />;
  } else {
    taskIcon = <i class="fas fa-business-time"></i>;
  }

  return taskIcon;
};

export default HowBusyThisDay;
