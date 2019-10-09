import React from 'react';
import TodayTask from './TodayTask/TodayTask';
import student from '../../containers/Student.css';

const todayTasks = props => {
  //get props from app.js, run through each element in state to feed into <Task>
  //todo,deadline,location,key,click, changed sent to <Task>

  const todayTasksHandler = () => {
    return props.monday.map((monday, index) => {
      const { id, task, key } = monday;
      return (
        <React.Fragment>
          <TodayTask id={id} task={task} key={id} />
        </React.Fragment>
      );
    });
  };

  const renderTableHeaderHandler = () => {
    let header = Object.keys(props.monday[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

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

export default todayTasks;
