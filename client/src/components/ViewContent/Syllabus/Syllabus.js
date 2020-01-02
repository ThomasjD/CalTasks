import React from 'react';
import taskStyle from '..//Tasks/Task/Task.module.css';

const Syllabus = props => {
  return (
    <React.Fragment>
      <tr key={props.particularKey}>
        <td>
          <button className={taskStyle.delete} onClick={props.click}></button>
        </td>
        <td>{props.name}</td>
        <td>{props.concentration}</td>
        <td>{props.subject}</td>
        <td>{props.source}</td>
        <td>{props.syllabusCompletionTime}</td>
        <td>{props.completionStatus}%</td>
      </tr>
    </React.Fragment>
  );
};

export default Syllabus;
