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
import ShowAllTasksAfterAddingTask from '../../context/newTask-context';
import TryingOutContext from '../../context/tryOutContext.js';
import SyllabusData from '../Syllabus/SyllabusData';

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
    contentChoice: '0',
    showCockpit: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    lastLessonHeader: [],
    reRenderTasks: false,
    syllabi: [],
    contentChoiceHandlerTestNum: 7,
    realNum: 8,
    showLeftOverLessonsFromSyllabus: false,
    SyllabusDataStructure: {}
  };

  newTaskInfo2 = event => {
    let newSyllabus = event.target.value;
    //let newSyllabus2 = event.target.hoot;

    const wtf = this.state.syllabi;
    wtf.push(newSyllabus);
    this.setState({ syllabi: wtf });
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
    console.log('inside of contentViewHandler');
    console.log(`this is this.props.hoot: ${this.props.hoot} `);
    let newViewChoice = event.target.value;

    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view
    this.setState({ contentChoice: newViewChoice });
    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      switch (newViewChoice) {
        case '1': //All tasks
          if (this.state.tasks != 0) {
            this.setState({ lastHeader: this.state.tasks[0] });
          } else {
            this.setState({ lastHeader: this.state.lastHeader });
          }
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
          if (this.state.maxReact.length != 0) {
            this.setState({ lastLessonHeader: this.state.maxReact[0] });
          } else {
            this.setState({ lastLessonHeader: this.state.lastLessonHeader });
          }
          break;

        case '6': //Syllabus
          this.setState({ showLeftOverLessonsFromSyllabus: true });
          if (this.state.maxReact.length != 0) {
            this.setState({ lastLessonHeader: this.state.maxReact[0] });
          } else {
            this.setState({ lastLessonHeader: this.state.lastLessonHeader });
          }
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
        break;
      case '2':
        tasks = [...this.state.Monday];
        break;
      case '3':
        tasks = [...this.state.maxReact];
        break;
      case '6':
        tasks = [...this.state.maxReactWorkLeft];
    }

    tasks.splice(taskIndex, 1);

    switch (this.state.contentChoice) {
      case '1':
        this.setState({ tasks: tasks });
        break;
      case '2':
        this.setState({ Monday: tasks });
        break;
      case '3':
        this.setState({ maxReact: tasks });
        break;
      case '6':
        this.setState({ maxReactWorkLeft: tasks });
    }

    this.setState({ reRenderTasks: true });

    // //splice task of interst
    // tasks.splice(taskIndex, 1);

    // //update new list of tasks to state
    // this.setState({ tasks: tasks });

    //this.setState({ showTasksCounter: false });
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
  newestTaskHandler = e => {
    console.log('hey I am in newestTaskhandler');
    console.log(e.task);
    //need to fix this in newTask so that it automaticly picks up the default value of the radio button
    let location = !e.task.location ? (e.task.location = 'Popblado') : null;
    console.log(`target location is ${location}`);

    let newestEvent = [...this.state.tasks, e.task];
    //console.log(newestEvent[0].todo);

    this.setState({ tasks: newestEvent });
    //this.setState({ showEvents: true });
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

  deleteLessonHandler = taskIndex => {
    //get tasks array
    const lessons = [...this.state.maxReact];
    console.log('I am inside deleteLessonHandler');

    alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTasks: true });

    //adding the lesson from maxReactLeftOverWork -> maxReact

    //getting the current work left from
    const currentMaxReactLeftOverWork = [...this.state.maxReactWorkLeft];
    //find the correct index to add to maxReact
    const addThisLesson = currentMaxReactLeftOverWork[taskIndex];
    lessons.push(addThisLesson);
    this.setState({ maxReact: lessons });

    //deleting from currentMaxReactLeftOverWork
    currentMaxReactLeftOverWork.splice(taskIndex, 1);

    //updating currentMaxReactLeftOverWork after deleting a lesson
    this.setState({ maxReactWorkLeft: currentMaxReactLeftOverWork });
    /*
    !this.state.showLeftOverLessonsFromSyllabus
      ? lessons.push(addThisLesson)
      : //splice task of interst
        lessons.splice(taskIndex, 1);
    console.log(
      `this is the adThisLesson I'm sending fro deleteLessonHandler ${addThisLesson}`
    );
    */
    this.addNewLessonHandler(addThisLesson);

    //update new list of tasks to state
    //this.setState({ maxReact: lessons });
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

  newestSyllabusHandler = event => {
    console.log(`i am inside of newestSyllabusHandler event: ${event}`);

    let newContentChoice = event;
    let contentViewObject = {
      target: {
        value: newContentChoice
      }
    };

    this.contentViewHandler(contentViewObject);
  };

  receiveSyllabusData = (e, syllabusData) => {
    console.log(syllabusData);
    // let newContentChoice = haha;
    // let contentViewObject = {
    //   target: {
    //     value: haha
    //   }
    // };
    //console.log(event.target.value);
    //return this.contentViewHandler(contentViewObject);
    this.setState({ minReact: syllabusData });
  };

  contentChoiceHandler2 = () => {
    console.log('I am inside of contentChoiceHandler yyyyyyahh');
    let currentNum = this.state.realNum + 1;
    this.setState({ realNum: currentNum });
  };

  addNewLessonHandler = newLesson => {
    console.log('I am inside addNewLesonHandler');
    let currentMaxReactSyllabus = [...this.state.maxReact];

    currentMaxReactSyllabus.push(newLesson);
    console.log(currentMaxReactSyllabus);
    let currentShowLeftOverLessonsFromSyllabus = this.state
      .showLeftOverLessonsFromSyllabus;

    this.setState({
      showLeftOverLessonsFromSyllabus: !currentShowLeftOverLessonsFromSyllabus
    });
    this.setState({ maxReact: currentMaxReactSyllabus });
  };

  static contextType = ShowAllTasksAfterAddingTask;
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
            <TryingOutContext.Provider
              value={{
                contentChoiceHandler: this.contentChoiceHandler2,
                newestSyllabus: event => {
                  this.newestSyllabusHandler(event);
                },
                addNewLessonHandler: event => {
                  this.addNewLessonHandler(event);
                },
                showLeftOverLessonsFroaddmSyllabus: this.state
                  .showLeftOverLessonsFromSyllabus,
                syllabusData: event => {
                  this.receiveSyllabusData(event);
                }
              }}
            >
              <DisplayContent
                deleteTaskhandler={this.deleteTaskhandler}
                todayTaskChangeHandler={this.todayTaskChangeHandler}
                taskChangeHandler={this.taskChangeHandler}
                everything={this.state}
                lessonChangeHandler={this.lessonChangeHandler}
                newestTask={event => this.newestTaskHandler(event)}
                newestEvent={event => this.newestEventHandler(event)}
                deleteLessonHandler={this.deleteLessonHandler}
              />
            </TryingOutContext.Provider>
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
        viewContent={event => this.contentViewHandler(event)}
      />
    );
    //console.log(JSON.stringify(this.props.minReact, 2, null));
    // let showAlltasksAfterNewTask = (

    //console.log(this.props.hoot);
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
