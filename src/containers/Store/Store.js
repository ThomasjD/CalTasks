import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';

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
  // TasksDataHandler = word => {
  //   // console.log(word);
  //   // let TasksData = word;
  //   this.setState({ TasksData: word });
  // };

  // TasksDataHandler2 = () => {
  //   let statusShowData2 = this.state.showData2;
  //   this.setState({ showData2: !statusShowData2, showData3: true });
  // };

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
    let message = { action: 'add', index: index };
    this.setState({ syllabusHandlerChoice: '7', action: 'add', index: index });
    console.log('Inside of sendSyllabusDataHandler2');
  };
  resetSyllabusHandlerChoice = () => {
    this.setState({ syllabusHandlerChoice: '0' });
  };

  render() {
    let displayMessage = null;
    if (this.state.syllabusHandlerChoice === '1') {
      displayMessage = <div>Hey syllabusHandlerchoice is recorded</div>;
    }
    let showData2message;

    /* displayWord --> show you can press button from RightRocket & take data from TasksData and display it on RightPocket
    let displayWord = null;

    if (this.state.showData3 === true) {
      displayWord = <p>{this.state.TasksData}</p>;
    }
    <RightCockpit
          displayWord={displayWord} 
          dataHandler2={this.TasksDataHandler2}
          showData2={this.state.showData2}
          showData3={this.state.showData3}
          data2={this.state.TasksData}
          dataHandler={this.TasksDataHandler2}
    />
    <TasksData
          data={this.TasksDataHandler}
          showData2={this.state.showData2}
          dataHandler2={this.TasksDataHandler2}
        ></TasksData>


      */
    //<SyllabusData></SyllabusData>

    //{JSON.stringify(this.state.syllabusData.showData2, null, 2)}
    return (
      <div>
        <SyllabusData
          resetSyllabusHandlerChoice={this.resetSyllabusHandlerChoice}
          syllabusHandlerChoice={this.state.syllabusHandlerChoice}
          receiveSyllabusDataHandler={this.receiveSyllabusDataHandler}
          sendSyllabusDataHandler={this.sendSyllabusDataHandler}
          index={this.state.index}
        ></SyllabusData>

        <RightCockpit
          //Syllabus

          sendSyllabusDataHandler={this.sendSyllabusDataHandler}
          addLessonFromOriginalSyllabusHandler={(event, index) =>
            this.sendSyllabusDataHandler2(event, index)
          }
          assignLessonFromSyllabus={event =>
            this.assignLessonFromSyllabus(event)
          }
          deleteLessonFromAssignedSyllabusHandler={event =>
            this.deleteLessonFromAssignedSyllabusHandler(event)
          }
          deleteLessonFromOriginalSyllabusHandler={event =>
            this.deleteLessonFromOriginalSyllabusHandler(event)
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
          everythingSyllabus={this.state}
        ></RightCockpit>
      </div>
    );
  }
}

export default Store;
