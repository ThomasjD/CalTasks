import React, { useState } from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';
import Syllabus from './Syllabus';
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
  const makeSyllabus = () => {
    let maxReact2 = new Syllabus(
      'maxReact2',
      'maxReact22222',
      '11asfd',
      'Use this in fusfsasgnctions',
      '11.Read allasf about this'
    );
    return maxReact2;
  };
  let maxReact = new Syllabus(
    'maxReact1',
    'maxReact',
    '11',
    'Use this in functions',
    '11.Read all about this'
  );

  //hoot={maxReact}
  return maxReact;

  // <React.Fragment>
  //   <div className="container">
  //     <form onSubmit={props.newTaskInfo}>
  //       <div className="form-group">
  //         <label>Task</label>
  //         <input
  //           className="form-control form-control-sm"
  //           name="newTaskTitle"
  //           type="text"
  //           placeholder="Enter new task."
  //           onChange={props.newTaskInfo}
  //         />
  //       </div>

  //       <div className="form-group">
  //         <label>Location</label>
  //         <select
  //           name="location"
  //           onClick={props.newTaskInfo}
  //           className="form-control"
  //           id="location"
  //         >
  //           <option value="Poplado">Poplado</option>
  //           <option value="Laureles">Laureles</option>
  //           <option value="Sabaneta">Sabaneta</option>
  //         </select>
  //       </div>

  //       <div className="form-group">
  //         <label>Deadline</label>
  //         <textarea
  //           className="form-control"
  //           id="deadline"
  //           rows="3"
  //           name="deadline"
  //           onChange={props.newTaskInfo}
  //         ></textarea>
  //       </div>

  //       <input type="submit" value="Submit" />
  //     </form>
  //   </div>
  //   <p>{props.newTaskTitle}</p>
  //   <p>{props.category}</p>
  //   <p>{props.location}</p>
  // </React.Fragment>
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
