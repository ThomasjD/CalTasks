import React from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import Cockpit from './Cockpit';
import Cockpit2 from './Cockpit2';
import Navbar2 from './Navbar/Navbar2';
import Tasks from '../ViewContent/Tasks/Tasks';
import TodayTasks from '../ViewContent/TodayTasks/TodayTasks';
import Lessons from '../ViewContent/Syllabus/MaxReact/Lessons';
import ViewContent from './ViewContentOptions';
import NewTask from '../Creation/newTask';

const displayContent = props => {
  let displayContent = null;

  switch (props.everything.contentChoice) {
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
          <p>tasks has # {props.everything.tasks.length}</p>
                      
          <Tasks
            reRenderTasks={props.everything.reRenderTasks}
            tasks={props.everything.tasks}
            clicked={props.deleteTaskhandler}
            changed={props.taskChangeHandler}
            lastHeader={props.everything.lastHeader}
          />
                    
        </React.Fragment>
      );
      break;

    case '2':
      displayContent = (
        <React.Fragment>
                      
          <TodayTasks
            reRenderTodayTasks={props.everything.reRenderTodayTasks}
            monday={props.everything.Monday}
            //clicked={props.deleteTodayTaskhandler}
            clicked={props.deleteTaskhandler}
            changed={props.todayTaskChangeHandler}
            lastTodayTasksHeader={props.everything.lastTodayTasksHeader}
          />
                    
        </React.Fragment>
      );
      break;

    case '3':
      displayContent = (
        <React.Fragment>
          <p>tasks has # {props.everything.maxReact.length}</p>
          <Lessons
            reRender={props.everything.showLessons}
            lessons={props.everything.maxReact}
            clicked={props.deleteTaskhandler}
            changed={props.lessonChangeHandler}
            lastLessonHeader={props.everything.lastLessonHeader}
            lessonsLength={props.everything.maxReact.length}
          />
        </React.Fragment>
      );
      break;
    case '4':
      displayContent = (
        <React.Fragment>
          <NewTask
            // newTaskTitle = {}
            // category = {}
            // location = {}
            // newTaskTitle={props.setState.newTaskTitle}
            // newTaskLocation={event => props.newTaskLocationHandler(event)}
            newestTask={props.newestTask}
          />
        </React.Fragment>
      );
      break;
  }

  return <div>{displayContent}</div>;
};

export default displayContent;
