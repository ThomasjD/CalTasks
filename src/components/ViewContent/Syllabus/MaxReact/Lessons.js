import React, { Component } from 'react';
//import Task from './Task/Task';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';
import student from '../../../../containers/Student.css';
import Lesson from './Lesson/Lesson';
import SyllabusContext from '../../../../context/syllabusContext';

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
  renderAllLessonsTableHeaderHandler() {
    //this is part of First row of table
    let clickToAddDelete = null;

    if (this.props.showLeftOverLessonsFromOrigSyllabus) {
      clickToAddDelete = 'Click to schedule this lesson';
    } else {
      clickToAddDelete = 'Click to Delete Lesson';
    }

    let header = Object.keys(this.props.lastLessonHeader);
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
    let handlerType = null;

    switch (this.props.everything.contentChoice) {
      case '3':
        break;
      case '6':
        this.props.showLeftOverLessonsFromOrigSyllabus
          ? (handlerType = 'add')
          : (handlerType = 'delete');

        break;
    }
    /*
        event, syllabusHandlerChoice, infoType, info
        contentChoice, from props
        taskHandler (can add it)
              1. add
              2. delete
              3. change*
        info: index/id
        */
    //
    return this.props.lessons.map((lesson, index) => {
      let functionChoiceDelete = null;
      let functionChoiceChange = null;

      if (this.props.everything.contentChoice === '3') {
        functionChoiceDelete = '3';
        functionChoiceChange = '4';
      } else {
        functionChoiceDelete = '5';
        functionChoiceChange = '6';
      }

      return (
        <ErrorBoundary key={lesson.id}>
          <Lesson
            lesson={lesson.lesson}
            completion={lesson.completion}
            particularKey={lesson.id}
            click={event =>
              this.context.processSyllabusRequestHandler(
                event,
                functionChoiceDelete,
                'index',
                index
              )
            }
            //changed={event => this.props.changed(event, handlerType, lesson.id)}

            changed={event =>
              this.context.processSyllabusRequestHandler(
                event,
                functionChoiceChange,
                'id',
                lesson.id
              )
            }
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

    return (
      <div>
        <h1 id="title"> Syllabus</h1>
        <p> contentChoice: {this.props.everything.contentChoice}</p>
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
