import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/Tasks/Tasks';
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../components/Cockpit/Cockpit.module.css';
import Cockpit2 from '../components/Cockpit/Cockpit2';
import Navbar2 from '../components/Cockpit/Navbar/Navbar2';
import '../components/Tasks/Task/Task';
import TodayTasks from '../components/TodayTasks/TodayTasks';
//import MaxReact from '../components/Syllabus/MaxReact'
import WithClass from '../hoc/WithClass';
import NewTaskContext from '../context/newTask-context';
import RightCockpit from './RightCockpit/RightCockpit';
import DataStructure from './DataStructure';

//import Student from './Student.css';
//import StudentTable from './StudentTable'
// import StudentTable from './StudentTable';
//import Navbar from '../components/Cockpit/navBar';
//import Syllabus from '../components/Syllabus/Syllabus';

//import for bootstraps
// import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import Post from '../components/Post';
// import Header from '../components/Header';
// import SideCard from '../components/SideCard';

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
    lastHeaderStatus: true,
    lastHeader: [],
    lastTodayTasksHeader: [],
    maxReact: [
      { id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      { id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {
        id: 'kjhck2',
        lesson: '92. Using useEffect() in Functional Components ',
        completion: false
      }
    ],
    Monday: [
      { id: 'morning', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening', timeOfDay: '', task: 'play ball' }
    ],
    Tuesday: [
      { id: 'morning', task: '' },
      { id: 'afternoon', task: '' },
      { id: 'evening', task: '' }
    ],
    showTasks: false,
    reRenderTasks: false,
    reRenderTodayTasks: false,
    showTasksToday: false,
    showCockpit: true,
    showCockpit2: true,
    showView: '0',
    showNewTask: false,
    showSyllabusFromNav: false,
    showSyllabus: true,
    contentChoice: '0'
  };

  static getDerivedStateFromProps = (state, props) => {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  //(year, month, day, hours, minutes, seconds, milliseconds)

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // let currentShowTaskStatus = this.state.showTasksCounter;
    // if (nextState.tasks.length !== this.state.tasks.length) {
    //   this.setState({ showTasksCounter: false });
    // }
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[App.js] componentDidUpdate ');
    if (nextState.tasks.length !== this.state.tasks.length) {
      this.setState({ reRenderTasks: false });
    }
  }

  contentViewHandler = event => {
    let newViewChoice = event.target.value;
    console.log(newViewChoice);
    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view
    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      //Setting which Content view to show
      //there will be only 1 contentChoice stored in state
      switch (newViewChoice) {
        case '0': //only cockpit
          this.setState({ contentChoice: '0' });
          break;
        case '1': //All tasks
          this.setState({ contentChoice: '1' });
          if (this.state.tasks != 0) {
            this.setState({ lastHeader: this.state.tasks[0] });
          } else {
            this.setState({ lastHeader: this.state.lastHeader });
          }
          break;

        case '2': //TodaysTasks
          this.setState({ contentChoice: '2' });
          if (this.state.Monday != 0) {
            this.setState({ lastTodayTasksHeader: this.state.Monday[0] });
          } else {
            this.setState({
              lastTodayTasksHeader: this.state.lastTodayTasksHeader
            });
          }
          break;
        case '3': //Syllabus
          this.setState({ contentChoice: '3', showSyllabus: true });

          break;
      }
    }
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
    let newTitle = event.target.value.newTaskTitle;
    console.log(`this is inside of app.js newTaskHandler ${newTitle}`);
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

    let displayContent = null;

    switch (this.state.contentChoice) {
      case '0':
        displayContent = (
          <React.Fragment>
            <h3>Hello Thomas.... What would you like to see?</h3>
            <img
              className={classes.logoImage}
              src={require('../Assets/cockpitIcon.png')}
            />
          </React.Fragment>
        );
        break;

      case '1':
        displayContent = (
          <React.Fragment>
            <p>tasks has # {this.state.tasks.length}</p>
                        
            <Tasks
              reRenderTasks={this.state.reRenderTasks}
              tasks={this.state.tasks}
              clicked={this.deleteTaskhandler}
              changed={this.taskChangeHandler}
              lastHeader={this.state.lastHeader}
            />
                      
          </React.Fragment>
        );
        break;

      case '2':
        displayContent = (
          <React.Fragment>
                        
            <TodayTasks
              reRenderTodayTasks={this.state.reRenderTodayTasks}
              monday={this.state.Monday}
              clicked={this.deleteTodayTaskhandler}
              changed={this.todayTaskChangeHandler}
              lastTodayTasksHeader={this.state.lastTodayTasksHeader}
            />
                      
          </React.Fragment>
        );
        break;

      case '3':
        displayContent = (
          <React.Fragment>
                        
            <Cockpit2
              showSyllabusFromNav={this.state.showSyllabusFromNav}
              showSyllabus={this.state.showSyllabus}
              tasks={this.state.tasks}
              lastHeader={this.state.lastHeader}
              deleteCockpit2={() => {
                this.setState({ showCockpit2: false });
              }}
            />
                      
          </React.Fragment>
        );
        break;
    }
    //syllabusClicked={this.showSyllabusHandler}
    //allTasksClicked={this.toggleShowTasksHandler}
    return (
      <WithClass passClass={rocky.App}>
        <Navbar2
          newTaskInfoComing={event => this.newTaskHandler(event)}
          title={this.props.appTitle}
          tasksLength={this.state.tasks.length}
          clicked={event => this.contentViewHandler(event)}
          deleteCockpit={() => {
            this.setState({ showCockpit: false });
          }}
        >
          {this.props.newTaskInfoComing}
        </Navbar2>

        <div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-danger m-1 active">
              <button
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => this.contentViewHandler(event)}
                value="0"
              />{' '}
              Cockpit
            </label>

            <label className="btn btn-primary m-1 active">
              <button
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={event => this.contentViewHandler(event)}
                value="1"
              />{' '}
              All Tasks
            </label>

            <label className="btn btn-success m-1 active ">
              <button
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
                onClick={event => this.contentViewHandler(event)}
                value="2"
              />{' '}
              Todays Tasks
            </label>

            <label className="btn btn-warning m-1 ">
              <button
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
                onClick={event => this.contentViewHandler(event)}
                value="3"
              />{' '}
              React Syllabus
            </label>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-row ">
            <div className="card text-white bg-info m-1 p-1 col-3">
              <div className="p-1">{viewOptions}</div>
            </div>
            <div className="card bg-light m-1 p-1 col-9">
              <div className="p-1 ">{displayContent}</div>
            </div>
          </div>
        </div>
        <p>{this.props.passData}</p>
      </WithClass>
    );
  }
}
//<p>{this.props.appTitle}</p>
export default App;
//<RightCockpit />
//using css modules on multiple classNames
//{classNames({[styles.foo]: true, [styles.bar]: true})}
//<p className={classNames({[rocky[classes]]: true, [rocky.red]: true})}
