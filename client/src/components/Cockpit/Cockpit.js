import React, { useEffect, useState, useContext } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
import Navbar from './navBar';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import Template from '../../Template/Template';
import TasksContext from '../../context/tasksContext';
import HowBusyThisWeek from './HowBusyThisWeek/HowBusyThisWeek';
export default React.memo(Cockpit);

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
  

  //if (tasksContext.tasksData.tasksData) {
    //console.log('inside if (!howBusyToggle.showTasksNumEachDay) statement');
    
      
  


const requestDataHandler = event => {
  let viewOptionChoice = event.target.value; //'' number used in displayContent component
  let contentChoice = null;
  let typeOfData = ''; //string: syllabus,tasks,events,objectives
  let handlerChoice = ''; //string: '#' handler inside of database
  let dataLocation = ''; // string: where obj found inside database
  let infoType = ''; //string: index/id/
  let info = ''; //string: actual info
  let today = calendarObj();
  switch (viewOptionChoice) {
    case '0': //Unscheduled Tasks for Week
      typeOfData = 'tasks';
      handlerChoice = '7';
      dataLocation = '';
      infoType = null;
      info = null;
      contentchoice = '7';

      break;

    case '1': //Today's Tasks
      typeOfData = 'timeBudget';
      handlerChoice = '2';
      dataLocation = today;
      infoType = null;
      info = null;
      break;

      // case '3': //Pick Syllabus to View
      //   typeOfData = 'syllabus';
      //   handlerChoice = '';
      //   dataLocation = '';
      //   infoType = '';
      //   info = 'showSyllabiList';
      //   break;

      let dataRequestMessage = {
        typeOfData: typeOfData,
        handlerChoice: handlerChoice,
        dataLocation: dataLocation,
        infoType: infoType,
        info: info
      };

      let contentViewObject = {
        target: {
          value: contentChoice
        }
      };
      // alert(`typeOfData: ${typeOfData}`);
      // alert(`handlerChoice ${handlerChoice}`);
      // alert(`dataLocation ${dataLocation}`);
      // alert(`infoType ${infoType}`);
      // alert(`info ${info}`);
      syllabusContext.dataRequestHandler(event, dataRequestMessage);

      props.contentViewHandler(contentViewObject);
  }
  let displayHowBusyThisWeek = null;
  //console.log(tasksContext.tasksData.tasksData.numTasksThisWeek.Monday);
  if (
    tasksContext.tasksData.tasksData &&
    tasksContext.tasksData.tasksData.showHowBusyWeek
  ) {
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
        <div className="btn-group-toggle d-flex-between" data-toggle="buttons">
          <label className="btn btn-danger m-2 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              // onClick={props.viewContent}
              onClick={setHowBusyToggleHandler(event =>
                requestDataHandler(event)
              )}
              value="0"
            />{' '}
            Click to see # of Tasks/Day
          </label>

          <label className="btn btn-danger m-2 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={event => requestDataHandler(event)}
              value="1"
              // onClick={event =>
              //   setHowBusyToggleHandler(
              //     tasksContext.dataRequestHandler(event, 'tasks', '7', null, null)
              //   )
              // }
              // value="0"
            />{' '}
            Click to see # of Tasks/Day
          </label>
        </div>
        <button>Click to see # of Tasks/Day</button>
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
}