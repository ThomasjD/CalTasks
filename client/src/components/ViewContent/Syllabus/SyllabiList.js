import React from 'react';
import taskStyle from '..//Tasks/Task/Task.module.css';

const Syllabus = props => {
  return (
    <React.Fragment>
      <button
        onClick={event => props.click(event)}
        className="dropdown-item"
        type="radio"
        name="options"
        id="option1"
        autoComplete="off"
        //onClick={event => pickedDayRequestHandler(event)}
        value={props.syllabusId}
      >
        {' '}
        {props.syllabusName}
      </button>
    </React.Fragment>
  );
};

export default Syllabus;
