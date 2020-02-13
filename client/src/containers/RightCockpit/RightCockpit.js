import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import rightcockpitClasses from './RightCockpit.module.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Navbar from '../../components/Cockpit/Navbar/Navbar';
import Lessons from '../../components/ViewContent/Syllabus/MaxReact/Lessons';
import ViewContentOptions from '../../components/Cockpit/ViewContentOptions';
import NewTask from '../../components/Creation/newTask';
import DisplayContent from '../../components/Cockpit/displayContent';
import DatePickerPicker from './DatePicker.js';

//import Layout from '../../hoc/Layout';
import NewEvent from '../../components/Creation/NewEvent';

import WeeklyTimeBudget from '../../components/Creation/WeeklyTimeBudget/WeeklyTimeBudget';
import StoreDataContext from '../../context/StoreDataContext';
import Modal from '../../components/UI/Modal/Modal';

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

    showCockpit: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    lastLessonHeader: [],
    reRenderTasks: false,
    syllabi: [],
    contentChoiceHandlerTestNum: 7,

    showLeftOverLessonsFromSyllabus: false
  };

  contentViewHandler = event => {
    let newViewChoice = event.target.value;
    //alert(`inside contentViewHandler ${newViewChoice}`);
    this.setState({ contentChoice: newViewChoice });

    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view

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
          break;

        case '4': //view tasks for picked day
          break; //this.context.dataRequestHandler(event, 'tasks', '', null, null);

        case '6': //Adding Lessons from Syllabus
          break;

        case '7': //View MaxReact
          break; //this.context.dataRequestHandler(event, 'syllabus', '8', null, null);

        case '8': //newEvent submitForm, later change the typeOfData to event
          break;

        case '9': //view tasks for picked day
          break; // this.context.dataRequestHandler(event, 'tasks', '9', null, null);

        case '11':
          break;
      }
    }
  };

  static contextType = StoreDataContext;

  render() {
    let leftCockpit = null;
    if (this.state.showCockpit == true) {
      leftCockpit = (
        <React.Fragment>
          <Cockpit
            contentViewHandler={() => this.contentViewHandler()}
            title={this.props.appTitle}
            deleteCockpit={() => {
              this.setState({ showCockpit: false });
            }}
          />
        </React.Fragment>
      );
    }

    let displayCockpit = (
      <div className="container">
        <div className="col-lg-8 order-0 float-left">
          <div className="card bg-light m-2 p-1 ">
            <DisplayContent everything={this.state} />
          </div>
        </div>

        <div className="row d-flex d-lg-block">
          <div className="col-lg-4 order-1 float-left">
            <div className="card text-white bg-info m-1 p-1">{leftCockpit}</div>
          </div>
        </div>
      </div>
    );

    let navbar = (
      <Navbar
        title={this.props.appTitle}
        deleteCockpit={() => {
          this.setState({ showCockpit: false });
        }}
      ></Navbar>
    );

    return (
      <React.Fragment>
        {/* {navbar} */}
        <div className={rightcockpitClasses.ViewOptions}>
          <ViewContentOptions />
        </div>
        <div className="rightcockpitClasses.deskTop">{displayCockpit}</div>
      </React.Fragment>
    );
  }
}

export default RightCockpit;
