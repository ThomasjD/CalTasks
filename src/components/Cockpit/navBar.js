import React, { useState } from 'react';

//import App from '../../containers/App';
import Cockpit from './Cockpit';
import classes from './Cockpit.module.css';
import classNames from 'classnames';
import NewTask from '../Creation/newTask';

const Navbar = props => {
  const [newTaskState, setTaskState] = useState({
    showNewTaskForm: false
  });
  console.log(newTaskState.showNewTaskForm);

  const newTaskHandler = () => {
    let currentShowNewTaskForm = newTaskState.showNewTaskForm;
    console.log('inside newTaskHandler()');
    setTaskState({
      showNewTaskForm: !currentShowNewTaskForm
    });
  };

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
                //data-target="#navbarNav"
                data-toggle="dropdown"
              >
                <span className="navbar-toggler-icon"></span>
                Tasks
              </button>

              <div className="dropdown-menu">
                <div className={classes.specialbtnAllTasks}>
                  <a className="dropdown-item" onClick={props.allTasksClicked}>
                    All Tasks
                  </a>
                </div>

                <div className={classes.specialbtnTodayTasks}>
                  <a
                    className="dropdown-item"
                    onClick={props.todayTasksClicked}
                  >
                    Today
                  </a>
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
                <a className="nav-link" href="#">
                  Syllabus
                </a>
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
            <div class="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Creation
              </a>
              <div className="dropdown-menu">
                <a onClick={() => newTaskHandler()} className="dropdown-item">
                  Task
                </a>
                <a href="#" className="dropdown-item">
                  Event
                </a>
                <a href="#" className="dropdown-item">
                  Syllabus
                </a>
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
  return (
    <React.Fragment>
      {navbarDisplay}
      {newTaskState.showNewTaskForm ? <NewTask /> : null}
    </React.Fragment>
  );
};

export default Navbar;
//{newTaskDisplay}
