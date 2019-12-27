import Student from './Student.css';
import StudentTable from './StudentTable';
import React from 'react';

const student = props => {
  return (
    <React.Fragment>
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.email}</td>
      </tr>
    </React.Fragment>
  );
};

export default student;
