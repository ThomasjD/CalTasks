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
  // const (aa,setbb) = useState({

  // })

  let taskIcon = null;
  let iconNum = 0;
  if (props.type == 'Saturday' || props.type == 'Sunday') {
    taskIcon = '*';
  } else {
    taskIcon = '$';
  }
  if (props.taskNum > 1) {
    let iconNum = null;
    const iconNumRecursion = (string, taskNum) => {
      // if (taskNum < 0) return '';
      // if (taskNum === 1) return string;
      // else return string + iconNumRecursion(string, taskNum - 1);
      return string;
    };
    iconNum = iconNumRecursion('*', props.taskNum);
  }
  function repeatStringNumTimes(string, times) {
    var repeatedString = '';
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  let iconString = repeatStringNumTimes('*', props.taskNum);

  //let iconString = '*' * props.taskNum;
  // for (let x = 0; x < props.taskNum; x++) {
  // iconString + '*';
  // }
  //let iconNum = taskIcon * props.taskNum;
  return (
    <React.Fragment>
      <tr key={props.particularKey}>
        <td className="text-dark">{props.type}</td>
        <td className="text-dark">{iconString}</td>
      </tr>
    </React.Fragment>
  );
};

export default HowBusyThisDay;
