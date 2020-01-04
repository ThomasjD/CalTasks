import React, { useEffect, useState, useContext } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
import Navbar from './navBar';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import Template from '../../Template/Template';
import TasksContext from '../../context/tasksContext';
import HowBusyThisWeek from './HowBusyThisWeek/HowBusyThisWeek';
const Cockpit = props => {
  //can do anything that componentDidUpdate can do
  //can send http request here
  const tasksContext = useContext(TasksContext);

  useEffect(() => {
    console.log('I am inside of [Cockpit.js] useffect');

    //getting rid of timer
    // const timer = setTimeout(() => {
    //   alert('Cockpit timer alert');
    // }, 1000);

    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  /*
    setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000);
    return () => { //don't have to have a return statement
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []); 
  */
  //if 2nd argument [props.tasks] it doesn't involve tasks -> it won't run this again
  //[props.tasks]

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd UseEffect');
    };
  });

  //styling the 'Things to Do' using strings for classnames
  const assignedClasses = [];
  let btnClass = '';

  switch (props.tasksLength) {
    case 3:
      assignedClasses.push('bold', 'red');
      break;
    case 2:
      assignedClasses.push('red');
      break;
    case 1:
      assignedClasses.push('orange');
      break;
    default:
      assignedClasses.push('green');
      break;
  }

  //console.log(assignedClasses[0])
  //add multiple classes for <p> w/ strings
  //const classesFinal = classes.join(' ')
  const classesFinal = 'rocky.' + assignedClasses;
  const [howBusyToggle, setHowBusyToggle] = useState({
    showTasksNumEachDay: true
  });
  //tasksContext.dataRequestHandler(event, 'tasks', '7', null, null)
  const setHowBusyToggleHandler = () => {
    let currentToggleStatus = howBusyToggle.showTasksNumEachDay;
    setHowBusyToggle({
      showTasksNumEachDay: !currentToggleStatus
    });

    // if (howBusyToggle.showTasksNumEachDay) {

    // } else {
    //   let currentToggleStatus = howBusyToggle.showTasksNumEachDay;
    //   setHowBusyToggle(
    //     () => tasksContext.dataRequestHandler(event, 'tasks', '7', null, null),
    //     {
    //       showTasksNumEachDay: !currentToggleStatus
    //     }
    //   );
    // }
  };

  //tasksContext = useContext(TasksContext);
  //.numTasksThisWeek['Monday']showHowBusyWeeek
  // if (tasksContext.tasksData.tasksData['showHowBusyWeeek'] == !null) {
  //   alert('inside of cockpit');
  // }
  let displayHowBusyThisWeek = null;

  if (tasksContext.tasksData.tasksData) {
    //console.log('inside if (!howBusyToggle.showTasksNumEachDay) statement');

    //console.log(tasksContext.tasksData.tasksData.numTasksThisWeek.Monday);
    if (
      tasksContext.tasksData.tasksData &&
      tasksContext.tasksData.tasksData.showHowBusyWeek
    )
      displayHowBusyThisWeek = (
        <React.Fragment>
          <HowBusyThisWeek
            showHowBusyThisWeek={howBusyToggle.showTasksNumEachDay}
            deadline={tasksContext.tasksData.numTasksThisWeek}
          />
        </React.Fragment>
      );
  }

  return (
    <React.Fragment>
      {displayHowBusyThisWeek}
      <div className="">
        <img
          className={classes.leftCockpitIcon}
          src={require('../../Assets/aptIcon.png')}
        />

        <h5>Pick Content View!</h5>
        <br></br>
        <br></br>

        <button
          onClick={event =>
            setHowBusyToggleHandler(
              tasksContext.dataRequestHandler(event, 'tasks', '7', null, null)
            )
          }
        >
          Click to see # of Tasks/Day
        </button>
        <br></br>
        <br></br>

        {howBusyToggle.showTasksNumEachDay ? (
          <React.Fragment>
            <Template />

            <p
              className={classNames({
                [classes[assignedClasses[0]]]: true,
                [classes[assignedClasses[1]]]: true
              })}
            ></p>
          </React.Fragment>
        ) : null}
        <DatePickerPicker />
      </div>
    </React.Fragment>
  );
};
//export default Cockpit;

export default React.memo(Cockpit);
//<MDBIcon icon="briefcase" />
