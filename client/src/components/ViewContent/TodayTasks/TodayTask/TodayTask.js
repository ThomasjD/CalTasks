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
      <tr key={props.particularKey}>
        <td>
          <button onClick={props.click}></button>
        </td>
        <td>{props.timeOfDay}</td>
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
export default todayTask;
//   <td>{props.id}</td>
//<p>{props.children}</p>

//{props.task}
