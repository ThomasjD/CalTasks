import React, { useState, useEffect } from 'react';
import taskStyle from '../../../Tasks/Task/Task.module.css';
import Lessons from '../Lessons';

// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const Lesson = props => {
  // useEffect(() => {
  //   // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
  //   // if (onCallDelete.signalAlert === 'true') {
  //   //   alert('Are you sure you want to delete this task?');
  //   // }
  //   //alert('Are you sure you want to delete this task?');
  //   return () => {
  //     console.log('i am in the return of useEffect');
  //   };
  // }, [props.todo]);
  console.log('[Lesson] rendering');

  return (
    <React.Fragment>
      <tr key={props.particularKey}>
        <td>
          <button className={taskStyle.delete} onClick={props.click}></button>
        </td>
        <td>
          <input
            className={taskStyle.inputStyle}
            type="text"
            onChange={props.changed}
            value={props.lesson}
          />
        </td>

        <td>{props.completion.toString()}</td>
      </tr>
    </React.Fragment>
  );
};

export default Lesson;
