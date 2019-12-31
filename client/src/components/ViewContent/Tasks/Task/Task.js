import React, { useState, useEffect } from 'react';
import taskStyle from './Task.module.css';
import Tasks from '../Tasks';

const Task = props => {
  useEffect(() => {
    // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
    // if (onCallDelete.signalAlert === 'true') {
    //   alert('Are you sure you want to delete this task?');
    // }
    //alert('Are you sure you want to delete this task?');
    return () => {
      console.log('i am in the return of useEffect');
    };
  }, [props.task]); //
  console.log('[Task] rendering');
  //{props.key}
  return (
    <React.Fragment>
      <tr key={props.particularKey}>
        <td>
          <button
            className={taskStyle.delete}
            onClick={props.click}
            value="Boson"
          ></button>
        </td>
        <td>
          <button
            className={taskStyle.delete}
            onClick={props.scheduleTask}
            value="10"
          ></button>
        </td>
        <td>
          <input
            className={taskStyle.inputStyle}
            type="text"
            onChange={props.changed}
            value={props.task}
          />
        </td>
        <td>{props.deadline}</td>
        <td>{props.category}</td>
      </tr>
    </React.Fragment>
  );
};

//export default Radium(task)
export default Task;
