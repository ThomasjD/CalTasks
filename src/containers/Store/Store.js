import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';
import SyllabusContext from '../../context/syllabusContext.js';

class Store extends Component {
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
    syllabusData: null,
    syllabusHandlerChoice: '0'
  };
  syllabusDataHandler = () => {
    let sendBacKminReact = this.state.minReact;
    console.log(sendBacKminReact);
  };
  // lastLessonHeaderHandler = () => {
  //   if (this.state.maxReact.length != 0) {
  //     this.setState({ lastLessonHeader: this.state.maxReact[0] });
  //   } else {
  //     this.setState({ lastLessonHeader: this.state.lastLessonHeader });
  //   }

  //   console.log(JSON.stringify(this.state.lastLessonHeader));
  //   console.log(this.state.lastLessonHeader);
  // };

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
  showLeftOverLessonsFromSyllabus = () => {
    this.setState({ showLeftOverLessonsFromSyllabus: true });
    this.lastLessonHeaderHandler();
  };

  //Now deals with syllabusData strictly
  sendSyllabusDataHandler = handlerChoice => {
    this.setState({ syllabusHandlerChoice: handlerChoice });
    console.log('Inside of sendSyllabusDataHandler');
  };

  receiveSyllabusDataHandler = syllabusData => {
    //this.setState({ syllabusData: syllabusData });
    let currentSyllabusDataState = { ...this.state.syllabusData };

    currentSyllabusDataState = syllabusData;
    //this to allow setState to finish inorder for the new syllabusData to show up

    //let currentLastLessonHeader = [...this.state.lastLessonHeader];
    //currentLastLessonHeader.push;
    this.setState(
      {
        syllabusData: currentSyllabusDataState,
        syllabusHandlerChoice: '0'
      },
      () => {
        console.log(this.state.syllabusData.lastLessonHeader);
      }
    );
    //console.log(JSON.stringify(this.state.syllabusData[0].showData2));
  };
  sendSyllabusDataHandler2 = (event, index) => {
    //let message = { action: 'add', index: index };
    this.setState({ syllabusHandlerChoice: '7', index: index });
    console.log('Inside of sendSyllabusDataHandler2');
  };
  resetSyllabusHandlerChoice = () => {
    this.setState({ syllabusHandlerChoice: '0' });
  };

  processSyllabusRequestHandler = (
    event,
    syllabusHandlerChoice,
    infoType,
    info
  ) => {
    console.log(
      `In processSyllabusRequestHandler event.value => ${event.target.value} `
    );
    // console.log(
    //   `In processSyllabusRequestHandler syllabusHandlerChoice => ${syllabusHandlerChoice} `
    // );
    let index = null;
    let id = null;
    let value = null;
    if (infoType === 'index') {
      index = info;
    } else {
      id = info;
    }
    //event, index, handlerType
    this.setState({
      syllabusHandlerChoice: syllabusHandlerChoice,
      index: index,
      id: id,
      value: event.target.value
    });
  };

  render() {
    let displayMessage = null;
    if (this.state.syllabusHandlerChoice === '1') {
      displayMessage = <div>Hey syllabusHandlerchoice is recorded</div>;
    }

    return (
      <div>
        <SyllabusContext.Provider
          value={{
            processSyllabusRequestHandler: this.processSyllabusRequestHandler,
            syllabusHandlerChoice: this.state.syllabusHandlerChoice,
            index: this.state.index,
            id: this.state.id
          }}
        >
          <SyllabusData
            value={this.state.value}
            resetSyllabusHandlerChoice={this.resetSyllabusHandlerChoice}
            syllabusHandlerChoice={this.state.syllabusHandlerChoice}
            receiveSyllabusDataHandler={this.receiveSyllabusDataHandler}
            sendSyllabusDataHandler={this.sendSyllabusDataHandler}
            index={this.state.index}
            id={this.state.id}
          ></SyllabusData>

          <RightCockpit
            //Syllabus

            sendSyllabusDataHandler={this.sendSyllabusDataHandler}
            addLessonFromOriginalSyllabusHandler={(
              event,
              syllabusHandlerChoice,
              infoType,
              info
            ) =>
              this.sendSyllabusDataHandler2(
                event,
                syllabusHandlerChoice,
                infoType,
                info
              )
            }
            assignLessonFromSyllabus={event =>
              this.assignLessonFromSyllabus(event)
            }
            deleteLessonFromAssignedSyllabusHandler={(
              event,
              syllabusHandlerChoice,
              infoType,
              info
            ) =>
              this.processSyllabusRequestHandler(
                event,
                syllabusHandlerChoice,
                infoType,
                info
              )
            }
            lessonChangeHandler={(event, taskIndex) =>
              this.lessonChangeHandler(event, taskIndex)
            }
            showLeftOverLessonsFromSyllabus={event =>
              this.showLeftOverLessonsFromSyllabus(event)
            }
            leftOverLessonChangeHandler={(
              event,
              syllabusHandlerChoice,
              infoType,
              info
            ) =>
              this.processSyllabusRequestHandler(
                event,
                syllabusHandlerChoice,
                infoType,
                info
              )
            }
            data={this.state.TasksData}
            everythingSyllabus={this.state}
          ></RightCockpit>
        </SyllabusContext.Provider>
      </div>
    );
  }
}

export default Store;
