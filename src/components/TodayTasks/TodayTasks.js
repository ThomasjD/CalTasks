import React, { useState, useEffect } from 'react';
import TodayTask from './TodayTask/TodayTask';
import student from '../../containers/Student.css';

const TodayTasks = props => {
  //get props from app.js, run through each element in state to feed into <Task>
  //todo,deadline,location,key,click, changed sent to <Task>

  const renderTableHeaderHandler = () => {
    //let header = Object.keys(props.monday[0]);
    //lastTodayTasksHeader
    let header = Object.keys(props.lastTodayTasksHeader);
    return header.map((key, index) => {
      if (key === 'id') {
        return <th key={index}>Click to Delete</th>;
      } else {
        return <th key={index}>{key.toUpperCase()}</th>;
      }
    });
  };

  const todayTasksHandler = () => {
    return props.monday.map((monday, index) => {
      const { id, task } = monday;
      return (
        <React.Fragment key={id}>
          <TodayTask
            todayTaskChanged={props.changed}
            id={id}
            task={task}
            todayTaskChanged={props.changed}
            deleteTodayTask={props.clicked}
          />
        </React.Fragment>
      );
    });
  };

  const [lastTaskHeader, setLastTaskHeader] = useState({
    lastHeader: props.monday
  });
  useEffect(() => {
    // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
    // if (onCallDelete.signalAlert === 'true') {

    if (props.monday.length === 1) {
      //let savedHeader = Object.keys(props.tasks[0]);
      //let savedHeader = props.tasks
      console.log(props.monday);
      setLastTaskHeader({ lastHeader: props.monday });

      console.log(`this is the last task alert ${lastTaskHeader.lastHeader}`);
    }
    if (props.reRenderTodayTasks === true) {
      alert('Are you sure you want to delete this task?');
      //return (props.reRender = {})
    }
  });

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
