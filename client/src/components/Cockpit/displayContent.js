import React, { Component, useContext } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import Cockpit from './Cockpit';
import Tasks from '../ViewContent/Tasks/Tasks';
import TodayTasks from '../ViewContent/TodayTasks/TodayTasks';
import Lessons from '../ViewContent/Syllabus/MaxReact/Lessons';
import ViewContent from './ViewContentOptions';
import NewTask from '../Creation/newTask';
import NewEvent from '../Creation/NewEvent';
import NewSyllabus from '../Creation/newSyllabus';
import SyllabusContext from '../../context/syllabusContext';
import TasksContext from '../../context/tasksContext';
import statusClass from '../../components/ViewContent/Tasks/Tasks.module.css';
import Syllabi from '../ViewContent/Syllabus/Syllabi';
import PickedDayTasks from '../ViewContent/PickedDayTasks/PickedDayTasks';
import SyllabiList from '../ViewContent/Syllabus/SyllabiList';
import DisplayPickedSyllabus from '../ViewContent/Syllabus/displayPickedSyllabus';

const DisplayContent = props => {
  const syllabusContext = useContext(SyllabusContext);
  const tasksContext = useContext(TasksContext);
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
          {tasksContext.tasksData.tasksData ? (
            <div>
              <Tasks
                everything={props.everything}
                contentChoice={props.everything.contentChoice}
              />
            </div>
          ) : null}
                                 
        </React.Fragment>
      );
      break;

    case '2':
      displayContent = (
        <React.Fragment>
                      
          <TodayTasks
            everything={props.everything}
            reRenderTodayTasks={props.everything.reRenderTodayTasks}
            contentChoice={props.everything.contentChoice}
          />
                    
        </React.Fragment>
      );
      break;

    case '3':
      displayContent = (
        <React.Fragment>
          {syllabusContext.everythingSyllabus.syllabusData ? (
            <div>
              <SyllabiList
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
          <NewTask newestTaskHandler={props.newestTaskHandler} />
        </React.Fragment>
      );
      break;
    case '5': //coming from NavBar
      //after submition will show calendar and where that will placed
      displayContent = (
        <React.Fragment>
          <NewEvent
            contentViewHandler={props.contentViewHandler}
            contentChoice={props.contentChoice}
          />
        </React.Fragment>
      );
      break;
    //showLeftOverLessonsFromSyllabus: for Table Header (add/delete this lesson message)

    case '6': //Adding syllabus lesson from maxreact to nonscheduled
      if (syllabusContext.everythingSyllabus.syllabusData) {
        displayContent = (
          <React.Fragment>
            <NewSyllabus newestSyllabus={props.newestSyllabus} />

            {syllabusContext.everythingSyllabus.syllabusData
              .showLeftOverLessonsFromSyllabus ? (
              <Lessons
                showLeftOverLessonsFromSyllabus={
                  syllabusContext.everythingSyllabus.syllabusData
                    .showLeftOverLessonsFromSyllabus
                }
                contentChoice={props.contentChoice}
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
    case '7': //display a list of syllabi
      if (syllabusContext.everythingSyllabus.syllabusData) {
        displayContent = (
          <React.Fragment>
            <Syllabi />
          </React.Fragment>
        );
      }

      break;
    case '8': //View tasks according to chosen day
      // displayContent = (
      //   <React.Fragment>
      //
      //     <PickedDayTasks
      //       everything={props.everything}
      //       dataLocation={props.dataLocation}
      //       //reRenderTodayTasks={props.everything.reRenderTodayTasks}
      //     />
      //
      //   </React.Fragment>
      // );

      break;
    case '9': //View tasks according to chosen day
      displayContent = (
        <React.Fragment>
           
          {tasksContext.tasksData.tasksData ? (
            <PickedDayTasks
              everything={props.everything}
              contentChoice={props.contentChoice}
              //dataLocation={tasksContext.dataRequestDetails.value}
            />
          ) : null}
                    
        </React.Fragment>
      );

      break;
    case '10': //View syllabus according to chosen day
      displayContent = (
        <React.Fragment>
          {syllabusContext.everythingSyllabus.syllabusData ? (
            <div>
              <DisplayPickedSyllabus />
            </div>
          ) : null}
        </React.Fragment>
      );
      break;
    case '11': //View tasks according to chosen day
      displayContent = (
        <React.Fragment>
           
          {tasksContext.tasksData.tasksData ? (
            <PickedDayTasks
              everything={props.everything}
              contentChoice={props.contentChoice}
              //dataLocation={tasksContext.dataRequestDetails.value}
            />
          ) : null}
                    
        </React.Fragment>
      );

      break;
  }

  return <div>{displayContent}</div>;
};

export default DisplayContent;
