import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/ViewContent/Tasks/Tasks';

import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../components/Cockpit/Cockpit.module.css';

import WithClass from '../hoc/WithClass';

import RightCockpit from './RightCockpit/RightCockpit';

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
import Layout from '../hoc/Layout/Layout';
import TasksData from './Store/TasksData';
import SyllabusData from './Store/SyllabusData';
import Store from './Store/Store';

class App extends Component {
  constructor(props) {
    super(props);
  }
  //
  //React Date

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
