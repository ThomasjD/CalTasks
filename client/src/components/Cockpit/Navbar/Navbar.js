import React, { useState, useEffect, useContext } from 'react';
import SyllabusContext from '../../../context/syllabusContext';
import TasksContext from '../../../context/tasksContext';
//import App from '../../containers/App';
import App from '../../../containers/App';
import classes from '../Cockpit.module.css';
import classNames from 'classnames';
import NewTask from '../../Creation/newTask';
import NewSyllabus from '../../Creation/newSyllabus';
import SyllabiList from '../../ViewContent/Syllabus/SyllabiList';
import calendarObj from '../../Calendar/calendarObj';

const Navbar = props => {
  const [newTaskState, setTaskState] = useState({
    showNewTaskForm: false
  });
  const syllabusContext = useContext(SyllabusContext);
  const tasksContext = useContext(TasksContext);

  const requestDataHandler = event => {
    let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info
    let today = calendarObj();
    // let value = '';
    let dataRequestMessage = {};
    switch (contentchoice) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        typeOfData = 'syllabus';
        handlerChoice = '10';
        dataLocation = 'maxReactWorkLeft';
        infoType = null;
        info = null;
        break;
    }
    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };

    syllabusContext.dataRequestHandler(event, dataRequestMessage);

    let contentViewObject = {
      target: {
        value: contentchoice
      }
    };

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
      // alert(
      //   `inside pickedSyllabusRequestHandler value from onClick: ${event.target.value}`
      // );
      dataRequestMessage = {
        typeOfData: 'syllabus',
        handlerChoice: '11',
        dataLocation: event.target.value,
        infoType: 'triggerShowSyllabus',
        info: ''
      };
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

  useEffect(() => {
    console.log('[Cockpit.js] useffect');

    //getting rid of timer
    // const timer = setTimeout(() => {
    //   alert('Delete Cockpit timer alert');
    // }, 100);

    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const newTaskHandler = () => {
    let currentShowNewTaskForm = newTaskState.showNewTaskForm;
    console.log('inside newTaskHandler()');
    setTaskState({
      showNewTaskForm: !currentShowNewTaskForm
    });
  };

  const [newTaskInfoState, setTaskInfoState] = useState({
    newTaskTitle: '',
    newTaskCategory: ''

    // newTaskDescription: '',
    // newTaskTime: '',
    // newTaskestimatedDuration: '' //estimation
  });

  //notify new title changed - set up new state
  const newSetTaskInfoState = event => {
    console.log('inside newTaskFormHandler()');
    setTaskInfoState({
      newTaskTitle: event.target.value,
      newTaskCategory: newTaskInfoState.newTaskCategory
    });
  };

  //notify new category changed - set up new state
  const newSetTaskCategoryState = event => {
    console.log('inside newSetTaskCategoryState()');
    setTaskInfoState({
      newTaskTitle: newTaskInfoState.newTaskTitle,
      newTaskCategory: event.target.value
    });
  };

  // const newSetTaskCategoryState = event => {
  //   console.log('inside newSetTaskCategoryState()');
  //   setTaskInfoState({
  //     newTaskTitle: newTaskInfoState.newTaskTitle,
  //     newTaskCategory: newTaskInfoState.newTaskCategory
  //   });
  // };

  //const newTaskDisplay = <NewTask />;

  const navbarDisplay = (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <button className="btn btn-primary" onClick={props.deleteCockpit}>
          {' '}
          Delete Cockpit
        </button>
        <div className="container">
          <div className={classes.specialbtn}>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span className="navbar-toggler-icon"></span>
                Tasks
              </button>

              <div className="dropdown-menu">
                <div className={classes.specialbtnAllTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="1"
                  >
                    All Tasks
                  </button>
                </div>

                <div className={classes.specialbtnTodayTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="2"
                  >
                    Today
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Objetivos
                </a>
              </li>
              <li className="nav-item dropdown active">
                {/* <label className="btn dropdown active"> */}
                <button
                  className="btn dropdown-toggle"
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
                {/* </label> */}
                {/* <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    <span className="navbar-toggler-icon"></span>
                    Syllabus
                  </button>

                  
                  <button
                    className="dropdown-item"
                    onClick={event => pickedSyllabusRequestHandler(event)}
                    value="showSyllabiList"
                  >
                    Syllabus List
                  </button>

                  <div
                    className="dropdown-item"
                    aria-labelledby="dropdownMenu2"
                  >
                    {syllabusContext.everythingSyllabus.syllabusData
                      ? processSyllabiList()
                      : null}
                  </div>
                </div> */}
              </li>
            </ul>

            <form className="form-inline ml-auto">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search Task"
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Creation
              </a>
              <div className="dropdown-menu">
                <button
                  onClick={event => requestDataHandler(event)}
                  value="4"
                  className="dropdown-item"
                >
                  {' '}
                  Task
                </button>

                <button
                  onClick={event => requestDataHandler(event)}
                  value="5" //will be contentChoice later
                  className="dropdown-item"
                >
                  Event
                </button>

                <button
                  onClick={event => requestDataHandler(event)}
                  value="6" //for contentChoice //'10' is handlerChoice
                  className="dropdown-item"
                >
                  Syllabus
                </button>

                <a href="#" className="dropdown-item">
                  Objetivo
                </a>
                <a href="#" className="dropdown-item"></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  return <React.Fragment>{navbarDisplay}</React.Fragment>;
};

export default Navbar;
