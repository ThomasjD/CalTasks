import React from 'react';
import Student from './Student.css';
import StudentSingle from './Student';

const studentTable = props => {
  //destructuring
  const wtf = () => {
    return props.students.map((student, index) => {
      const { id, name, age, email } = student;
      return (
        <React.Fragment>
          <StudentSingle id={id} name={name} age={age} email={email} key={id} />
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      {wtf()}
      <h1 id="title">React Dynamic Table</h1>
      <table id="students">
        <tbody>
          <tr> {props.renderHeader}</tr>
          {wtf()}
        </tbody>
      </table>
    </div>
  );
};

export default studentTable;
