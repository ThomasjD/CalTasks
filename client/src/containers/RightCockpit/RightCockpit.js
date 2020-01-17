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
import SyllabusContext from '../../context/syllabusContext';
import TasksDataContext from '../../context/tasksContext';
//import Layout from '../../hoc/Layout';
import NewEvent from '../../components/Creation/NewEvent';
import RightCockpitContext from '../../context/RightCockpitContext';
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

  /*
      console.log(newViewChoice);
    console.log(JSON.stringify(newViewChoice, null, 2));
    //console.log(event.target.['location'].value);

    let maxReact2 = new Syllabus(
      'maxReact2',
      'maxReact22222',
      '11asfd',
      'Use this in fusfsasgnctions',
      '11.Read allasf about this'
    );

    //if array is empty no need to use spread operator
    const tryOutSyllabi = this.state.syllabi;

    tryOutSyllabi.push(maxReact2);

    this.setState({ syllabi: tryOutSyllabi });
*/

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
      }
    }
  };

  viewRequestHandler = message => {
    const {
      event,
      typeOfView, //'syllabus', 'tasks', 'events'
      viewHandlerChoice, //determines view only
      dataLocation, //object location where it needs to locate to pull, change, or alter
      dataHandlerChoice, //# representing the what will get done in database
      infoType, //category of index,id,
      info //the actual info
    } = message;
    let newViewChoice = viewHandlerChoice;

    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      switch (newViewChoice) {
        case '1': //All tasks
          // this.context.dataRequestHandler(event, typeOfView, '1', null, null);

          break;

        case '2': //TodaysTasks
          // this.context.dataRequestHandler(event, typeOfView, '2', null, null);

          break;

        case '3': //Syllabus (for viewing Syllabus)
          //reaching out to SyllabusData

          // this.context.dataRequestHandler(event, typeOfView, '1', null, null);

          break;
        case '4': //newEvent submitForm, later change the typeOfData to event
          // this.context.dataRequestHandler(
          //   event,
          //   typeOfView,
          //   '8',
          //   dataLocation,
          //   null
          // );
          break;

        case '6': //Adding Lessons from Syllabus
          // this.context.dataRequestHandler(event, typeOfView, '6', null, null);
          //this.props.showLeftOverLessonsFromSyllabus();
          break;
        case '7':
          // this.context.dataRequestHandler(event, typeOfView, '8', null, null);
          //console.log('Inside case 7');

          break;
        case '8':
          break;
        case '9':
          break;
      }
    }
  };
  //static usually used in getDerivedStateFromProps
  //static contextType = ShowAllTasksAfterAddingTask;
  static contextType = TasksDataContext;
  //static contextType = SyllabusContext;
  render() {
    let leftCockpit = null;
    if (this.state.showCockpit == true) {
      leftCockpit = (
        <React.Fragment>
          <Cockpit
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
        <div className="row d-flex d-lg-block">
          <div className="col-lg-4 order-1 float-left">
            <div className="card text-white bg-info m-3 p-3">{leftCockpit}</div>
          </div>
        </div>

        <div className="col-lg-8 order-0 float-left">
          <div className="card bg-light m-3 p-3 ">
            <NewEvent />

            <DisplayContent
              dataLocation={this.state.dataLocation}
              contentViewHandler={event => this.contentViewHandler(event)}
              newestSyllabus={event => this.newestSyllabusHandler(event)}
              everything={this.state}
              newestTaskHandler={event => this.newestTaskHandler(event)}
              newestEvent={event => this.newestEventHandler(event)}
              syllabusData={this.context.syllabusData}
              contentChoice={this.state.contentChoice}
            />
          </div>
        </div>
      </div>
    );

    let navbar = (
      <Navbar
        newTaskInfoComing={event => this.newTaskHandler(event)}
        newTaskInfo2={event => this.newTaskHandler(event)}
        title={this.props.appTitle}
        contentViewHandler={event => this.contentViewHandler(event)}
        deleteCockpit={() => {
          this.setState({ showCockpit: false });
        }}
      >
        {this.props.newTaskInfoComing}
      </Navbar>
    );

    let viewContentOptions = (
      <ViewContentOptions
        viewRequestHandler={event => this.viewRequestHandler(event)}
        contentViewHandler={event => this.contentViewHandler(event)}
        contentChoice={this.state.contentChoice}
      />
    );

    return (
      <React.Fragment>
        <RightCockpitContext.Provider
          value={{
            contentViewHandler: this.contentViewHandler,
            newContentViewHandler: (contentChoice, info) =>
              this.newContentViewHandler(contentChoice, info),
            rightCockpitState: this.state
          }}
        >
          {navbar}
          <div className="rightcockpitClasses.deskTop">
            {viewContentOptions}

            {displayCockpit}
          </div>
        </RightCockpitContext.Provider>
      </React.Fragment>
    );
  }
}

export default RightCockpit;
