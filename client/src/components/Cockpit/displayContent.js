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
import StoreDataContext from '../../context/StoreDataContext';
import statusClass from '../../components/ViewContent/Tasks/Tasks.module.css';
import Syllabi from '../ViewContent/Syllabus/Syllabi';
import PickedDayTasks from '../ViewContent/PickedDayTasks/PickedDayTasks';
import SyllabiList from '../ViewContent/Syllabus/SyllabiList';
import DisplayPickedSyllabus from '../ViewContent/Syllabus/displayPickedSyllabus';
import PickedDayBudget from '../ViewContent/Objectives/TimeBudget/PickedDayBudget/PickedDayBudget';

import Modal from '../../components/UI/Modal/Modal';

const DisplayContent = props => {
  const storeDataContext = useContext(StoreDataContext);

  let displayContent = null;

  switch (storeDataContext.contentChoice) {
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
      if (storeDataContext.tasksData.tasksData) {
        console.dir(storeDataContext.dataRequestDetails);
      }

      displayContent = (
        <React.Fragment>
          {storeDataContext.tasksData.tasksData ? (
            <Modal>
              <div>
                <Tasks />
              </div>
            </Modal>
          ) : null}
                                 
        </React.Fragment>
      );
      break;

    case '2': //Today's Tasks
      displayContent = (
        <React.Fragment>
          {' '}
                      
          <TodayTasks />
        </React.Fragment>
      );
      break;

    case '3':
      displayContent = (
        <React.Fragment>
          {storeDataContext.everythingSyllabus.syllabusData ? (
            <div>
              <SyllabiList />
            </div>
          ) : null}
        </React.Fragment>
      );

      break;
    case '4':
      displayContent = (
        <React.Fragment>
          <NewTask />
        </React.Fragment>
      );
      break;
    case '5': //coming from NavBar
      //after submition will show calendar and where that will placed
      displayContent = (
        <React.Fragment>
          <NewEvent />
        </React.Fragment>
      );
      break;
    //showLeftOverLessonsFromSyllabus: for Table Header (add/delete this lesson message)

    case '6': //Adding syllabus lesson from maxreact to nonscheduled
      if (storeDataContext.everythingSyllabus.syllabusData) {
        displayContent = (
          <React.Fragment>
            <NewSyllabus />

            {storeDataContext.everythingSyllabus.syllabusData
              .showLeftOverLessonsFromSyllabus ? (
              <Lessons
                lessons={
                  storeDataContext.everythingSyllabus.syllabusData
                    .maxReactWorkLeft
                }
                lastLessonHeader={
                  storeDataContext.everythingSyllabus.syllabusData
                    .lastLessonHeader
                }
                lessonsLength={
                  storeDataContext.everythingSyllabus.syllabusData
                    .maxReactWorkLeft.length
                }
              />
            ) : null}
          </React.Fragment>
        );
      }

      break;
    case '7': //display a list of syllabi
      if (storeDataContext.everythingSyllabus.syllabusData) {
        displayContent = (
          <React.Fragment>
            <Syllabi />
          </React.Fragment>
        );
      }

      break;
    case '8':
      break;
    case '9': //View tasks according to chosen day
      displayContent = (
        <React.Fragment>
           {storeDataContext.tasksData.tasksData ? <PickedDayTasks /> : null}
                    
        </React.Fragment>
      );

      break;
    case '10': //View syllabus according to chosen day
      displayContent = (
        <React.Fragment>
          {storeDataContext.everythingSyllabus.syllabusData ? (
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
           {storeDataContext.tasksData.tasksData ? <PickedDayTasks /> : null}
                    
        </React.Fragment>
      );

      break;

    case '12': //Show Modal
      displayContent = (
        <React.Fragment>
          {storeDataContext.dataBudget &&
          storeDataContext.dataBudget.dataBudget &&
          storeDataContext.dataBudget.dataBudget.pickedDay ? (
            <div>
              <PickedDayBudget />
            </div>
          ) : null}
        </React.Fragment>
      );

      break;
  }

  return <div>{displayContent}</div>;
};

export default DisplayContent;
// displayContent = (
//   <React.Fragment>
//     {storeDataContext.tasksData.tasksData ? (
//       <Modal>
//         <div>
//           <Tasks />
//         </div>
//       </Modal>
//     ) : null}
//
//   </React.Fragment>
// );

// &&
//           storeDataContext.dataBudget.dataBudget.pickedDay
