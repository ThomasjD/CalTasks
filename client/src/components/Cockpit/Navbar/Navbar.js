import React, { useState, useEffect } from 'react';

//import App from '../../containers/App';
import App from '../../../containers/App';
import classes from '../Cockpit.module.css';
import classNames from 'classnames';
import NewTask from '../../Creation/newTask';
import NewSyllabus from '../../Creation/newSyllabus';

const Navbar = props => {
  const [newTaskState, setTaskState] = useState({
    showNewTaskForm: false
  });

  console.log(newTaskState.showNewTaskForm);

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
                    onClick={props.clicked}
                    value="1"
                  >
                    All Tasks
                  </button>
                </div>

                <div className={classes.specialbtnTodayTasks}>
                  <button
                    className="dropdown-item"
                    onClick={props.clicked}
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
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    <span className="navbar-toggler-icon"></span>
                    Syllabus
                  </button>
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={props.clicked}
                      value="7"
                    >
                      Syllabus List
                    </button>

                    <div className={classes.specialbtnTodayTasks}>
                      <button
                        className="dropdown-item"
                        onClick={props.clicked}
                        value="3"
                      >
                        MaxReact
                      </button>
                    </div>
                  </div>
                </div>
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
                  onClick={props.clickedNewTask}
                  value="4"
                  className="dropdown-item"
                >
                  {' '}
                  Task
                </button>

                <button
                  onClick={props.clickedNewEvent}
                  value="5"
                  className="dropdown-item"
                >
                  Event
                </button>

                <button
                  onClick={props.clickedSyllabus}
                  value="6"
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
// {newTaskState.showNewTaskForm ? (
//   <NewTask
//     newTaskInfo={props.newTaskInfo}
//     newTaskTitle={props.newTaskInfoComing}
//     changed={event => newSetTaskInfoState(event)}
//     category={newTaskInfoState.newTaskCategory}
//     categoryChange={event => newSetTaskCategoryState(event)}
//     showTasksAfterNewTask={props.clicked}
//   />
