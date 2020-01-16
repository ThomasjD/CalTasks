import React, { useContext } from 'react';
import classNames from 'classnames';
import classes from './Cockpit.module.css';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';
import calendarObj from '../Calendar/calendarObj';
import SyllabiList from '../ViewContent/Syllabus/SyllabiList';
import TasksContext from '../../context/tasksContext';
import SyllabusContext from '../../context/syllabusContext';

const ViewContentOptions = props => {
  const tasksContext = useContext(TasksContext);
  const syllabusContext = useContext(SyllabusContext);

  const requestDataHandler = event => {
    let contentChoice = event.target.value; //'' number used in displayContent component

    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info
    let today = calendarObj();
    switch (contentChoice) {
      case '1': //Unscheduled Tasks for Week
        typeOfData = 'tasks';
        handlerChoice = '1';
        dataLocation = 'unAssignedTasksForWeek';
        infoType = null;
        info = null;
        break;

      case '2': //Today's Tasks
        typeOfData = 'tasks';
        handlerChoice = '2';
        dataLocation = today;
        infoType = null;
        info = null;
        break;

      case '3': //Pick Syllabus to View
        typeOfData = 'syllabus';
        handlerChoice = '';
        dataLocation = '';
        infoType = '';
        info = 'showSyllabiList';
        break;

      case '4':
        typeOfData = 'tasks';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        break;

      case '5':
        typeOfData = '';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        break;

      case '6':
        typeOfData = '';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        break;
    }

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
  };

  const pickedSyllabusRequestHandler = event => {
    //let dayPicked = event.target.value;
    //event
    let dataRequestMessage = null;
    if (event.target.value === 'showSyllabiList') {
      dataRequestMessage = {
        typeOfData: 'syllabus',
        handlerChoice: '18',
        dataLocation: null,
        infoType: 'triggerShowSyllabus',
        info: ''
      };
      tasksContext.dataRequestHandler(event, dataRequestMessage);
    } else {
      dataRequestMessage = {
        typeOfData: 'syllabus',
        handlerChoice: '11',
        dataLocation: event.target.value,
        infoType: 'triggerShowSyllabus',
        info: ''
      };

      // alert(`viewContentOptions handlerChoice: ${dataRequestMessage}`);

      syllabusContext.dataRequestHandler(event, dataRequestMessage);
      // let newContentChoice = event.target.value;

      let contentViewObject = {
        target: {
          value: '10'
        }
      };
      props.contentViewHandler(contentViewObject);
    }

    //tasksContext.contentViewHandler(3)
  };

  const processSyllabiList = () => {
    return Object.keys(
      syllabusContext.everythingSyllabus.syllabusData.syllabi
    ).map((syllabus, index) => {
      //alert(`inside const ViewContentOptions
      //  props.syllabusName ${syllabusContext.everythingSyllabus.syllabusData.syllabi[syllabus].syllabusId}`);
      return (
        <React.Fragment key={index}>
          <SyllabiList
            click={event => pickedSyllabusRequestHandler(event)}
            syllabusId={
              syllabusContext.everythingSyllabus.syllabusData.syllabi[syllabus]
                .syllabusId
            }
            value={
              syllabusContext.everythingSyllabus.syllabusData.syllabi[syllabus]
                .syllabusId
            }
            index={index}
            syllabusName={
              syllabusContext.everythingSyllabus.syllabusData.syllabi[syllabus]
                .name
            }
          />
        </React.Fragment>
      );
    });
  };

  const pickedDayRequestHandler = event => {
    let dayPicked = event.target.value;
    //props.viewRequestHandler()
    let dataLocation = null;
    switch (dayPicked) {
      case '1':
        dataLocation = 'Monday';
        break;
      case '2':
        dataLocation = 'Tuesday';
        break;
      case '3':
        dataLocation = 'Wednesday';
        break;
      case '4':
        dataLocation = 'Thursday';
        break;
      case '5':
        dataLocation = 'Friday';
        break;
      case '6':
        dataLocation = 'Saturday';
        break;
      case '7':
        dataLocation = 'Sunday';
        break;
    }
    //(event, typeOfData, handlerChoice,dataLocation,infoType, info)
    let dataRequestMessage = {
      typeOfData: 'tasks',
      handlerChoice: '9',
      dataLocation: dataLocation,
      infoType: 'pickedDayTasks',
      info: ''
    };
    tasksContext.dataRequestHandler(event, dataRequestMessage);
    let contentViewObject = {
      target: {
        value: '9'
      }
    };

    props.contentViewHandler(contentViewObject);
  };

  let displayOptions = (
    <React.Fragment>
      <div>
        <div className="btn-group-toggle d-flex-between" data-toggle="buttons">
          <label className="btn btn-danger m-2 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={props.viewContent}
              value="0"
            />{' '}
            Cockpit
          </label>

          <label className="btn btn-primary m-2 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={event => requestDataHandler(event)}
              value="1"
            />{' '}
            Unscheduled Tasks
          </label>

          <label className="btn btn-success m-2 active ">
            <button
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={event => requestDataHandler(event)}
              value="2"
            />{' '}
            Today's Tasks
          </label>

          <label className="btn dropdown m-2 active">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={event => pickedSyllabusRequestHandler(event)}
              value="showSyllabiList"
            >
              {' '}
              View Syllabi
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              {syllabusContext.everythingSyllabus.syllabusData
                ? processSyllabiList()
                : null}
            </div>
          </label>

          <label className="btn  dropdown m-2 active">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tasks by Day
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                className="dropdown-item"
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="1"
              >
                {' '}
                Mon
              </button>

              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="2"
              >
                {' '}
                Tue
              </button>

              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="3"
              >
                {' '}
                Wed
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="4"
              >
                {' '}
                Thur
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="5"
              >
                {' '}
                Fri
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="6"
              >
                {' '}
                Sat
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => pickedDayRequestHandler(event)}
                value="7"
              >
                {' '}
                Sun
              </button>
            </div>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
  //<div class=" "></div></div>

  return displayOptions;
};

export default ViewContentOptions;
/*
<label className="btn btn-success m-2 active ">
            <button
              type="button"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={props.viewContent}
              value="2"
            />{' '}
            Tasks by Day
          </label>
*/
