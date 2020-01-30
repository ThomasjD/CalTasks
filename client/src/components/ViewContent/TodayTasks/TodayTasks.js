import React, { useState, useEffect, useContext } from 'react';
import TodayTask from './TodayTask/TodayTask';
import student from '../../../containers/Student.css';
import calendarObj from '../../Calendar/calendarObj';
import StoreContext from '../../../context/StoreDataContext';
const TodayTasks = props => {
  const storeContext = useContext(StoreContext);

  const taskDeleteHandler = (event, info) => {
    let typeOfData = 'tasks'; //string: syllabus,tasks,events,objectives
    let handlerChoice = '5'; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = 'index'; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    let today = calendarObj();

    switch (storeContext.contentChoice) {
      case '1':
        // typeOfData = 'tasks';
        // handlerChoice = '3';
        // dataLocation = this.context.dataRequestDetails.dataLocation;
        // infoType = 'index';
        // //info = '';
        break;
      case '2':
        typeOfData = 'tasks';
        handlerChoice = '5';
        dataLocation = today;
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
    //let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info
    let today = calendarObj();
    // let value = '';
    let dataRequestMessage = {};
    switch (storeContext.contentChoice) {
      case '1':
        // typeOfData = 'tasks';
        // handlerChoice = '4';
        // dataLocation = this.context.dataRequestDetails.dataLocation;
        // infoType = 'id';
        // //info = '';
        break;
      case '2':
        typeOfData = 'tasks';
        handlerChoice = '6';
        dataLocation = today; // 'maxReactWorkLeft';
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
    // alert(`inside [TodayTasks] Friday taskChangeHandler()
    // typeOfData: ${dataRequestMessage.typeOfData}
    // handlerChoice: ${dataRequestMessage.handlerChoice}
    // dataLocation: ${dataRequestMessage.dataLocation}
    // infoType: ${dataRequestMessage.infoType}
    // info: ${dataRequestMessage.info}`);

    storeContext.dataRequestHandler(event, dataRequestMessage);
  };

  const renderTableHeaderHandler = () => {
    if (storeContext.tasksData.tasksData) {
      let header = Object.keys(
        storeContext.tasksData.tasksData.TodayTasksHeader
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
  const todayTasksHandler = () => {
    if (
      storeContext.tasksData.tasksData &&
      storeContext.tasksData.tasksData.dataLocation
    ) {
      let dataLocation = storeContext.tasksData.tasksData.dataLocation;

      //alert(`dataLocation: ${dataLocation}`);
      return storeContext.tasksData.tasksData[dataLocation].map(
        (day, index) => {
          return (
            <React.Fragment key={day.id}>
              <TodayTask
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
  //   // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
  //   // if (onCallDelete.signalAlert === 'true') {

  //   if (
  //     tasksContext.tasksData.tasksData == true &&
  //     tasksContext.tasksData.tasksData[dataLocation].length === 1
  //   ) {
  //     //let savedHeader = Object.keys(props.tasks[0]);
  //     //let savedHeader = props.tasks
  //     //console.log(props.monday);
  //     setLastTaskHeader({ lastHeader: props.monday });

  //     console.log(`this is the last task alert ${lastTaskHeader.lastHeader}`);
  //   }
  //   if (storeDataContext.reRenderTodayTasks === true) {
  //     // alert('Are you sure you want to delete this task?');
  //     //return (props.reRender = {})
  //   }
  // });

  return (
    <div>
      <h1 id="title"> Today's Tasks</h1>
      <table id="students">
        <tbody>
          <tr>{renderTableHeaderHandler()}</tr>
          {todayTasksHandler()}
        </tbody>
      </table>
    </div>
  );
};

export default TodayTasks;
