import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/Tasks/Tasks';
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit';
import Navbar2 from '../components/Cockpit/Navbar/Navbar2'
import '../components/Tasks/Task/Task';
import TodayTasks from '../components/TodayTasks/TodayTasks';
//import MaxReact from '../components/Syllabus/MaxReact'
import WithClass from '../hoc/WithClass';
//import DataStructure from './DataStructure';
//import Student from './Student.css';
//import StudentTable from './StudentTable'
import StudentTable from './StudentTable';
import Navbar from '../components/Cockpit/navBar';

//import for bootstraps
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Post from '../components/Post';
import Header from '../components/Header';
import SideCard from '../components/SideCard';

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
    maxReact: [
      {id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      {id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {id: 'kjhck2', lesson: '92. Using useEffect() in Functional Components ', completion: false },
    ],
    Monday: [
      { id: 'morning', task: '' },
      { id: 'afternoon', task: 'eat lunch' },
      { id: 'evening', task: 'play ball' }
    ],
    Tuesday: [
      { id: 'morning', task: '' },
      { id: 'afternoon', task: '' },
      { id: 'evening', task: '' }
    ],
    showTasks: false,
    showTasksToday: false,
    showCockpit: true,
    showView: '0',
    students: [
      { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
      { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
      { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
    ]
  };

  static getDerivedStateFromProps = (state, props) => {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  //(year, month, day, hours, minutes, seconds, milliseconds)

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[App.js] componentDidUpdate ');
  }

  //show list of tasks
  toggleShowTasksHandler = () => {
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

    //old way of showing all tasks
    const doesShow = this.state.showTasks;
    this.setState({ showTasks: !doesShow });

    //tryout
    const Monday = [...this.state.Monday];

    Monday[0].task = 'higher love';

    this.setState({ Monday: Monday });
  };

  //delete a task
  deleteTaskhandler = taskIndex => {
    //get tasks array
    const tasks = [...this.state.tasks];
    //splice task of interst
    tasks.splice(taskIndex, 1);
    //update new list of tasks to state
    this.setState({ tasks: tasks });
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

  addTaskTodayHandler = (event, taskChangedId) => {};

  displayTodayScheduleHandler = () => {
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

  renderTableDataHandler = () => {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  };

  renderTableHeaderHandler = () => {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  render() {
    // let TodayDateTime = new Date().toString();
    // console.log(TodayDateTime);
    // let dayToday = TodayDateTime;
    //console.log(this.state.Monday[0])

    //console.log(this.state.Monday[0])

    //let newShit =
    //this.setState (Monday: this.state.Monday[0].taskTime.afternoon) = thisData
    //console.log(this.state.Monday[0].taskTime.afternoon)
    let displayTasks = null;

    //clicking on the show Tasks button to show available tasks
    //tasks, clicked, changed will be sent to <Tasks>

    switch (this.state.showView) {
      case '1':
        displayTasks = (
          <React.Fragment>
            <Tasks
              tasks={this.state.tasks}
              clicked={this.deleteTaskhandler}
              changed={this.taskChangeHandler}
            />
          </React.Fragment>
        );
        break;

      case '2':
        displayTasks = (
          <React.Fragment>
            <TodayTasks monday={this.state.Monday} />
          </React.Fragment>
        );
        break;
    }
    let displayCockpit = null;
    if (this.state.showCockpit == true) {
      displayCockpit = (
        <Cockpit
          title={this.props.appTitle}
          allTasksClicked={this.toggleShowTasksHandler}
          tasksLength={this.state.tasks.length}
          todayTasksClicked={this.displayTodayScheduleHandler}
          deleteCockpit={() => {
            this.setState({ showCockpit: false });
          }}
        />
      );
    }

    let tasklength = this.state.tasks.length;

    return (

      <WithClass passClass={rocky.App}>
       
        <Navbar2
          title={this.props.appTitle}
          allTasksClicked={this.toggleShowTasksHandler}
          tasksLength={this.state.tasks.length}
          todayTasksClicked={this.displayTodayScheduleHandler}
          deleteCockpit={() => {
            this.setState({ showCockpit: false })}}
          />
        {displayCockpit}
        {displayTasks}
      </WithClass>
    );
  }
}

export default App;
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
