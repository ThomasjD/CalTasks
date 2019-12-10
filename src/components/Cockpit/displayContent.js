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
import NewEvent from '../Creation/NewEvent';
import NewSyllabus from '../Creation/newSyllabus';

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
          <p>tasks has # {props.everythingSyllabus.maxReact.length}</p>
          <Lessons
            lessons={props.everythingSyllabus.maxReact}
            clicked={props.deleteLessonHandler}
            changed={props.lessonChangeHandler}
            lastLessonHeader={props.everythingSyllabus.lastLessonHeader}
            lessonsLength={props.everythingSyllabus.maxReact.length}
          />
        </React.Fragment>
      );
      break;
    case '4':
      displayContent = (
        <React.Fragment>
          <NewTask newestTask={props.newestTask} />
        </React.Fragment>
      );
      break;
    case '5':
      displayContent = (
        <React.Fragment>
          <NewEvent newestEvent={props.newestEvent} />
        </React.Fragment>
      );
      break;
    //showLeftOverLessonsFromSyllabus: for Table Header (add/delete this lesson message)
    case '6':
      displayContent = (
        <React.Fragment>
          <NewSyllabus newestSyllabus={props.newestSyllabus} />
          <Lessons
            showLeftOverLessonsFromOrigSyllabus={
              props.everythingSyllabus.showLeftOverLessonsFromOrigSyllabus
            }
            lessons={props.everythingSyllabus.maxReactWorkLeft}
            clicked={props.addLessonFromOriginalSyllabusHandler}
            changed={props.leftOverLessonChangeHandler}
            lastLessonHeader={props.everythingSyllabus.lastLessonHeader}
            lessonsLength={props.everythingSyllabus.maxReact.length}
          />
        </React.Fragment>
      );
      break;
  }

  return <div>{displayContent}</div>;
};

export default displayContent;
