import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/Tasks/Tasks';
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit';
import Cockpit2 from '../components/Cockpit/Cockpit2';
import Navbar2 from '../components/Cockpit/Navbar/Navbar2';
import '../components/Tasks/Task/Task';
import TodayTasks from '../components/TodayTasks/TodayTasks';
//import MaxReact from '../components/Syllabus/MaxReact'
import WithClass from '../hoc/WithClass';
import NewTaskContext from '../context/newTask-context';

class App extends Component {
  constructor(props) {
    // const bigDaddy = {...this.DataStructure}
    // console.log(bigDaddy.state.ShowView)
    super(props);
  }

  state = {
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
    //lastHeader
    lastHeader: [],
    lastTodayTasksHeader: [],

    //show Content
    showTasks: false,
    showTasksToday: false,

    //reRender
    reRenderTasks: false,
    reRenderTodayTasks: false,

    showCockpit: true,
    showCockpit2: true,

    //
    showView: '0',
    showNewTask: false,
    showSyllabusFromNav: false
  };

  ContentViewHandler = choice => {
    //Interpreting which view option is chosen
    //there will be only 1 contentChoice stored in state
    switch (choice) {
      case '0': //only cockpit
        this.setState({ contentChoice: '0' });
        break;
      case '1': //All tasks
        this.setState({ contentChoice: '1' });
        break;
      case '2': //TodaysTasks
        this.setState({ contentChoice: '2' });
        break;
      case '3': //Syllabus
        this.setState({ contentChoice: '3' });
        break;
    }

    if (choice === this.state.contentChoice) {
      return <div>Current Content View closed</div>;
    }

    //Setting the lastHeader for each contentChoice
    //there will be 3 diff. lastHeader depending on # of dif lists to be displayed
    switch (contentChoice) {
      case '0': //only cockpit
        break;
      case '1': //All tasks
        this.setState({ lastHeader: this.state.tasks[0] });
        break;
      case '2': //TodaysTasks
        this.setState({ lastTodayTasksHeader: this.state.Monday[0] });
        break;
      case '3': //Syllabus
        this.setState({ lastSyllabusHeader: 'this.state.maxReact[0]' });
        break;
    }

    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view
  };

  toggleShowTasksHandler = () => {
    if (this.state.tasks != 0) {
      this.setState({ lastHeader: this.state.tasks[0] });
    } else {
      this.setState({ lastHeader: this.state.lastHeader });
    }

    //old way of showing all tasks
    const doesShow = this.state.showTasks;
    this.setState({ showTasks: !doesShow });

    //this allows to either show <Tasks> or <TodayTasks> at one time (not both at the same time)

    //showView = '0' => showing Regular rightcockpit
    //showView = '1' => showing AllTasks
    //showView = '2' => showing TodaysTasks
    //showView = '0' => showing <cockpit2> Syllabus (Reactmax)
    switch (this.state.showView) {
      case '0':
        this.setState({ showView: '1' });
        break;

      case '1':
        this.setState({ showView: '0' });
        break;

      case '2':
        this.setState({ showView: '1' });
        break;
    }

    //tryout
    const Monday = [...this.state.Monday];

    Monday[0].task = 'higher love';

    this.setState({ Monday: Monday });
  };

  //delete a task
  deleteTaskhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTasks: true });

    //get tasks array
    const tasks = [...this.state.tasks];

    //splice task of interst
    tasks.splice(taskIndex, 1);

    //update new list of tasks to state
    this.setState({ tasks: tasks });

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

  //addTaskTodayHandler = (event, taskChangedId) => {};

  displayTodayScheduleHandler = () => {
    if (this.state.Monday != 0) {
      this.setState({ lastTodayTasksHeader: this.state.Monday[0] });
    } else {
      this.setState({ lastTodayTasksHeader: this.state.lastTodayTasksHeader });
    }

    //this allows to either show <Tasks> or <TodayTasks> at one time (not both at the same time)
    //showView = '0' => showing Regular rightcockpit
    //showView = '1' => showing AllTasks
    //showView = '2' => showing TodaysTasks
    //showView = '0' => showing <cockpit2> Syllabus (Reactmax)

    switch (this.state.showView) {
      case '0':
        this.setState({ showView: '2' });
        break;

      case '1':
        this.setState({ showView: '2' });
        break;

      case '2':
        this.setState({ showView: '0' });
        break;

      case '3':
        this.setState({ showView: '2' });
        break;
    }

    //pull out the states tasks array
    const Monday = [...this.state.Monday];

    //update the task with id of interest w/ new task description
    Monday[0].task = 'higher love';

    /*old way of showing Today's Tasks
    const doesShowToday = this.state.showTasksToday;
    this.setState({ showTasksToday: !doesShowToday });
    */
  };

  render() {
    return (
      <WithClass passClass={rocky.App}>
        <Navbar2
          syllabusClicked={this.showSyllabusHandler}
          title={this.props.appTitle}
          allTasksClicked={this.toggleShowTasksHandler}
          tasksLength={this.state.tasks.length}
          todayTasksClicked={this.displayTodayScheduleHandler}
          deleteCockpit={() => {
            this.setState({ showCockpit: false });
          }}
        />
        <div className="container">
          <div className="d-flex flex-row ">
            <div className="card text-white bg-info m-1 p-1 col-3">
              <div className="p-1 ">{leftCockpit}</div>
            </div>
            <div className="card bg-light m-1 p-1 col-9">
              <div className="p-1 ">{displayTasks}</div>
            </div>
          </div>
        </div>
      </WithClass>
    );
  }
}

export default App;
//<div className="p-1 ">{rightCockpit}</div>
//<div className="d-flex flex-column "></div>;
//<p className={rocky[classes]}>Things to Do!</p>

//using css modules on multiple classNames
//{classNames({[styles.foo]: true, [styles.bar]: true})}
//<p className={classNames({[rocky[classes]]: true, [rocky.red]: true})}>Things to Do!</p>

/*old way of displaying
<WithClass passClass={rocky.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          {' '}
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            clicked={this.toggleShowTasksHandler}
            tasksLength={this.state.tasks.length}
            todayClicked={this.displayTodayScheduleHandler}
          />
        ) : null}

        {displayTasks}
      </WithClass>
      */

//    <div>
//    <h1 id="title">React Dynamic Table</h1>
//    <table id="students">
//      <tbody>
//        <tr>{this.renderTableHeaderHandler()}</tr>
//        {this.renderTableDataHandler()}
//      </tbody>
//    </table>
//  </div>
