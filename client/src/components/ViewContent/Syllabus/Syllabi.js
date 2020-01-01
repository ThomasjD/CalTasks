import React, { Component } from 'react';
//import Task from './Task/Task';
import ErrorBoundary from './../../ErrorBoundary/ErrorBoundary';
import student from './../../../containers/Student.css';
import Syllabus from './Syllabus';
import SyllabusContext from './../../../context/syllabusContext';

class Syllabi extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    clickToAddDelete: null
  };
  static contextType = SyllabusContext;
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[maxReact Lessons.js] shouldComponentUpdate');
  //   if (nextProps.lessonsLength !== this.props.lessonsLength) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //rendering current lessons headers
  renderAllSyllabiTableHeaderHandler() {
    //this is part of First row of table
    let clickToAddDelete = null;

    // if (this.props.showLeftOverLessonsFromOrigSyllabus) {
    //   clickToAddDelete = 'Click to schedule this lesson';
    // } else {
    //   clickToAddDelete = 'Click to Delete Lesson';
    // }

    let header = Object.keys(
      this.context.everythingSyllabus.syllabusData.syllabi
    );
    //lastLessonHeader;
    return header.map((key, index) => {
      //console.log(`this is the key: (${key}) and the index: (${index})`);

      // switch (key) {
      //   case 'syllabusId':
      //     return <th key={index}>Click To Delete</th>;
      //     break;
      //   case 'name':
      //     break;
      //   case 'category':
      //     break;
      //   case 'concentration':
      //     break;
      // }
      if (key === 'syllabusId') {
        return <th key={index}>Click To Delete</th>;
      } else {
        return <th key={index}>{key.toUpperCase()}</th>;
      }
    });
  }

  //rendering current lessons
  allLessonssHandler() {
    let handlerType = null;

    // switch (this.props.everything.contentChoice) {
    //   case '3':
    //     break;
    //   case '6':
    //     this.props.showLeftOverLessonsFromOrigSyllabus
    //       ? (handlerType = 'add')
    //       : (handlerType = 'delete');

    //     break;
    // }

    return this.props.lessons.map((syllabus, index) => {
      //   let functionChoiceDelete = null;
      //   let functionChoiceChange = null;

      //   if (this.props.everything.contentChoice === '3') {
      //     functionChoiceDelete = '3';
      //     functionChoiceChange = '4';
      //   } else {
      //     functionChoiceDelete = '5';
      //     functionChoiceChange = '6';
      //   }

      return (
        <ErrorBoundary>
          <Syllabus></Syllabus>
        </ErrorBoundary>
      );
    });
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Tasks] getSnapshotBeforeUpdate');
  //   return { message: 'Snapshot' };
  // }

  // // componentWillUpdate() {
  // //     return
  // // }

  // componentDidUpdate(prevProps, prevState, message) {
  //   console.log('[Tasks] componentDidUpdate');
  //   console.log(message);
  // }

  // componentWillUnmount() {
  //   console.log('[Tasks.js] componentWillUnmount');
  // }

  render() {
    console.log('[allSyllabus] rendering...');
    //<p> contentChoice: {this.props.everything.contentChoice}</p>
    return (
      <div>
        <h3 id="title"> Syllabus</h3>

        <table id="students">
          <tbody>
            <tr>{this.renderAllLessonsTableHeaderHandler()}</tr>
            {this.allLessonssHandler()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Syllabi;
