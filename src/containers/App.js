import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/ViewContent/Tasks/Tasks';
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../components/Cockpit/Cockpit.module.css';
import Cockpit2 from '../components/Cockpit/Cockpit2';
import Navbar2 from '../components/Cockpit/Navbar/Navbar2';
import '../components/ViewContent/Tasks/Task/Task';
import TodayTasks from '../components/ViewContent/TodayTasks/TodayTasks';
//import MaxReact from '../components/Syllabus/MaxReact'
import WithClass from '../hoc/WithClass';
import NewTaskContext from '../context/tasksContext';
import RightCockpit from './RightCockpit/RightCockpit';
import DataStructure from './DataStructure';

// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//import Student from './Student.css';
//import StudentTable from './StudentTable'
// import StudentTable from './StudentTable';
//import Navbar from '../components/Cockpit/navBar';
//import Syllabus from '../components/Syllabus/Syllabus';

//import for bootstraps
// import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import Post from '../components/Post';
// import Header from '../components/Header';
// import SideCard from '../components/SideCard';
import TasksData from './Store/TasksData';
import SyllabusData from './Store/SyllabusData';
import Store from './Store/Store';
class App extends Component {
  constructor(props) {
    super(props);
  }
  //
  //<RightCockpit />
  render() {
    return (
      <WithClass passClass={rocky.App}>
        <Store />
      </WithClass>
    );
  }
}
//<p>{this.props.appTitle}</p>
export default App;
//
//using css modules on multiple classNames
//{classNames({[styles.foo]: true, [styles.bar]: true})}
//<p className={classNames({[rocky[classes]]: true, [rocky.red]: true})}
