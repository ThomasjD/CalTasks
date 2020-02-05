import React, { useEffect, useState, useContext } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import Template from '../../Template/Template';
import HowBusyThisWeek from './HowBusyThisWeek/HowBusyThisWeek';
//import WeeklyTimeBudget from '../Creation/WeeklyTimeBudget/WeeklyTimeBudget';
import WeeklyTimeBudget from '../ViewContent/Objectives/TimeBudget/WeeklyTimeBudget';
import StoreContext from '../../context/StoreDataContext';

const Cockpit = props => {
  //can do anything that componentDidUpdate can do
  //can send http request here
  const storeContext = useContext(StoreContext);

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

  //add multiple classes for <p> w/ strings
  //const classesFinal = classes.join(' ')
  const classesFinal = 'rocky.' + assignedClasses;

  const [cockpitViewOptions, setCockpitViewOptions] = useState({
    showTasksNumEachDay: false,
    showTimeBudgetForWeek: false
  });
  const [timeBudget, setTimeBudget] = useState({
    dailyBudget: false,
    activityDayCategories: false
  });
  const setHowBusyToggleHandler = () => {
    let currentToggleStatus = cockpitViewOptions.showTasksNumEachDay;
    setCockpitViewOptions({
      showTasksNumEachDay: !currentToggleStatus
    });
  };

  const requestDataHandler = event => {
    let viewOptionChoice = event.target.value; //'' number used in displayContent component
    let contentChoice = null;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info
    //let today = calendarObj();
    let dataRequestMessage = null;
    switch (viewOptionChoice) {
      case '0': //Unscheduled Tasks for Week
        let currentShowTasksNumEachDay = cockpitViewOptions.showTasksNumEachDay;
        setCockpitViewOptions({
          showTasksNumEachDay: !currentShowTasksNumEachDay,
          showTimeBudgetForWeek: cockpitViewOptions.showTimeBudgetForWeek
        });
        typeOfData = 'tasks';
        handlerChoice = '7';
        dataLocation = '';
        infoType = 'howBusy';
        info = null;
        //contentChoice = '7';
        dataRequestMessage = {
          typeOfData: typeOfData,
          handlerChoice: handlerChoice,
          dataLocation: dataLocation,
          infoType: infoType,
          info: info
        };
        storeContext.dataRequestHandler(event, dataRequestMessage);
        break;

      case '1': //TimeBudget for Week
        let currentShowTimeBudgetForWeek =
          cockpitViewOptions.showTimeBudgetForWeek;
        dataRequestMessage = {
          typeOfData: 'obj',
          handlerChoice: '1',
          dataLocation: '',
          infoType: '',
          info: ''
        };
        setCockpitViewOptions(
          {
            showTimeBudgetForWeek: !currentShowTimeBudgetForWeek,
            showTasksNumEachDay: cockpitViewOptions.showTasksNumEachDay
          }
          // alert(
          //   `dataRequestMessage: ${dataRequestMessage.typeOfData} dataRequestMessage.handlerChoice: ${dataRequestMessage.handlerChoice}`
          // )
          // () => storeContext.dataRequestHandler(event, dataRequestMessage)
        );

        //reconnect to UiData after forming universal Store
        // contentChoice = '12';
        // let contentViewObject = {
        //   target: {
        //     value: contentChoice
        //   }
        // };
        // props.contentViewHandler(contentViewObject);
        break;
    }

    // alert(`typeOfData: ${typeOfData}`);
    // alert(`handlerChoice ${handlerChoice}`);
    // alert(`dataLocation ${dataLocation}`);
    // alert(`infoType ${infoType}`);
    // alert(`info ${info}`);

    //props.contentViewHandler(contentViewObject);
  };

  const ReceivedState = (dailyBudget, activityDayCategories) => {
    setTimeBudget({
      dailyBudget: dailyBudget,
      activityDayCategories: activityDayCategories
      // showHowBusyThisWeek: cockpitViewOptions.showHowBusyThisWeek,
      // deadline: cockpitViewOptions.deadline
    });
  };
  let displayHowBusyThisWeek = null;

  if (
    storeContext.tasksData.tasksData &&
    cockpitViewOptions.showTasksNumEachDay
    // tasksContext.tasksData.tasksData.showHowBusyWeek
  ) {
    displayHowBusyThisWeek = (
      <React.Fragment>
        <HowBusyThisWeek
          showHowBusyThisWeek={cockpitViewOptions.showTasksNumEachDay}
          deadline={storeContext.tasksData.numTasksThisWeek}
        />
      </React.Fragment>
    );
  }

  // const [cockpitViewOptions, setCockpitViewOptions] = useState({

  let displayShowTimeBudgetForWeek = null;
  if (
    storeContext.dataBudget &&
    storeContext.dataBudget.dataBudget &&
    cockpitViewOptions.showTimeBudgetForWeek
  ) {
    let dataBudget = { ...storeContext.dataBudget };
    let dataBudget2 = dataBudget.dataBudget;
    let dataBudget3 = { ...dataBudget2 };
    let dailyBudgetObj = dataBudget3.dailyBudget;
    let activityDayCategoriesObj = dataBudget3.activityDayCategories;
    let dailyBudget = { ...dailyBudgetObj };
    let activityDayCategories = { ...activityDayCategoriesObj };
    let tuesdayObj = dailyBudget.Tuesday;
    let Tuesday = { ...tuesdayObj };
    // alert(
    //   `Inside Cockpit ready to show displayShowTimeBudgetForWeek Tuesday.sleep: ${Tuesday.sleep}`
    // );

    // return ReceivedState(dailyBudget, activityDayCategories);
    displayShowTimeBudgetForWeek = <WeeklyTimeBudget />;
  }

  // if (timeBudget.dailyBudget) {
  //   displayShowTimeBudgetForWeek = <WeeklyTimeBudget />;
  // }

  return (
    <React.Fragment>
      <div>
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
              // type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              // onClick={props.viewContent}
              onClick={event => requestDataHandler(event)}
              value="0"
            />{' '}
            Click to see # of Tasks/Day
          </label>

          <label className="btn btn-danger m-2 active">
            <button
              // type="radio"
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
            Click to see Time Budget For Week
          </label>
        </div>

        <br></br>
        <br></br>
        {displayHowBusyThisWeek}
        {displayShowTimeBudgetForWeek}
        {cockpitViewOptions.showTasksNumEachDay ? (
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

export default React.memo(Cockpit);
