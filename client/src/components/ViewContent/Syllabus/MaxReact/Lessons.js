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
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[maxReact Lessons.js] shouldComponentUpdate');
  //   if (nextProps.lessonsLength !== this.props.lessonsLength) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //rendering current lessons headers
  lessonChangeHandler = (event, info) => {
    //let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info
    let today = calendarObj();
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
    let today = calendarObj();
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
        dataLocation = this.context.dataRequestDetails.dataLocation; // 'maxReactWorkLeft';
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

    this.context.dataRequestHandler(event, dataRequestMessage);
  };
  requestDataHandler = event => {
    let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info
    //let today = calendarObj();
    // let value = '';
    let dataRequestMessage = {};
    switch (contentchoice) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        // change
        //   event,
        //   'syllabus',
        //   functionChoiceChange,
        //   'id',
        //   lesson.id
        // )
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        typeOfData = 'syllabus';
        handlerChoice = '6';
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

    this.context.dataRequestHandler(event, dataRequestMessage);

    // let contentViewObject = {
    //   target: {
    //     value: contentchoice
    //   }
    // };

    // this.props.contentViewHandler(contentViewObject);
  };

  renderAllLessonsTableHeaderHandler() {
    //this is part of First row of table
    let clickToAddDelete = null;

    if (this.props.showLeftOverLessonsFromOrigSyllabus) {
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
    //let contentchoice = event.target.value;
    let typeOfData = 'syllabus'; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info

    let handlerType = null;

    switch (this.props.everything.contentChoice) {
      case '3': //show syllbus choice, then pick one to view
        break;
      case '6': //from newSyllabus Component
        this.props.showLeftOverLessonsFromOrigSyllabus
          ? (handlerType = 'add')
          : (handlerType = 'delete');
        // this.props.showLeftOverLessonsFromOrigSyllabus
        // ? handlerChoice =

        break;
    }

    return this.props.lessons.map((lesson, index) => {
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
    console.log('[Lessons] rendering...');
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
