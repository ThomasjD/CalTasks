import React, { Component, useContext } from 'react';
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
import SyllabusContext from '../../context/syllabusContext';

const DisplayContent = props => {
  const syllabusContext = useContext(SyllabusContext);

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
            clicked={props.deleteTodayTaskhandler}
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
          {syllabusContext.everythingSyllabus.syllabusData ? (
            <div>
              <p>
                tasks has #{' '}
                {
                  syllabusContext.everythingSyllabus.syllabusData.maxReact
                    .length
                }
              </p>

              <Lessons
                everything={props.everything}
                lessons={
                  syllabusContext.everythingSyllabus.syllabusData.maxReact
                }
                lessonsLength={
                  syllabusContext.everythingSyllabus.syllabusData.maxReact
                    .length
                }
              />
            </div>
          ) : null}
        </React.Fragment>
      );
      /*
        clicked={(event, index, handlerType) =>
                    props.deleteLessonHandler(event, index, handlerType)
                  }
        */

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
      if (syllabusContext.everythingSyllabus.syllabusData) {
        displayContent = (
          <React.Fragment>
            <NewSyllabus newestSyllabus={props.newestSyllabus} />

            {syllabusContext.everythingSyllabus.syllabusData
              .showLeftOverLessonsFromSyllabus ? (
              <Lessons
                everything={props.everything}
                // showLeftOverLessonsFromOrigSyllabus={
                //   this.props.everythingSyllabus.syllabusData
                //     .showLeftOverLessonsFromSyllabus
                // }
                lessons={
                  syllabusContext.everythingSyllabus.syllabusData
                    .maxReactWorkLeft
                }
                // changed={(event, handlerType, id) =>
                //   this.props.leftOverLessonChangeHandler(event, handlerType, id)
                // }
                lastLessonHeader={
                  syllabusContext.everythingSyllabus.syllabusData
                    .lastLessonHeader
                }
                lessonsLength={
                  syllabusContext.everythingSyllabus.syllabusData
                    .maxReactWorkLeft.length
                }
              />
            ) : null}
          </React.Fragment>
        );
      }

      break;
  }

  return <div>{displayContent}</div>;
};

export default DisplayContent;
