import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';

class Syllabus extends Component {
  state = {
    maxReact: [
      { id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      { id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {
        id: 'kjhck2',
        lesson: '92. Using useEffect() in Functional Components ',
        completion: false
      }
    ],
    maxReactWorkLeft: [
      {
        lesson: '93. Controlling the useEffect() Behavior',
        id: 'this.state.contentChoice.lesson.bind(this)',
        completion: false
      },
      {
        lesson: '94. Cleaning up with Lifecycle Hooks & useEffect()',
        id: '94. Cleaning up with Lifecycle Hooks & useEffect()',
        completion: false
      },
      {
        lesson: '95. Cleanup Work with useEffect() - Ex',
        id: '95. Cleanup Work with useEffect() - Ex',
        completion: false
      }
    ],
    minReact: [
      {
        id: 'xvldddwil',
        lesson: '936670. (for props Changes)',
        completion: false
      },
      {
        id: 'bbbnnskk',
        lesson: '93531. (for state Changes)',
        completion: false
      },
      {
        id: 'kjhsdhck2',
        lesson: '9100. Using useEffect() in Functional Components ',
        completion: false
      }
    ],
    lastLessonHeader: [],
    crunk: 'Hootie and teh blowfish',
    showLeftOverLessonsFromSyllabus: false
  };
  syllabusDataHandler = () => {
    let sendBacKminReact = this.state.minReact;
    console.log(sendBacKminReact);
  };
  lastLessonHeaderHandler = () => {
    if (this.state.maxReact.length != 0) {
      this.setState({ lastLessonHeader: this.state.maxReact[0] });
    } else {
      this.setState({ lastLessonHeader: this.state.lastLessonHeader });
    }

    console.log(JSON.stringify(this.state.lastLessonHeader));
    console.log(this.state.lastLessonHeader);
  };

  assignLessonFromSyllabus = () => {
    this.setState({ showLeftOverLessonsFromSyllabus: true });

    if (this.state.maxReact.length != 0) {
      this.setState({ lastLessonHeader: this.state.maxReact[0] });
    } else {
      this.setState({ lastLessonHeader: this.state.lastLessonHeader });
    }
  };

  deleteLessonFromAssignedSyllabusHandler = (event, taskIndex) => {
    alert('Are you sure you want to delete this Lesson?');

    let currentScheduledLessons = [...this.state.maxReact];
    currentScheduledLessons.splice(taskIndex, 1);
    this.setState({ maxReact: currentScheduledLessons });
  };

  deleteLessonFromOriginalSyllabusHandler = (event, taskIndex) => {
    alert('Are you sure you want to add this lesson?');

    let currentOriginalLessons = [...this.state.maxReactWorkLeft];

    currentOriginalLessons.splice(taskIndex, 1);

    this.setState({ maxReactWorkLeft: currentOriginalLessons });
  };

  addLessonFromOriginalSyllabusHandler = taskIndex => {
    let currentOriginalLessons = [...this.state.maxReactWorkLeft];
    let lessonToAdd = currentOriginalLessons[taskIndex];

    //add to maxReact the picked lesson
    console.log('I am inside addNewLesonHandler');
    let currentMaxReactSyllabus = [...this.state.maxReact];
    currentMaxReactSyllabus.push(lessonToAdd);

    //currentMaxReactSyllabus.push(newLesson);
    console.log(currentMaxReactSyllabus);
    let currentShowLeftOverLessonsFromSyllabus = this.state
      .showLeftOverLessonsFromSyllabus;

    //Showing current left over Lessons from Syllabus (after addition/deletion)
    this.setState({
      showLeftOverLessonsFromSyllabus: !currentShowLeftOverLessonsFromSyllabus
    });
    //adding to redefining what maxReact is w/ new lesson
    this.setState({ maxReact: currentMaxReactSyllabus });

    this.deleteLessonFromOriginalSyllabusHandler(taskIndex);
  };

  lessonChangeHandler = (event, taskChangeId) => {
    const foundTaskId = this.state.maxReact.findIndex(currentId => {
      return currentId.id === taskChangeId;
    });

    //createnew task item to put into array
    const updatedLessons = { ...this.state.maxReact[foundTaskId] };

    //using updated values to define the lesson of the particular pulled out lesson
    updatedLessons.lesson = event.target.value;

    //pull out of states maxReact array
    const lessons = [...this.state.maxReact];

    //update the new lesson w/ ID of interest from the copy of MaxReact (lessons)
    lessons[foundTaskId] = updatedLessons;

    //final update of lessons
    this.setState({ maxReact: lessons });
  };
  showLeftOverLessonsFromSyllabus = () => {
    this.setState({ showLeftOverLessonsFromSyllabus: true });
    this.lastLessonHeaderHandler();
  };
  render() {
    return (
      <RightCockpit
        syllabusEverything={this.state}
        lastLessonHeaderHandler={event => this.lastLessonHeaderHandler(event)}
        assignLessonFromSyllabus={event => this.assignLessonFromSyllabus(event)}
        deleteLessonFromAssignedSyllabusHandler={event =>
          this.deleteLessonFromAssignedSyllabusHandler(event)
        }
        deleteLessonFromOriginalSyllabusHandler={event =>
          this.deleteLessonFromOriginalSyllabusHandler(event)
        }
        addLessonFromOriginalSyllabusHandler={event =>
          this.addLessonFromOriginalSyllabusHandler(event)
        }
        lessonChangeHandler={event => this.lessonChangeHandler(event)}
        showLeftOverLessonsFromSyllabus={event =>
          this.showLeftOverLessonsFromSyllabus(event)
        }
      ></RightCockpit>
    );
  }
}

export default Syllabus;
