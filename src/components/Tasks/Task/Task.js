/*import React, { Component } from 'react';
import taskStyle from './Task.module.css';
import Aux from '../../../hoc/Aux';

class Task extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Task] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Task] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Task] componentDidUpdate');
  }

  // <Aux>
  // </Aux>

  render() {
    console.log('[Task.js] rendering...');

    return (
      <React.Fragment>
        <tr key={this.props.key}>
          <td>
            <button className={taskStyle.delete} onClick={this.props.click}>
              {this.props.key}
            </button>
          </td>
          <td>
            <input
              className={taskStyle.inputStyle}
              type="text"
              onChange={this.props.changed}
              value={this.props.todo}
            />
          </td>
          <td>{this.props.deadline}</td>
          <td>{this.props.location}</td>
        </tr>
        <p>{this.props.children}</p>
      </React.Fragment>
    );
  }
}

export default Task;
*/
/*original
 <React.Fragment>
        <div className={taskStyle.Task}>
          <div key="1a" className={taskStyle.TaskDeadlineSep}>
            <p key="1b" className={taskStyle.TaskDeadline}>
              Task: {this.props.todo}
            </p>

            <p key="1c" className={taskStyle.TaskDeadline}>
              Deadline: {this.props.deadline}
            </p>

            <div key="1d" className={taskStyle.showTaskDetails2}>
              {' '}
              Hover to show Location
              <p className={taskStyle.showTaskDetails}>{this.props.location}</p>
            </div>
            <p className={taskStyle.delete} onClick={this.props.click}>
              Delete Task
            </p>
          </div>

          <p key="1e">{this.props.children}</p>

          <input
            className={taskStyle.inputStyle}
            type="text"
            onChange={this.props.changed}
            value={this.props.todo}
          />
        </div>
      </React.Fragment>
      */

import React, { useState, useEffect } from 'react';
import taskStyle from './Task.module.css';
import Tasks from '../Tasks';

// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const Task = props => {
  //onmouseenter = 'props.mouseover'
  //onst rnd = Math.random();
  // alertFunction = () => {

  // const [onCallDelete, setonCallDeleteState] = useState({
  //   signalAlert: 'false'
  // });

  // const sureDelete = e => {
  //   setonCallDeleteState({ signalAlert: 'true' });
  //   return <Tasks onClick={props.click} />;
  // };

  //props.click
  // };
  useEffect(() => {
    // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
    // if (onCallDelete.signalAlert === 'true') {
    //   alert('Are you sure you want to delete this task?');
    // }
    //alert('Are you sure you want to delete this task?');
    return () => {
      console.log('i am in the return of useEffect');
    };
  }, [props.todo]);
  console.log('[Task] rendering');
  //{props.key}
  return (
    <React.Fragment>
      <tr key={props.key}>
        <td>
          <button className={taskStyle.delete} onClick={props.click}></button>
        </td>
        <td>
          <input
            className={taskStyle.inputStyle}
            type="text"
            onChange={props.changed}
            value={props.todo}
          />
        </td>
        <td>{props.deadline}</td>
        <td>{props.location}</td>
      </tr>
    </React.Fragment>
  );
};
// <p>{props.children}</p>
//onCallDelete.signalAlert
//onClick={alertFunction()}
//onClick={props.click}
// return (
//   <div className={taskStyle.Task}>
//     <div className={taskStyle.TaskDeadlineSep}>
//       <p className={taskStyle.TaskDeadline}>Task: {props.todo}</p>
//       <p className={taskStyle.TaskDeadline}>Deadline: {props.deadline}</p>
//       <div className={taskStyle.showTaskDetails2}>
//         {' '}
//         Hover to show Location
//         <p className={taskStyle.showTaskDetails}>{props.location}</p>
//       </div>

//       <p className={taskStyle.delete} value="true" onClick={props.click}>
//         Delete Task
//       </p>
//     </div>

//     <p>{props.children}</p>

//     <input
//       className={taskStyle.inputStyle}
//       type="text"
//       onChange={props.changed}
//       value={props.todo}
//     />
//   </div>
// );

//onClick={event => sureDelete(event)}
//export default Radium(task)
export default Task;

/*
if (rnd > 0.7) {
    throw new Error ('Something went wrong')
}
*/
