import React, { useState, useEffect, useContext } from 'react';
import PickedDayTask from './PickedDayTask/PickedDayTask';
import student from '../../../containers/Student.css';

import StoreContext from '../../../context/StoreDataContext';

const PickedDayTasks = props => {
  const storeContext = useContext(StoreContext);

  const taskDeleteHandler = (event, info) => {
    let typeOfData = 'tasks'; //string: syllabus,tasks,events,objectives
    let handlerChoice = '5'; //string: '#' handler inside of database
    let dataLocation = storeContext.tasksData.tasksData.dataLocation;
    // string: where obj found inside database
    let infoType = 'index'; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    //let today = calendarObj();

    switch (storeContext.contentChoice) {
      case '9':
        typeOfData = 'tasks';
        handlerChoice = '';
        dataLocation = dataLocation;
        infoType = 'index';
        //info = null;

        break;
      case '5':
        break;
    }

    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };

    storeContext.dataRequestHandler(event, dataRequestMessage);
  };

  const taskChangeHandler = (event, info) => {
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/

    let dataRequestMessage = {};
    switch (storeContext.contentChoice) {
      case '9':
        typeOfData = 'tasks';
        handlerChoice = '6';

        dataLocation = storeContext.tasksData.tasksData.dataLocation;
        infoType = 'id';
        //info = null;
        break;
      case '4':
        break;
      case '5':
        break;
    }
    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };
    alert(`inside [PickedDayTasks]  taskChangeHandler()
    typeOfData: ${dataRequestMessage.typeOfData}
    handlerChoice: ${dataRequestMessage.handlerChoice}
    dataLocation: ${dataRequestMessage.dataLocation}
    infoType?: ${dataRequestMessage.infoType}
    info: ${dataRequestMessage.info}`);

    storeContext.dataRequestHandler(event, dataRequestMessage);
  };

  const renderTableHeaderHandler = () => {
    let tasksData = { ...storeContext.tasksData.tasksData };

    if (tasksData) {
      let pickedDayTasksHeader = { ...tasksData.pickedDayTasksHeader };
      //let tasksDataObj = { ...tasksData };
      let pickedDayTasksHeaderObj = { ...pickedDayTasksHeader };
      // let timeOfDay = { ...pickedDayTasksHeader };
      console.dir(`tasksData: ${pickedDayTasksHeader}`);
      let header = Object.keys(pickedDayTasksHeaderObj);

      return header.map((key, index) => {
        switch (key) {
          case 'id':
            return <th key={index}>Click to Delete</th>;
            break;

          case 'task':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;

          case 'timeOfDay':
            return <th key={index}>Schedule Task</th>;
            break;

          case 'deadline':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;

          case 'category':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;
        }
      });
    }
  };

  const tasksOfSelectedDayHandler = () => {
    if (storeContext.tasksData.tasksData) {
      let dataLocation = storeContext.tasksData.tasksData.dataLocation;
      let tasksData = { ...storeContext.tasksData.tasksData };

      if (!tasksData[dataLocation]) {
        return <div>No tasks Scheduled for this Day</div>;
      } else {
        return tasksData[dataLocation].map((day, index) => {
          return (
            <React.Fragment>
              <PickedDayTask
                key={day.id}
                id={day.id}
                timeOfDay={day.timeOfDay}
                task={day.task}
                deleteTodayTask={props.clicked}
                deadline={day.deadline}
                category={day.category}
                click={event => taskDeleteHandler(event, index)}
                changed={event => taskChangeHandler(event, day.id)}
              />
            </React.Fragment>
          );
        });
      }
    }
  };

  // const [lastTaskHeader, setLastTaskHeader] = useState({
  //   lastHeader: props.monday
  // });
  // useEffect(() => {
  //   let dataLocation = props.dataLocation
  //   // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
  //   // if (onCallDelete.signalAlert === 'true') {

  //   if (
  //     tasksContext.tasksData.tasksData == true &&
  //     tasksContext.tasksData.tasksData[dataLocation].length === 1
  //   ) {
  //     //let savedHeader = Object.keys(props.tasks[0]);
  //     //let savedHeader = props.tasks
  //     console.log(props.monday);
  //     setLastTaskHeader({ lastHeader: props.monday });

  //     console.log(`this is the last task alert ${lastTaskHeader.lastHeader}`);
  //   }
  //   if (props.reRenderTodayTasks === true) {
  //     // alert('Are you sure you want to delete this task?');
  //     //return (props.reRender = {})
  //   }
  // });

  return (
    <div>
      <h1 id="title"> Tasks for The Day</h1>
      <table id="students">
        <tbody>
          <tr>{renderTableHeaderHandler()}</tr>
          {tasksOfSelectedDayHandler()}
        </tbody>
      </table>
    </div>
  );
};

export default PickedDayTasks;
