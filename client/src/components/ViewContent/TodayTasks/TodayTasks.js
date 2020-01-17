import React, { useState, useEffect, useContext } from 'react';
import TodayTask from './TodayTask/TodayTask';
import student from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';
import calendarObj from '../../Calendar/calendarObj';

const TodayTasks = props => {
  const tasksContext = useContext(TasksContext);

  const taskDeleteHandler = (event, info) => {
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    let today = calendarObj();
    switch (props.contentChoice) {
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
    alert(`inside [TodayTasks]  taskDeleteHandler() typeOfData: ${dataRequestMessage.typeOfData}
    handlerChoice: ${dataRequestMessage.handlerChoice}
    dataLocation: ${dataRequestMessage.dataLocation}
    infoType: ${dataRequestMessage.infoType}
    info: ${dataRequestMessage.info}`);

    tasksContext.dataRequestHandler(event, dataRequestMessage);
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
    switch (props.contentChoice) {
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

    tasksContext.dataRequestHandler(event, dataRequestMessage);
  };

  const renderTableHeaderHandler = () => {
    if (tasksContext.tasksData.tasksData) {
      let header = Object.keys(
        tasksContext.tasksData.tasksData.TodayTasksHeader
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
    if (tasksContext.tasksData.tasksData) {
      let dataLocation = tasksContext.tasksData.tasksData.dataLocation;

      //alert(`dataLocation: ${dataLocation}`);
      return tasksContext.tasksData.tasksData[dataLocation].map(
        (day, index) => {
          let functionChoiceDelete = null;
          let functionChoiceChange = null;

          //const { id, task } = day;
          if (props.everything.contentChoice === '2') {
            functionChoiceDelete = '5';
            functionChoiceChange = '6';
          } else {
            functionChoiceDelete = '7';
            functionChoiceChange = '8';
          }

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
  //   if (props.reRenderTodayTasks === true) {
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
