import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Cockpit2 from '../../components/Cockpit/Cockpit2';
import Navbar2 from '../../components/Cockpit/Navbar/Navbar2';
import Tasks from '../../components/ViewContent/Tasks/Tasks';
import TodayTasks from '../../components/ViewContent/TodayTasks/TodayTasks';
import Lessons from '../../components/ViewContent/Syllabus/MaxReact/Lessons';
import ViewContentOptions from '../../components/Cockpit/ViewContentOptions';
import NewTask from '../../components/Creation/newTask';
import DisplayContent from '../../components/Cockpit/displayContent';
import Syllabus from '../../components/Creation/Syllabus';
import classes2 from './RightCockpit.module.css';
import DatePickerPicker from './DatePicker.js';
import ShowAllTasksAfterAddingTask from '../../context/tasksContext';
import SyllabusContext from '../../context/syllabusContext';
import TasksDataContext from '../../context/tasksContext';

class RightCockpit extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    events: [],
    showEvents: false,
    showDatePicker: false,
    newTask: [],
    tasks: [
      {
        id: 'qrwrwq',
        todo: 'Find work',
        deadline: 'Lunes',
        location: 'Poplado'
      },
      {
        id: 'egewhw',
        todo: 'buy shoes',
        deadline: 'Martes',
        location: 'Floresta'
      },
      {
        id: 'asfasv',
        todo: 'mail package',
        deadline: 'Jueves',
        location: 'Laureles'
      }
    ],
    Monday: [
      { id: 'morning', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening', timeOfDay: '', task: 'play ball' }
    ],
    newTaskTitle: '',
    newTaskLocation: '',
    isGoing: true,
    numberOfGuests: 2,
    contentChoice: '0',
    showCockpit: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    lastLessonHeader: [],
    reRenderTasks: false,
    syllabi: [],
    contentChoiceHandlerTestNum: 7,
    realNum: '8',
    showLeftOverLessonsFromSyllabus: false,
    SyllabusDataStructure: {},
    blowfish: 'hootie'
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
          this.context.dataRequestHandler(null, '1', null, null);
          // if (this.state.tasks != 0) {
          //   this.setState({ lastHeader: this.state.tasks[0] });
          // } else {
          //   this.setState({ lastHeader: this.state.lastHeader });
          // }
          break;

        case '2': //TodaysTasks
          if (this.state.Monday != 0) {
            this.setState({ lastTodayTasksHeader: this.state.Monday[0] });
          } else {
            this.setState({
              lastTodayTasksHeader: this.state.lastTodayTasksHeader
            });
          }
          break;

        case '3': //Syllabus
          //reaching out to SyllabusData

          this.props.sendSyllabusDataHandler('1');

          break;

        case '6': //Adding Lessons from Syllabus
          //syllabusData
          this.props.sendSyllabusDataHandler('6');
          //this.props.showLeftOverLessonsFromSyllabus();
          break;
        case '7':
          console.log('Inside case 7');

          break;
      }
    }
  };

  //delete a task
  deleteTaskhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');

    let tasks = [];

    switch (this.state.contentChoice) {
      case '1':
        tasks = [...this.state.tasks];
        this.setState({ tasks: tasks });
        break;
      case '2':
        tasks = [...this.state.Monday];
        this.setState({ Monday: tasks });
        break;
      case '3':
        //syllabusData
        this.props.deleteLessonFromAssignedSyllabusHandler();
        // tasks = [...this.state.maxReact];
        // this.setState({ maxReact: tasks });
        break;
      case '6':
        //syllabusData
        this.props.addLessonFromOriginalSyllabusHandler();

      // tasks = [...this.state.maxReactWorkLeft];
      // this.setState({ maxReactWorkLeft: tasks });
    }

    tasks.splice(taskIndex, 1);

    this.setState({ reRenderTasks: true });
  };

  deleteTodayTaskhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTodayTasks: true });

    //get tasks array
    const Monday = [...this.state.Monday];

    //splice task of interst
    Monday.splice(taskIndex, 1);

    //update new list of tasks to state
    this.setState({ Monday: Monday });

    //this.setState({ showTasksCounter: false });
  };

  //dynamic edit task
  taskChangeHandler = (event, taskChangedId) => {
    //find the task that matches the taskChangedId
    const foundTaskId = this.state.tasks.findIndex(currentId => {
      return currentId.id === taskChangedId;
    });

    //create new task item that we will put into array
    const updatedTask = { ...this.state.tasks[foundTaskId] };
    updatedTask.todo = event.target.value;

    //pull out the states tasks array
    const tasks = [...this.state.tasks];

    //update the task with id of interest w/ new task description
    tasks[foundTaskId] = updatedTask;

    //update the state
    this.setState({ tasks: tasks });
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

  todayTaskChangeHandler = (event, taskChangedId) => {
    //find the task that matches the taskChangedId
    const foundTaskId = this.state.Monday.findIndex(currentId => {
      return currentId.id === taskChangedId;
    });

    //create new task item that we will put into array
    const updatedTask = { ...this.state.Monday[foundTaskId] };

    updatedTask.task = event.target.value;

    //pull out the states tasks array
    const Monday = [...this.state.Monday];

    //update the task with id of interest w/ new task description
    Monday[foundTaskId] = updatedTask;

    //update the state
    this.setState({ Monday: Monday });
  };

  newestEventHandler = e => {
    console.log(e);
    // console.log(JSON.stringify(e.target.name, null, 2));
    // console.log(JSON.stringify(e.target.value, null, 2));
    //let currentEvent = this.state.events;
    let incomingEvent = { title: e.title, name: e.name }; //obj

    let newestEvent = [...this.state.events, incomingEvent];
    console.log(newestEvent[0].title);
    //console.log(JSON.stringify(incomingEvent, null, 3));
    // let newestEvent = currentEvent.push(incomingEvent);
    this.setState({ events: newestEvent });
    this.setState({ showEvents: true });
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
  // static contextType = SyllabusContext;
  render() {
    let viewOptions = null;
    if (this.state.showCockpit == true) {
      viewOptions = (
        <React.Fragment>
          <Cockpit
            title={this.props.appTitle}
            allTasksClicked={this.toggleShowTasksHandler}
            tasksLength={this.state.tasks.length}
            todayTasksClicked={this.displayTodayScheduleHandler}
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
            <div className="card text-white bg-info m-3 p-3">{viewOptions}</div>
          </div>
        </div>

        <div className="col-lg-8 order-0 float-left">
          <div className="card bg-light m-3 p-3 ">
            <DisplayContent
              contentViewHandler={event => this.contentViewHandler(event)}
              newestSyllabus={event => this.newestSyllabusHandler(event)}
              deleteTaskhandler={this.deleteTaskhandler}
              todayTaskChangeHandler={this.todayTaskChangeHandler}
              taskChangeHandler={this.taskChangeHandler}
              everything={this.state}
              everythingSyllabus={this.props.everythingSyllabus}
              lessonChangeHandler={this.props.lessonChangeHandler}
              newestTaskHandler={event => this.newestTaskHandler(event)}
              newestEvent={event => this.newestEventHandler(event)}
            />
          </div>
        </div>
      </div>
    );

    let navbar = (
      <Navbar2
        newTaskInfoComing={event => this.newTaskHandler(event)}
        newTaskInfo={event => this.eventContentViewHandler(event)}
        clickedNewEvent={event => this.contentViewHandler(event)}
        title={this.props.appTitle}
        tasksLength={this.state.tasks.length}
        clicked={event => this.contentViewHandler(event)}
        clickedSyllabus={event => this.contentViewHandler(event)}
        clickedNewTask={event => this.contentViewHandler(event)}
        newTaskInfo2={event => this.newTaskHandler(event)}
        deleteCockpit={() => {
          this.setState({ showCockpit: false });
        }}
      >
        {this.props.newTaskInfoComing}
      </Navbar2>
    );

    let viewContentOptions = (
      <ViewContentOptions
        contentViewHandler={event => this.contentViewHandler(event)}
      />
    );

    return (
      <React.Fragment>
        {navbar}

        {viewContentOptions}

        {displayCockpit}
      </React.Fragment>
    );
  }
}

export default RightCockpit;
