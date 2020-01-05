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
    console.log('inside contentViewer');
    let newViewChoice = event.target.value;
    this.setState({ contentChoice: newViewChoice });

    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view

    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      switch (newViewChoice) {
        case '1': //All tasks
          this.context.dataRequestHandler(event, 'tasks', '1', null, null);

          break;

        case '2': //TodaysTasks
          this.context.dataRequestHandler(event, 'tasks', '2', null, null);

          break;

        case '3': //Syllabus (for viewing Syllabus)
          //reaching out to SyllabusData

          this.context.dataRequestHandler(event, 'syllabus', '1', null, null);

          break;
        case '4':
          //this.context.dataRequestHandler(event, 'syllabus', '8', null, null);
          break;

        case '6': //Adding Lessons from Syllabus
          this.context.dataRequestHandler(event, 'syllabus', '6', null, null);
          //this.props.showLeftOverLessonsFromSyllabus();
          break;
        case '7':
          this.context.dataRequestHandler(event, 'syllabus', '8', null, null);
          console.log('Inside case 7');

          break;
      }
    }
  };

  //dynamic edit task for Today (Monday)
  newestTaskHandler = contentChoice => {
    let newContentChoice = contentChoice;
    let contentViewObject = {
      target: {
        value: newContentChoice
      }
    };

    this.contentViewHandler(contentViewObject);
  };

  newTaskLocationHandler = event => {
    // let location = event.target.value;
    // console.log(event.name);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      realNum: '1'
    });
  };

  newestEventHandler = e => {
    let incomingEvent = { title: e.title, name: e.name }; //obj

    let newestEvent = [...this.state.events, incomingEvent];

    this.setState({ events: newestEvent, showEvents: true });
  };

  newestSyllabusHandler = contentChoice => {
    //this handler send message to contentViewHandler to render the new assigned contentchoice
    //console.log(`i am inside of newestSyllabusHandler event: ${event}`);

    let newContentChoice = contentChoice;
    let contentViewObject = {
      target: {
        value: newContentChoice
      }
    };

    this.contentViewHandler(contentViewObject);
  };

  //static usually used in getDerivedStateFromProps
  //static contextType = ShowAllTasksAfterAddingTask;
  static contextType = TasksDataContext;
  static contextType = SyllabusContext;
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
              contentViewHandler={event => this.contentViewHandler(event)}
              newestSyllabus={event => this.newestSyllabusHandler(event)}
              everything={this.state}
              newestTaskHandler={event => this.newestTaskHandler(event)}
              newestEvent={event => this.newestEventHandler(event)}
            />
          </div>
        </div>
      </div>
    );

    let navbar = (
      <Navbar
        newTaskInfoComing={event => this.newTaskHandler(event)}
        newTaskInfo={event => this.eventContentViewHandler(event)}
        clickedNewEvent={event => this.contentViewHandler(event)}
        title={this.props.appTitle}
        clicked={event => this.contentViewHandler(event)}
        clickedSyllabus={event => this.contentViewHandler(event)}
        clickedNewTask={event => this.contentViewHandler(event)}
        newTaskInfo2={event => this.newTaskHandler(event)}
        deleteCockpit={() => {
          this.setState({ showCockpit: false });
        }}
      >
        {this.props.newTaskInfoComing}
      </Navbar>
    );

    let viewContentOptions = (
      <ViewContentOptions
        contentViewHandler={event => this.contentViewHandler(event)}
      />
    );

    return (
      <React.Fragment>
        {navbar}
        <div className="rightcockpitClasses.deskTop">
          {viewContentOptions}

          {displayCockpit}
        </div>
      </React.Fragment>
    );
  }
}

export default RightCockpit;
