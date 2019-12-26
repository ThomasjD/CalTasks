import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import Store from './Store';
import EventsData from './EventsData';
import SyllabusContext from '../../context/syllabusContext';

class Syllabus extends Component {
  state = {
    dataBaseName: 'syllabus',
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
    Monday: [
      {
        id: 'morning1',
        lesson:
          '96. Using shouldComponentUpdate for Optimization (Class-Components)',
        completion: false
      },
      {
        id: 'afternoon1',
        lesson: '97. Optimizing Functional Components with React.memo()',
        completion: false
      },
      {
        id: 'evening1',
        lesson: '98. When should you optimize',
        completion: false
      }
    ],
    Tuesday: [
      {
        id: 'morning2',
        lesson: '99. PureComponents instead of shouldComponentUpdate',
        completion: false
      },
      {
        id: 'afternoon2',
        lesson: '100. How React Updates the DOM',
        completion: false
      },
      {
        id: 'evening2',
        lesson: '101. Rendering Adjacent JSX Elements',
        completion: false
      }
    ],
    Wednesday: [
      { id: 'morning3', lesson: '', completion: false },
      { id: 'afternoon3', lesson: '', completion: false },
      { id: 'evening3', lesson: '', completion: false }
    ],
    Thursday: [
      { id: 'morning4', lesson: '', completion: false },
      { id: 'afternoon4', lesson: '', completion: false },
      { id: 'evening4', lesson: '', completion: false }
    ],
    Friday: [
      { id: 'morning5', lesson: '', completion: false },
      { id: 'afternoon5', lesson: '', completion: false },
      { id: 'evening5', lesson: '', completion: false }
    ],
    Saturday: [
      { id: 'morning6', lesson: '', completion: false },
      { id: 'afternoon6', lesson: '', completion: false },
      { id: 'evening6', lesson: '', completion: false }
    ],
    Sunday: [
      { id: 'morning7', lesson: '', completion: false },
      { id: 'afternoon7', lesson: '', completion: false },
      { id: 'evening7', lesson: '', completion: false }
    ],
    lastLessonHeader: [],
    realNum: 9,
    crunk: 'Hootie',
    showLeftOverLessonsFromSyllabus: false,
    TasksData: 'd',
    nothing: 'nothing',
    showData2: false
  };

  static contextType = SyllabusContext;
  assignLessonFromSyllabus = () => {
    this.setState({ showLeftOverLessonsFromSyllabus: true });

    if (this.state.maxReact.length != 0) {
      this.setState({ lastLessonHeader: this.state.maxReact[0] });
    } else {
      this.setState({ lastLessonHeader: this.state.lastLessonHeader });
    }
  };

  deleteLessonFromOriginalSyllabusHandler = taskIndex => {
    alert('Are you sure you want to add this lesson?');

    let currentOriginalLessons = [...this.state.maxReactWorkLeft];

    currentOriginalLessons.splice(taskIndex, 1);

    this.setState({ maxReactWorkLeft: currentOriginalLessons }, () =>
      this.props.receiveSyllabusDataHandler(this.state)
    );
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
    //showLeftOverLessonsFromSyllabus: !currentShowLeftOverLessonsFromSyllabus,
    //Showing current left over Lessons from Syllabus (after addition/deletion)
    this.setState(
      {
        maxReact: currentMaxReactSyllabus
      },
      this.deleteLessonFromOriginalSyllabusHandler(taskIndex)
    );
  };

