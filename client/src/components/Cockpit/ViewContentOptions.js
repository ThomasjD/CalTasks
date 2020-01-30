import React, { useContext } from 'react';
import classNames from 'classnames';
import classes from './Cockpit.module.css';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';
import calendarObj from '../Calendar/calendarObj';
import SyllabiList from '../ViewContent/Syllabus/SyllabiList';
import StoreDataContext from '../../context/StoreDataContext';
import numToDay from '../Calendar/numToDay';

const ViewContentOptions = props => {
  // const tasksContext = useContext(TasksContext);
  //const syllabusContext = useContext(SyllabusContext);
  const storeDataContext = useContext(StoreDataContext);

  const requestDataHandler = event => {
    let contentChoice = event.target.value; //'' number used in displayContent component
    let newContentChoice = '';
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
        newContentChoice = '1';
        break;

      case '2': //Today's Tasks
        typeOfData = 'tasks';
        handlerChoice = '2';
        dataLocation = today;
        infoType = null;
        info = null;
        newContentChoice = '2';
        break;

      case '3': //Pick Syllabus to View
        typeOfData = 'syllabus';
        handlerChoice = '';
        dataLocation = '';
        infoType = '';
        info = 'showSyllabiList';
        newContentChoice = '0';
        break;

      case '4':
        typeOfData = 'tasks';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        newContentChoice = '4';
        break;

      case '5':
        typeOfData = '';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        newContentChoice = '5';
        break;

      case '6':
        typeOfData = '';
        handlerChoice = '';
        dataLocation = '';
        infoType = null;
        info = null;
        newContentChoice = '6';
        break;
    }

    let dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };
    // alert(newContentChoice);
    let contentViewObject = {
      target: {
        value: newContentChoice
      }
    };
    // alert(`typeOfData: ${typeOfData}`);
    // alert(`handlerChoice ${handlerChoice}`);
    // alert(`dataLocation ${dataLocation}`);
    // alert(`infoType ${infoType}`);
    // alert(`info ${info}`);
    storeDataContext.dataRequestHandler(event, dataRequestMessage);

    storeDataContext.contentViewHandler(contentViewObject);
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
      storeDataContext.dataRequestHandler(event, dataRequestMessage);
    } else {
      dataRequestMessage = {
        typeOfData: 'syllabus',
        handlerChoice: '11',
        dataLocation: event.target.value,
        infoType: 'triggerShowSyllabus',
        info: ''
      };

      storeDataContext.dataRequestHandler(event, dataRequestMessage);
      // let newContentChoice = event.target.value;

      let contentViewObject = {
        target: {
          value: '10'
        }
      };
      storeDataContext.contentViewHandler(contentViewObject);
    }
  };

  const processSyllabiList = () => {
    return Object.keys(
      storeDataContext.everythingSyllabus.syllabusData.syllabi
    ).map((syllabus, index) => {
      //alert(`inside const ViewContentOptions
      //  props.syllabusName ${syllabusContext.everythingSyllabus.syllabusData.syllabi[syllabus].syllabusId}`);
      return (
        <React.Fragment key={index}>
          <SyllabiList
            click={event => pickedSyllabusRequestHandler(event)}
            syllabusId={
              storeDataContext.everythingSyllabus.syllabusData.syllabi[syllabus]
                .syllabusId
            }
            value={
              storeDataContext.everythingSyllabus.syllabusData.syllabi[syllabus]
                .syllabusId
            }
            index={index}
            syllabusName={
              storeDataContext.everythingSyllabus.syllabusData.syllabi[syllabus]
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
    let dataLocation = numToDay(Number(dayPicked));

    //(event, typeOfData, handlerChoice,dataLocation,infoType, info)
    let dataRequestMessage = {
      typeOfData: 'tasks',
      handlerChoice: '9',
      dataLocation: dataLocation,
      infoType: 'pickedDayTasks',
      info: ''
    };

    storeDataContext.dataRequestHandler(event, dataRequestMessage);
    let contentViewObject = {
      target: {
        value: '9'
      }
    };

    storeDataContext.contentViewHandler(contentViewObject);
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
              onClick={event => storeDataContext.contentViewHandler(event)}
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
              {storeDataContext.everythingSyllabus.syllabusData
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
