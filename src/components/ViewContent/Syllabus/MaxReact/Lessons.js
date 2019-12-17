import React, { Component } from 'react';
//import Task from './Task/Task';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';
import student from '../../../../containers/Student.css';
import Lesson from './Lesson/Lesson';

class Lessons extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    clickToAddDelete: null
  };

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
    let clickToAddDelete = null;

    this.props.showLeftOverLessonsFromOrigSyllabus
      ? (clickToAddDelete = 'Click to schedule this lesson')
      : (clickToAddDelete = 'Click to Delete Lesson');

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
    return this.props.lessons.map((lesson, index) => {
      return (
        <ErrorBoundary key={lesson.id}>
          <Lesson
            lesson={lesson.lesson}
            completion={lesson.completion}
            particularKey={lesson.id}
            click={() => this.props.clicked(index)}
            changed={event => this.props.changed(event, lesson.id)}
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
