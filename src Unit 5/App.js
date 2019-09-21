import React, { Component } from 'react';
import rocky from './App.module.css';
import Task from './Task/Task'
//import Radium, {StyleRoot} from 'radium';
//import wtf from './SpecialBtn.module.css';
import classNames from 'classnames';

class App extends Component {
  state = {
    tasks: [
      {id: 'qrwrwq', todo: 'Find work', deadline : 'Lunes', location: 'Poplado'},
      {id: 'egewhw', todo: 'buy shoes', deadline : 'Martes', location: 'Floresta'},
      {id: 'asfasv', todo: 'mail package', deadline : 'Jueves', location: 'Laureles'}
    ],
    showTasks: false
    
  }

  //show list of tasks
  toggleShowTasksHandler = () => {
    const doesShow = this.state.showTasks;
    this.setState({showTasks: !doesShow}) 
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

  deleteTaskUpdateStyleHandler = () => {
    
  }

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


  render() {

  
    
    let displayTasks = null;
    let btnClass = '';

    //clicking on the show Tasks button to show available tasks
    if (this.state.showTasks) {
      displayTasks = (
        <div>
        {this.state.tasks.map((task, index) => {
          return <Task 
          todo = {task.todo} 
          deadline = {task.deadline}
          location = {task.location}
          click = {() => this.deleteTaskhandler(index)}
          key = {task.id}
          changed = {(event) => this.taskChangeHandler (event, task.id)}>Change Task (below)</Task>
        })}  
      </div>
      )
      btnClass = rocky.specialbtn 
      //button turns red when <Tasks> are shown, when you can delete them (it overide style for hover)
      //style.backgroundColor = 'red'
    } else {
      btnClass = rocky.button
    }

    //use switch case to determine color of button (depending on how many tasks left)
    // console.log(classes)
     let tasklength = this.state.tasks.length

     console.log(tasklength)
//styling the 'Things to Do' using strings for classnames
     const classes = [];

    switch (this.state.tasks.length) {
      case (3): 
        classes.push('bold', 'red')
         break
      case (2): 
         classes.push('red')
         break
      case (1):
         classes.push('orange')
         break
      default: 
      classes.push('green')
       break
    }
    
    console.log(classes[0])

    

    //add multiple classes for <p> w/ strings
      //const classesFinal = classes.join(' ')
      const classesFinal = 'rocky.' + classes
    console.log(classesFinal)
    
    console.log(`This is classesFinal ${classesFinal}`)
    return (
     //<StyleRoot>
      <div className={rocky.App}>
        <h1>Medellin</h1>
       <p className={classNames({[rocky[classes[0]]]: true, [rocky[classes[1]]]: true})}>Things to Do!</p>

        

        <button 
          className = {btnClass}
          onClick = {this.toggleShowTasksHandler}>Show Task</button>
        {displayTasks}
        
        
      </div>
      //</StyleRoot>
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