  lastLessonHeaderHandler = () => {
    switch (this.context.dataRequestDetails.handlerChoice) {
      case '1':
        if (this.state.maxReact.length != 0) {
          this.setState(
            { lastLessonHeader: this.state.maxReact[0] },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        }

        break;

      case '2':
        alert('In case 2 of lastHeader()');
        if (this.state.Monday.length != 0) {
          this.setState(
            { lastLessonHeader: this.state.Monday[0] },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        }
        break;

      case '6':
        if (this.state.maxReactWorkLeft.length != 0) {
          this.setState(
            {
              lastLessonHeader: this.state.maxReactWorkLeft[0]
            },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.context.resetHandlerChoice(
                this.context.dataReceiverHandler(this.state)
              );
            }
          );
        }
        break;
    }
  };

  showLeftOverLessonsFromSyllabusHandler = () => {
    // this.setState(
    //   { showLeftOverLessonsFromSyllabus: true },
    //   () => this.lastLessonHeaderHandler(),
    //   () => {
    //     this.props.receiveSyllabusDataHandler(this.state);
    //   }
    // );
    // this.lastLessonHeaderHandler();
    // if(this.state.)
    // this.props.receiveSyllabusDataHandler(this.state);
  };

  deleteLessonFromAssignedSyllabusHandler = taskIndex => {
    let currentScheduledLessons = [...this.state.maxReact];
    currentScheduledLessons.splice(taskIndex, 1);
    this.setState({ maxReact: currentScheduledLessons }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };

  leftOverLessonChangeHandler = (lessonValue, taskChangeId) => {
    const foundTaskId = this.state.maxReactWorkLeft.findIndex(currentId => {
      return currentId.id === taskChangeId;
    });

    //createnew task item to put into array
    const updatedLessons = { ...this.state.maxReactWorkLeft[foundTaskId] };

    //using updated values to define the lesson of the particular pulled out lesson
    updatedLessons.lesson = lessonValue;

    //pull out of states maxReact array
    const lessons = [...this.state.maxReactWorkLeft];

    //update the new lesson w/ ID of interest from the copy of MaxReact (lessons)
    lessons[foundTaskId] = updatedLessons;

    //final update of lessons
    this.setState(
      { maxReactWorkLeft: lessons, showLeftOverLessonsFromSyllabus: true },
      () =>
        this.lastLessonHeaderHandler(
          this.context.dataReceiverHandler(this.state)
        )
    );
  };

  lessonChangeHandler = (lessonValue, taskChangeId) => {
    //Find the index of the lessons that matches the id sent in
    const foundTaskIndex = this.state.maxReact.findIndex(currentId => {
      return currentId.id === taskChangeId;
    });

    //createnew task item to put into array
    const updatedLessons = { ...this.state.maxReact[foundTaskIndex] };

    //using updated values to define the lesson of the particular pulled out lesson
    //updatedLessons.lesson = event.target.value;
    updatedLessons.lesson = lessonValue;

    //pull out of states maxReact array
    const lessons = [...this.state.maxReact];

    //update the new lesson w/ ID of interest from the copy of MaxReact (lessons)
    lessons[foundTaskIndex] = updatedLessons;

    //final update of lessons
    this.setState({ maxReact: lessons }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };
  render() {
    //syllabusHandlerChoice
    if (this.context.dataRequestDetails.typeOfData === 'syllabus') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1':
          this.lastLessonHeaderHandler();

          break;

        case '2':
          this.lastLessonHeaderHandler();
          break;

        case '3':
          // alert(
          //   `case 3 syllabusData for delete index:  ${this.context.dataRequestDetails['index']}`
          // );
          this.context.resetHandlerChoice(
            this.deleteLessonFromAssignedSyllabusHandler(
              this.context.dataRequestDetails.index
            )
          );
          break;

        case '4':
          //this.props.resetSyllabusHandlerChoice(

          this.context.resetHandlerChoice(
            this.lessonChangeHandler(
              this.context.dataRequestDetails['value'],
              this.context.dataRequestDetails.id
            )
          );
          break;

        case '5':
          this.context.resetHandlerChoice(
            this.addLessonFromOriginalSyllabusHandler(
              this.context.dataRequestDetails.index
            )
          );

          break;

        case '6':
          // leftOverLessonChangeHandler;
          //this.context.resetSyllabusHandlerChoice();

          this.leftOverLessonChangeHandler(
            this.context.dataRequestDetails.value,
            this.context.dataRequestDetails.id
          );

          break;

        case '7':
          //let index = this.props.index;
          //this.addLessonFromOriginalSyllabusHandler(index);
          this.props.resetSyllabusHandlerChoice(
            this.addLessonFromOriginalSyllabusHandler(this.props.index)
          );

          break;
        case '8':
      }
    }

    return null;
  }
}

export default Syllabus;
