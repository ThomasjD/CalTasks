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
import NewEvent from '../../components/Creation/NewEvent';
class RightCockpit extends Component {
  constructor(props) {
    super(props);
  }
  // const useSignUpForm = (callback) => {
  //   const [inputs, setInputs] = useState({});
  //   const handleSubmit = (event) => {
  //     if (event) {
  //       event.preventDefault();
  //     }
  //   }

  //   const handleInputChange = (event) => {
  //     event.persist();
  //     setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));

  //   }
  //   return {
  //     handleSubmit,
  //     handleInputChange,
  //     inputs
  //   };
  // }

  state = {
    events: [],
    showEvents: false,
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
    contentChoice: '0',
    showCockpit: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    lastLessonHeader: [],
    reRenderTasks: false,
    syllabi: []
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
  contentViewHandler = event => {
    let newViewChoice = event.target.value;
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
    const wtf = this.state.syllabi;

    wtf.push(maxReact2);
    console.log(
      `this is wtf after maxReact push ${JSON.stringify(wtf, null, 2)}`
    );

    this.setState({ syllabi: wtf });
    // console.log(
    //   `this is syllabi object after maxReact1 ${JSON.stringify(
    //     this.state.syllabi,
    //     null,
    //     2
    //   )}`
    // );
    // //console.log(this.state.syllabi[0].syllabusTitle);

    // let maxReact2 = new Syllabus(
    //   'maxReact2',
    //   'maxReact22222',
    //   '11asfd',
    //   'Use this in fusfsasgnctions',
    //   '11.Read allasf about this'
    // );

    // const wtf2 = [this.state.syllabi];
    // //if pushing... don't nead to spread the syllabi array out
    // //console.log(` ${}`)
    // wtf2.push(maxReact2);
    // console.log(`this is wtf2 after the push${JSON.stringify(wtf2, null, 2)}`);
    // //console.log(`This is wtf2 after push ${wtf2}`);
    // this.setState({ syllabi: wtf2 });
    // console.log(
    //   `this is this.state.syllabi after setState ${JSON.stringify(
    //     this.state.syllabi,
    //     null,
    //     2
    //   )}`
    // );
    // for (let x = 0; x <= 2; x++) {
    //   console.log(
    //     `this is inside loop ${x}  ${JSON.stringify(
    //       this.state.syllabi[x].syllabusTitle
    //     )}`
    //   );
    // }
    //console.log(
    // `this is syllabi object ${JSON.stringify(this.state.syllabi[0], null, 3)}`)

    // //console.log(
    //   `this is syllabi object 1 ${JSON.stringify(
    //     this.state.syllabi[1],
    //     null,
    //     3
    //   )}`
    // );

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
      }
    }
  };

  //delete a task
  deleteTaskhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');

    let tasks = [];

    // switch (this.state.contentChoice) {
    //   case '1':
    //     tasks = [...this.state.tasks];
    //     break;
    //   case '2':
    //     tasks = [...this.state.Monday];
    // }
    // tasks.splice(taskIndex, 1);

    // switch (this.state.contentChoice) {
    //   case '1':
    //     this.setState({ tasks: tasks });
    //     break;
    //   case '2':
    //     this.setState({ Monday: tasks });
    // }

    switch (this.state.contentChoice) {
      case '1':
        tasks = [...this.state.tasks];
        break;
      case '2':
        tasks = [...this.state.Monday];
        break;
      case '3':
        tasks = [...this.state.maxReact];
    }

    tasks.splice(taskIndex, 1);

    // switch (this.state.contentChoice) {
    //   case '1':
    //     tasks = [...this.state.obj];
    //     break;
    //   case '2':
    //     tasks = [...this.state.obj];
    // }

    switch (this.state.contentChoice) {
      case '1':
        this.setState({ tasks: tasks });
        break;
      case '2':
        this.setState({ Monday: tasks });
        break;
      case '3':
        this.setState({ maxReact: tasks });
    }

    // if (this.state.contentChoice === '1') {
    //   //get tasks array
    //   tasks = [...this.state.tasks];
    //   tasks.splice(taskIndex, 1);
    //   this.setState({ tasks: tasks });
    // } else {
    //   //get tasks array
    //   tasks = [...this.state.Monday];
    //   tasks.splice(taskIndex, 1);
    //   this.setState({ Monday: tasks });
    // }

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
  newTaskHandler = event => {
    console.log('hey I am in newTaskhandler');
    console.log(event);

    //let newTask = { ...event };
    //console.log(event);

    // switch (event.target.name) {
    //   case 'newTaskTitle':
    //     console.log('got it here in newTasktitle');
    //     break;
    //   case 'location':
    //     console.log('nbanbanbanba nba');
    //     break;
    //   case 'deadline':
    //     console.log('I am in the deadline baby');
    //     break;
    // }

    //console.log(event.target.value);
    // let newTaskTitle = event.target.newTaskTitle;
    // let newTaskTitleValue = event.target.value;
    // let newLocation = event.target.location;
    // let newLocationValue = event.target.value;
    // console.log(`this is eventTargetvalue ${newTaskTitleValue}`);
    // this.setState({
    //   newTaskTitle: newTaskTitleValue,
    //   newTaskLocation: newLocationValue
    // });

    // let oldTasks = [...this.state.tasks];
    // oldTasks.push({
    //   id: 'qrwrwq',
    //   todo: 'Find work',
    //   deadline: 'Lunes',
    //   location: 'Poplado'
    // });

    // let newTitle = event.target.value.newTaskTitle;
    // console.log(`this is inside of app.js newTaskHandler ${newTitle}`);
  };
  newTaskLocationHandler = event => {
    // let location = event.target.value;
    // console.log(event.name);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
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

  deleteLessonhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTasks: true });

    //get tasks array
    const lessons = [...this.state.maxReact];

    //splice task of interst
    lessons.splice(taskIndex, 1);

    //update new list of tasks to state
    this.setState({ maxReact: lessons });
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
  newestEvent = e => {
    console.log(e);
    // console.log(JSON.stringify(e.target.name, null, 2));
    // console.log(JSON.stringify(e.target.value, null, 2));
    //let currentEvent = this.state.events;
    let incomingEvent = { title: e.title }; //obj

    let newestEvent = [...this.state.events, incomingEvent];
    console.log(newestEvent[0].title);
    //console.log(JSON.stringify(incomingEvent, null, 3));
    // let newestEvent = currentEvent.push(incomingEvent);
    this.setState({ events: newestEvent });
    this.setState({ showEvents: true });
  };
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
        <div className="d-flex flex-row ">
          <div className="card text-white bg-info m-1 p-1 col-3">
            <div className="p-1">{viewOptions}</div>
          </div>
          <div className="card bg-light m-1 p-1 col-9">
            <div className="p-1 ">
              <DisplayContent
                deleteTaskhandler={this.deleteTaskhandler}
                everything={this.state}
                newTaskInfo={event => this.contentViewHandler(event)}
              />
            </div>
          </div>
        </div>
      </div>
    );

    let navbar = (
      <Navbar2
        newTaskInfoComing={event => this.newTaskHandler(event)}
        newTaskInfo={event => this.eventContentViewHandler(event)}
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
    //testing out Class without having component for syllabus

    return (
      <React.Fragment>
        {navbar}
        <NewEvent newestEvent={e => this.newestEvent(e)} />
        {viewContentOptions}
        {displayCockpit}
        {this.state.showEvents ? <p>{this.state.events[0].title}</p> : null}
      </React.Fragment>
    );
  }
}
export default RightCockpit;
//<div> {JSON.stringify(this.state.events, null, 3)}</div>
