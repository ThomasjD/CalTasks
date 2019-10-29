import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Cockpit2 from '../../components/Cockpit/Cockpit2';
import Navbar2 from '../../components/Cockpit/Navbar/Navbar2';
import Tasks from '../../components/Tasks/Tasks';
import TodayTasks from '../../components/TodayTasks/TodayTasks';
import Lessons from '../../components/Syllabus/MaxReact/Lessons';
import ViewContent from './ViewContent';
//import Syllabus from './Syllabus';

class RightCockpit extends Component {
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
    Monday: [
      { id: 'morning', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening', timeOfDay: '', task: 'play ball' }
    ],

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
    reRenderTasks: false
  };

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
          if (this.state.maxReact !== 0) {
            this.setState({ lastLessonHeader: this.state.maxReact[0] });
          } else {
            this.setState({ lastLessonHeader: this.state.lastLessonHeader });
          }

        // if (this.props.showSyllabusFromNav) {
        //   this.setState({ showLessons: '1' });
        // }
        // this.setState({ contentChoice: '3', showSyllabus: true });
        // break;
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
              src={require('../../Assets/cockpitIcon.png')}
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
            {/* <React.Fragment>
              <p>tasks has # {this.state.maxReact.length}</p>
              <Lessons
                showSyllabusFromNav={this.state.showSyllabusFromNav}
                showSyllabus={this.state.showSyllabus}
                reRender={this.state.showLessons}
                lessons={this.state.maxReact}
                clicked={this.deleteLessonhandler}
                changed={this.lessonChangeHandler}
                lastHeader={this.state.lastHeader}
                lastLessonHeader={this.state.maxReact[0]}
                lessonsLength={this.state.maxReact.length}
                deleteCockpit2={() => {
                  this.setState({ showCockpit2: false });
                }}
              />
            </React.Fragment> */}
                      
          </React.Fragment>
        );
        break;
    }

    let displayCockpit = (
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
    );
    return (
      <React.Fragment>
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

        <ViewContent viewContent={event => this.contentViewHandler(event)} />
        {displayCockpit}
      </React.Fragment>
    );
  }
}
export default RightCockpit;
//{displayOptions}
//<Syllabus syllabus={this.setState} />

//
