import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import Store from './Store';
import EventsData from './EventsData';
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
    showLeftOverLessonsFromSyllabus: false,
    TasksData: 'd',
    nothing: 'nothing',
    showData2: false
  };
  // syllabusDataHandler = () => {
  //   let sendBacKminReact = this.state.minReact;
  //   console.log(sendBacKminReact);
  // };

  assignLessonFromSyllabus = () => {
    this.setState({ showLeftOverLessonsFromSyllabus: true });

    if (this.state.maxReact.length != 0) {
      this.setState({ lastLessonHeader: this.state.maxReact[0] });
    } else {
      this.setState({ lastLessonHeader: this.state.lastLessonHeader });
    }
  };

  deleteLessonFromAssignedSyllabusHandler = taskIndex => {
    alert('Are you sure you want to delete this Lesson? Mate');

    let currentScheduledLessons = [...this.state.maxReact];
    currentScheduledLessons.splice(taskIndex, 1);
    this.setState({ maxReact: currentScheduledLessons }, () =>
      this.props.receiveSyllabusDataHandler(this.state)
    );
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

  leftOverLessonChangeHandler = (event, taskChangeId) => {
    const foundTaskId = this.state.maxReactWorkLeft.findIndex(currentId => {
      return currentId.id === taskChangeId;
    });

    //createnew task item to put into array
    const updatedLessons = { ...this.state.maxReactWorkLeft[foundTaskId] };

    //using updated values to define the lesson of the particular pulled out lesson
    updatedLessons.lesson = event.target.value;

    //pull out of states maxReact array
    const lessons = [...this.state.maxReactWorkLeft];

    //update the new lesson w/ ID of interest from the copy of MaxReact (lessons)
    lessons[foundTaskId] = updatedLessons;

    //final update of lessons
    this.setState({ maxReactWorkLeft: lessons });
  };

  TasksDataHandler = word => {
    // console.log(word);
    // let TasksData = word;
    this.setState({ TasksData: word });
  };

  TasksDataHandler2 = () => {
    this.setState(
      {
        showData2:
          'Hey so TaskDataHandler2 got called bec of handlerchoice passed in from RightCockpit -> Store -> SyllabusData'
      },
      () => {
        this.props.receiveSyllabusDataHandler(this.state);
      }
    );
  };

  lastLessonHeaderHandler = () => {
    switch (this.props.syllabusHandlerChoice) {
      case '1':
        if (this.state.maxReact.length != 0) {
          this.setState(
            { lastLessonHeader: this.state.maxReact[0] },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
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
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
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

  render() {
    switch (this.props.syllabusHandlerChoice) {
      case '1':
        this.lastLessonHeaderHandler();
        break;
      case '6':
        this.setState(
          {
            showLeftOverLessonsFromSyllabus: true
          },

          () => this.lastLessonHeaderHandler()
        );

        break;

      case '7':
        let index = this.props.index;
        //this.addLessonFromOriginalSyllabusHandler(index);
        this.props.resetSyllabusHandlerChoice(
          this.addLessonFromOriginalSyllabusHandler(index)
        );

        break;
      case '8':
        let deleteIndex = this.props.index;
        this.props.resetSyllabusHandlerChoice(
          this.deleteLessonFromAssignedSyllabusHandler(deleteIndex)
        );
    }

    return <div>I'm inside of SyllabusData </div>;
  }
}
/*
    return (
      <div>
        <TasksData
          data={this.TasksDataHandler}
          showData2={this.state.showData2}
          dataHandler2={this.TasksDataHandler2}
        ></TasksData>

        <RightCockpit
          displayWord={displayWord}
          dataHandler2={this.TasksDataHandler2}
          showData2={this.state.showData2}
          showData3={this.state.showData3}
          data2={this.state.TasksData}
          syllabusEverything={this.state}
          dataHandler={this.TasksDataHandler2}
          lastLessonHeaderHandler={event => this.lastLessonHeaderHandler(event)}
          assignLessonFromSyllabus={event =>
            this.assignLessonFromSyllabus(event)
          }
          deleteLessonFromAssignedSyllabusHandler={event =>
            this.deleteLessonFromAssignedSyllabusHandler(event)
          }
          deleteLessonFromOriginalSyllabusHandler={event =>
            this.deleteLessonFromOriginalSyllabusHandler(event)
          }
          addLessonFromOriginalSyllabusHandler={event =>
            this.addLessonFromOriginalSyllabusHandler(event)
          }
          lessonChangeHandler={(event, taskIndex) =>
            this.lessonChangeHandler(event, taskIndex)
          }
          showLeftOverLessonsFromSyllabus={event =>
            this.showLeftOverLessonsFromSyllabus(event)
          }
          leftOverLessonChangeHandler={event =>
            this.leftOverLessonChangeHandler(event)
          }
          data={this.state.TasksData}
        ></RightCockpit>
      </div>
    );
  }
}
*/

export default Syllabus;
