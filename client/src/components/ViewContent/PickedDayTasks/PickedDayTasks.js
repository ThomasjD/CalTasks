import React, { useState, useEffect, useContext } from 'react';
import PickedDayTask from './PickedDayTask/PickedDayTask';
import student from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';

const PickedDayTasks = props => {
  const tasksContext = useContext(TasksContext);

  const taskDeleteHandler = (event, info) => {
    let typeOfData = 'tasks'; //string: syllabus,tasks,events,objectives
    let handlerChoice = '5'; //string: '#' handler inside of database
    let dataLocation = tasksContext.tasksData.tasksData.dataLocation; // string: where obj found inside database
    let infoType = 'index'; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    //let today = calendarObj();

    switch (props.contentChoice) {
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

    tasksContext.dataRequestHandler(event, dataRequestMessage);
  };

  const taskChangeHandler = (event, info) => {
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/

    let dataRequestMessage = {};
    switch (props.contentChoice) {
      case '9':
        typeOfData = 'tasks';
        handlerChoice = '6';

        dataLocation = tasksContext.tasksData.tasksData.dataLocation;
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

    tasksContext.dataRequestHandler(event, dataRequestMessage);
  };

  const renderTableHeaderHandler = () => {
    if (tasksContext.tasksData.tasksData) {
      let header = Object.keys(
        tasksContext.tasksData.tasksData.pickedDayTasksHeader
      );
      return header.map((key, index) => {
        switch (key) {
          case 'id':
            return <th key={index}>Click to Delete</th>;
            break;

          case 'timeOfDay':
            return <th key={index}>Schedule Task</th>;
            break;

          case 'task':
            return <th key={index}>{key.toUpperCase()}</th>;
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
  //todayTaskChanged={props.changed}
  const tasksOfSelectedDayHandler = () => {
    //let dataLocation = tasksContext.dataRequestDetails.value;
    //alert(`dataLocation: ${dataLocation}`);
    if (tasksContext.tasksData.tasksData) {
      let dataLocation = tasksContext.tasksData.tasksData.dataLocation;
      //alert(`Inside tasksOfSelectedDayHandler dataLocation: ${dataLocation}`); //
      return tasksContext.tasksData.tasksData[dataLocation].map(
        (day, index) => {
          return (
            <React.Fragment key={day.id}>
              <PickedDayTask
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
        }
      );
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
