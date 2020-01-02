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
    //alert('inside syllabi renderAllSyllabiTableHeaderHandler()');
    //this is part of First row of table
    let clickToAddDelete = null;

    // if (this.props.showLeftOverLessonsFromOrigSyllabus) {
    //   clickToAddDelete = 'Click to schedule this lesson';
    // } else {
    //   clickToAddDelete = 'Click to Delete Lesson';
    // }
    // if (
    //   this.context.everythingSyllabus.syllabusData.currentShowSyllabusList ===
    //   true
    // ) {
    let header = this.context.everythingSyllabus.syllabusData.syllabusHeaders;
    //lastLessonHeader;
    return header.map((key, index) => {
      //console.log(`this is the key: (${key}) and the index: (${index})`);

      switch (key) {
        case 'syllabusId':
          return <th key={index}>Click To Delete</th>;
          break;
        case 'name':
          return <th key={index}>{key.toUpperCase()}</th>;
          break;
        case 'concentration':
          return <th key={index}>{key.toUpperCase()}</th>;
          break;
        case 'subject':
          return <th key={index}>{key.toUpperCase()}</th>;
          break;
        case 'source':
          return <th key={index}>{key.toUpperCase()}</th>;
          break;
        case 'syllabusCompletionTime':
          return <th key={index}>Required Hours</th>;
          break;
        case 'completionStatus':
          return <th key={index}>Completion Status</th>;
          break;
      }
    });
    //}
  }

  //rendering current lessons
  allSyllabiHandler() {
    let arraySyllabi = null;
    let displaySyllabiInfo = null;
    //if (this.context.everythingSyllabus.syllabusData) {
    //[ key1, key2, key3] //name of syllabus obj
    let info = Object.keys(
      this.context.everythingSyllabus.syllabusData.syllabi
    );

    return info
      .map(syllabusKey => {
        //array of syllabus object
        return this.context.everythingSyllabus.syllabusData.syllabi[
          syllabusKey
        ];
      })
      .map((key, index) => {
        //alert(`syllabus: ${key.name} index: ${key.syllabusCompletionTime}`);

        return (
          <Syllabus
            particularKey={key.name}
            name={key.name}
            index={index}
            category={key.category}
            concentration={key.concentration}
            subject={key.subject}
            source={key.source}
            syllabusCompletionTime={key.syllabusCompletionTime}
            completionStatus={key.completionStatus}
          />
        );
      });
  }

  render() {
    //<p> contentChoice: {this.props.everything.contentChoice}</p>
    return (
      <div>
        <h3 id="title"> Syllabi</h3>

        <table id="students">
          <tbody>
            <tr>{this.renderAllSyllabiTableHeaderHandler()}</tr>
            {this.allSyllabiHandler()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Syllabi;
