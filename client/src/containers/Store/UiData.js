import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
//import rightcockpitClasses from './RightCockpit.module.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Navbar from '../../components/Cockpit/Navbar/Navbar';
import Lessons from '../../components/ViewContent/Syllabus/MaxReact/Lessons';
import ViewContentOptions from '../../components/Cockpit/ViewContentOptions';
import NewTask from '../../components/Creation/newTask';
import DisplayContent from '../../components/Cockpit/displayContent';
// import DatePickerPicker from './DatePicker.js';

//import Layout from '../../hoc/Layout';
import NewEvent from '../../components/Creation/NewEvent';
import RightCockpitContext from '../../context/RightCockpitContext';
import WeeklyTimeBudget from '../../components/Creation/WeeklyTimeBudget/WeeklyTimeBudget';
import StoreDataContext from '../../context/StoreDataContext';

class RightCockpit extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    events: [],
    showEvents: false,
    showDatePicker: false,
    newTask: [],
    newTaskTitle: '',
    newTaskLocation: '',
    numberOfGuests: 2,
    contentChoice: '0',
    showCockpit: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    lastLessonHeader: [],
    reRenderTasks: false,
    syllabi: [],
    contentChoiceHandlerTestNum: 7,

    showLeftOverLessonsFromSyllabus: false
  };

  newTaskInfo2 = event => {
    let newSyllabus = event.target.value;

    const syllabi = this.state.syllabi;
    syllabi.push(newSyllabus);
    this.setState({ syllabi: syllabi });
    console.log(
      `this is this.state.syllabi after maxReact push ${JSON.stringify(
        this.state.syllabi,
        null,
        2
      )}`
    );
  };

  contentViewHandler = event => {
    let newViewChoice = event.target.value;
    //alert(`inside contentViewHandler ${newViewChoice}`);
    this.setState({ contentChoice: newViewChoice });

    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view
    //alert(`contentChoice: ${this.state.contentChoice}`);
    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      switch (newViewChoice) {
        case '1': //All tasks
          //this.context.dataRequestHandler(event, 'tasks', '1', null, null);

          break;

        case '2': //TodaysTasks
          //this.context.dataRequestHandler(event, 'tasks', '2', null, null);

          break;

        case '3': //Syllabus (for viewing List of syllabus
          //reaching out to SyllabusData

          //this.context.dataRequestHandler(event, 'syllabus', '1', null, null);

          break;
        case '4': //view tasks for picked day
          //this.context.dataRequestHandler(event, 'tasks', '', null, null);
          break;

        case '6': //Adding Lessons from Syllabus
          //this.context.dataRequestHandler(event, 'syllabus', '6', null, null);
          //this.props.showLeftOverLessonsFromSyllabus();
          break;
        case '7': //View MaxReact
          //this.context.dataRequestHandler(event, 'syllabus', '8', null, null);

          break;
        case '8': //newEvent submitForm, later change the typeOfData to event
          // this.context.dataRequestHandler(
          //   event,
          //   'tasks',
          //   '8',
          //   'unAssignedTasksForWeek',
          //   info
          // );
          break;
        case '9': //view tasks for picked day
          // this.context.dataRequestHandler(event, 'tasks', '9', null, null);
          // console.log('Inside case 9');

          break;
        case '11':
          break;
      }
    }
  };

  static contextType = StoreDataContext;

  render() {
    if (this.context.dataRequestDetails.typeOfData === 'UiData') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1':
          this.context.resetHandlerChoice(() => this.contentViewHandler());
          break;
        case '2':
          break;
      }
    }

    return (
      <React.Fragment>
        <div>UiData Component</div>
      </React.Fragment>
    );
  }
}

export default RightCockpit;
