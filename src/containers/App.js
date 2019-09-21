import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/Tasks/Tasks'
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit'
import '../components/Tasks/Task/Task'
import TodayTasks from '../components/TodayTasks/TodayTasks'
//import classNames from 'classnames';

//import Radium, {StyleRoot} from 'radium';
//import wtf from './SpecialBtn.module.css';

class App extends Component {
  //data
  state = {
    tasks: [
      {id: 'qrwrwq', todo: 'Find work', deadline : 'Lunes', location: 'Poplado'},
      {id: 'egewhw', todo: 'buy shoes', deadline : 'Martes', location: 'Floresta'},
      {id: 'asfasv', todo: 'mail package', deadline : 'Jueves', location: 'Laureles'}
    ],
    maxReact: [
      {id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      {id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {id: 'kjhck2', lesson: '92. Using useEffect() in Functional Components ', completion: false },   
    ],
    Monday: [
      {id: 'morning', task: ""},
      {id: 'afternoon', task: ""},
      {id: 'evening', task: ""}
    ],
    Tuesday: [
      {id: 'morning', task: ""},
      {id: 'afternoon', task: ""},
      {id: 'evening', task: ""}
    ],   
    showTasks: false, 
    showTasksToday: false

  };

  //show list of tasks
  toggleShowTasksHandler = () => {
    const doesShow = this.state.showTasks;
    this.setState({showTasks: !doesShow}) 


    //tryout
    const Monday = [...this.state.Monday]

    
    Monday[0].task = 'higher love'

    this.setState({Monday: Monday})
    }

  //delete a task 
  deleteTaskhandler = (taskIndex) => {
    //get tasks array
    const tasks = [...this.state.tasks];  
    //splice task of interst
    tasks.splice(taskIndex, 1);
    //update new list of tasks to state
    this.setState({tasks : tasks})
  }

  //dynamic edit task
  taskChangeHandler = (event, taskChangedId) => {

    //find the task that matches the taskChangedId
    const foundTaskId = this.state.tasks.findIndex(currentId => {
      return currentId.id === taskChangedId
    })

    //create new task item that we will put into array
    const updatedTask = {...this.state.tasks[foundTaskId]}
    updatedTask.todo = event.target.value

    //pull out the states tasks array
    const tasks = [...this.state.tasks]
    
    //update the task with id of interest w/ new task description
    tasks[foundTaskId] = updatedTask
    
    //update the state
    this.setState({tasks: tasks})
    }

   addTaskTodayHandler = (event, taskChangedId) => {
    
    

   }
   
   displayTodayScheduleHandler = () => {
     //pull out the states tasks array
    const Monday = [...this.state.Monday]

    //update the task with id of interest w/ new task description
    Monday[0].task = 'higher love'
    
    const doesShowToday = this.state.showTasksToday;
    this.setState({showTasksToday: !doesShowToday}) 
   }

  render() {
    //console.log(this.state.Monday[0])
    
    console.log(this.state.Monday[0])

    //let newShit = 
    //this.setState (Monday: this.state.Monday[0].taskTime.afternoon) = thisData
    //console.log(this.state.Monday[0].taskTime.afternoon)
    let displayTasks = null;
    
    //clicking on the show Tasks button to show available tasks
      //tasks, clicked, changed will be sent to <Tasks>

    if (this.state.showTasks) {
      displayTasks = (
        
            <Tasks 
              tasks={this.state.tasks}
              clicked = {this.deleteTaskhandler}
              changed = {this.taskChangeHandler}
            />
      ) 
    } 

    let displayTasksToday = null;

    if (this.state.showTasksToday) {
      displayTasksToday = (
        
            <TodayTasks
              monday = {this.state.Monday} 
            />
      ) 
    } 

     let tasklength = this.state.tasks.length

     console.log(tasklength)
    
    return (
      <div className={rocky.App}>  
        <Cockpit
        clicked = {this.toggleShowTasksHandler}
        tasks = {this.state.tasks}
        todayClicked = {this.displayTodayScheduleHandler}
     />
     {displayTasks}
     {displayTasksToday}

      </div>
     
      
    );
    
  }
}
//<p>this class is {classes}</p>
//export default Radium(App);
export default App
//<p className={rocky[classes]}>Things to Do!</p>



//using css modules on multiple classNames 
//{classNames({[styles.foo]: true, [styles.bar]: true})}
//<p className={classNames({[rocky[classes]]: true, [rocky.red]: true})}>Things to Do!</p>