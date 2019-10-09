import React, { Component } from 'react';
import rocky from './App.module.css';
import Tasks from '../components/Tasks/Tasks'
//import Task from '../components/Tasks/Task/Task'
import Cockpit from '../components/Cockpit/Cockpit'
import '../components/Tasks/Task/Task'
import TodayTasks from '../components/TodayTasks/TodayTasks'
//import MaxReact from '../components/Syllabus/MaxReact'
import WithClass from '../hoc/WithClass'

//import for bootstraps
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Post from '../components/Post';
import Header from '../components/Header';
import SideCard from '../components/SideCard';

class App extends Component {

  constructor(props) {
    super(props)
    //console.log('[App.js] constructor')
    //console.log(this.props.maxReact)
  }
  //data
  state = {
    tasks: [
      {id: 'qrwrwq', todo: 'Find work', deadline : 'Lunes', location: 'Poplado'},
      {id: 'egewhw', todo: 'buy shoes', deadline : 'Martes', location: 'Floresta'},
      {id: 'asfasv', todo: 'mail package', deadline : 'Jueves', location: 'Laureles'}
    ],
    // maxReact: [
    //   {id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
    //   {id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
    //   {id: 'kjhck2', lesson: '92. Using useEffect() in Functional Components ', completion: false },   
    // ],
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
    showTasksToday: false,
    showCockpit: true

  };

  static getDerivedStateFromProps = (state,props) => {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }
  
  shouldComponentUpdate () {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount') 
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[App.js] componentDidUpdate ')
  }

  
  

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
    
    //console.log(this.state.Monday[0])

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

     //console.log(tasklength)
    //<div className={rocky.App}> </div>
    return (
     
      
      
       <WithClass passClass = {rocky.App}>
      <button 
        onClick ={ () => {
          this.setState({ showCockpit: false })
        }}> Remove Cockpit</button>
      
      {this.state.showCockpit? (
        <Cockpit
        title = {this.props.appTitle}
        clicked = {this.toggleShowTasksHandler}
        tasksLength = {this.state.tasks.length}
        todayClicked = {this.displayTodayScheduleHandler}
        />
      ): null}
      
     {displayTasks}

     {displayTasksToday}
     
     </WithClass>
     
      
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




/*Template for Bootstrap
<React.Fragment>


    <Header />
    
    <main className="my-5 py-5">
      <Container className="px-0">
        
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
        
          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
          

            <SideCard />
          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Post />
          </Col>
          
        </Row>
      </Container>
    </main>
    
  </React.Fragment>
  */