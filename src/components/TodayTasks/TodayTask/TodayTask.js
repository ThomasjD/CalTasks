import React from 'react';
import taskStyle from '../../Tasks/Task/Task.module.css';
//import taskStyle from './Task.module.css'
// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const todayTask = props => {
  return (
    <React.Fragment>
      <tr key={props.id}>
        <td>
          <button onClick={props.deleteTodayTask}></button>
        </td>
        <td>
          <input
            className={taskStyle.inputStyle}
            type="text"
            onChange={props.changed}
            value={props.task}
          />
        </td>
        <td>{props.task}</td>
      </tr>
      <p>{props.children}</p>
    </React.Fragment>
  );
};
//export default Radium(task)
export default todayTask;
//   <td>{props.id}</td>
