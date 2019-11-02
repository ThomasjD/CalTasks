import React, { useState } from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';

const newTask = props => {
  //   sections:
  //       [
  //           {
  //             sectionId: '',
  //             sectionNumber: '',
  //             sectionTitle: '',
  //           }
  //       ],

  // lessons:
  //     [
  //         {
  //           sectionId: '',
  //           // sectionNumber: '',
  //           lessonId: '', //after: -> 2 digits before '/'
  //           // sectionTitle: '',
  //           lessonTitle: '',
  //           // lessonMin: '',
  //         }
  //     ]

  // onSubmit = e => {
  //   e.preventDefault();
  //   const [newSyllabus,setNewSyllabus] = useState({
  //     syllabus:
  //         {
  //           syllabusId =  '',
  //           syllabusTitle = '',
  //         }
  //         })

  //       setNewSyllabus ({
  //           syllabus: {
  //                   syllabusId =  '',
  //                   syllabusTitle = '',
  //               }}
  //       )
  //       }
  // onSubmit = e => {
  //   e.preventDefault();

  //   const [newTask, setNewTask] = useState({});

  //   setNewTask(inputs => ({
  //     ...inputs,
  //     [event.target.name]: event.target.value
  //   }));

  //   return newTask;
  // };
  /*



*/
  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={props.newTaskInfo}>
          <div className="form-group">
            <label>Task</label>
            <input
              className="form-control form-control-sm"
              name="newTaskTitle"
              type="text"
              placeholder="Enter new task."
              //onChange={props.newTaskInfo}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <select
              name="location"
              className="form-control"
              //onChange={props.newTaskInfo}
              id="location"
            >
              <option value="Poplado">Poplado</option>
              <option value="Laureles">Laureles</option>
              <option value="Sabaneta">Sabaneta</option>
            </select>
          </div>

          <div className="form-group">
            <label>Deadline</label>
            <textarea
              //onClick={props.newTaskInfo}
              className="form-control"
              id="deadline"
              rows="3"
              name="deadline"
            ></textarea>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <p>{props.newTaskTitle}</p>
      <p>{props.category}</p>
      <p>{props.location}</p>
    </React.Fragment>
  );
};

export default newTask;

{
  /* <React.Fragment>
  <div className="container">
    <form onSubmit={props.newTaskInfo}>
      <div className="form-group">
        <label>Task</label>
        <input
          className="form-control form-control-sm"
          name="newTaskTitle"
          type="text"
          placeholder="Enter new task."
          onChange={props.newTaskInfo}
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <select
          name="location"
          onClick={props.newTaskInfo}
          className="form-control"
          id="location"
        >
          <option value="Poplado">Poplado</option>
          <option value="Laureles">Laureles</option>
          <option value="Sabaneta">Sabaneta</option>
        </select>
      </div>

      <div className="form-group">
        <label>Deadline</label>
        <textarea
          className="form-control"
          id="deadline"
          rows="3"
          name="deadline"
          onChange={props.newTaskInfo}
        ></textarea>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
  <p>{props.newTaskTitle}</p>
  <p>{props.category}</p>
  <p>{props.location}</p>
</React.Fragment>; */
}
