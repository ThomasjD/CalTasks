import React, { Component } from 'react';
//import Task from './Task/Task';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';
import student from '../../../../containers/Student.css';
import Lesson from './Lesson/Lesson';
import SyllabusContext from '../../../../context/syllabusContext';
import calendarObj from '../../../Calendar/calendarObj';

class Lessons extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    clickToAddDelete: null
  };
  static contextType = SyllabusContext;

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('[maxReact Lessons.js] shouldComponentUpdate');
  //   if (nextProps.lessonsLength !== this.props.lessonsLength) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  //rendering current lessons headers
  lessonChangeHandler = (event, info) => {
    //let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    switch (this.props.contentChoice) {
      case '3':
        typeOfData = 'syllabus';
        handlerChoice = '4';
        dataLocation = this.context.dataRequestDetails.dataLocation;
        infoType = 'id';
        //info = '';
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        typeOfData = 'syllabus';
        handlerChoice = '6';
        dataLocation = this.context.dataRequestDetails.dataLocation; // 'maxReactWorkLeft';
        infoType = 'id';
        //info = null;
        break;
    }
    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };

    this.context.dataRequestHandler(event, dataRequestMessage);
  };

  lessonDeleteHandler = (event, info) => {
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};

    switch (this.props.contentChoice) {
      case '3':
        typeOfData = 'syllabus';
        handlerChoice = '3';
        dataLocation = this.context.dataRequestDetails.dataLocation;
        infoType = 'index';
        //info = '';
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        typeOfData = 'syllabus';
        handlerChoice = '5';
        dataLocation = 'maxReactWorkLeft';
        infoType = 'index';
        //info = null;
        break;
    }

    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };
    // alert(`inside [Lessons]  lessonDeleteHandler() typeOfData: ${dataRequestMessage.typeOfData}
    // handlerChoice: ${dataRequestMessage.handlerChoice}
    // dataLocation: ${dataRequestMessage.dataLocation}
    // infoType: ${dataRequestMessage.infoType}
    // info: ${dataRequestMessage.info}`);

    this.context.dataRequestHandler(event, dataRequestMessage);
  };

  renderAllLessonsTableHeaderHandler() {
    //this is part of First row of table
    let clickToAddDelete = null;
    // if (this.context.everythingSyllabus.syllabusData) {
    //   alert(
    //     `inside [Lessons] renderAllLessonsTableHeaderHandler() showLeftOverLessonsFromOrigSyllabus ${this.props.showLeftOverLessonsFromSyllabus}`
    //   );
    // }

    if (this.props.showLeftOverLessonsFromSyllabus) {
      clickToAddDelete = 'Click to schedule this lesson';
    } else {
      clickToAddDelete = 'Click to Delete Lesson';
    }

    let header = Object.keys(
      this.context.everythingSyllabus.syllabusData.lastLessonHeader
    );
    //lastLessonHeader;
    return header.map((key, index) => {
      //console.log(`this is the key: (${key}) and the index: (${index})`);

      if (key === 'id') {
        return <th key={index}>{clickToAddDelete}</th>;
      } else {
        return <th key={index}>{key.toUpperCase()}</th>;
      }
    });
  }

  //rendering current lessons
  allLessonssHandler() {
    // //let contentchoice = event.target.value;
    // let typeOfData = 'syllabus'; //string: syllabus,tasks,events,objectives
    // let handlerChoice = ''; //string: '#' handler inside of database
    // let dataLocation = ''; // string: where obj found inside database
    // let infoType = ''; //string: index/id/
    // let info = ''; //string: actual info

    return this.props.lessons.map((lesson, index) => {
      //alert(`inside allLessonssHandler index: ${index}`);
      //alert(`inside allLessonssHandler id: ${lesson.id}`);
      return (
        <ErrorBoundary key={lesson.id}>
          <Lesson
            lesson={lesson.lesson}
            completion={lesson.completion}
            particularKey={lesson.id}
            click={event => this.lessonDeleteHandler(event, index)}
            changed={event => this.lessonChangeHandler(event, lesson.id)}
          ></Lesson>
        </ErrorBoundary>
      );
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Syllabus] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  // // componentWillUpdate() {
  // //     return
  // // }

  componentDidUpdate(prevProps, prevState, message) {
    console.log('[Syllabus] componentDidUpdate');
    console.log(message);
  }

  // componentWillUnmount() {
  //   console.log('[Tasks.js] componentWillUnmount');
  // }

  render() {
    //<p> contentChoice: {this.props.everything.contentChoice}</p>;
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

export default Lessons;
