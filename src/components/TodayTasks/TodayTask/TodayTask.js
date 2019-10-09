import React from 'react';

//import taskStyle from './Task.module.css'
// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const todayTask = props => {
  return (
    <React.Fragment>
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.task}</td>
      </tr>
      <p>{props.children}</p>
    </React.Fragment>
  );
};
//export default Radium(task)
export default todayTask;
