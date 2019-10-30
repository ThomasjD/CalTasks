import React from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';

const newTask = props => {
  //console.log(props.newTaskTitle);
  //{props.newTaskTitle? ({props.newTaskTitle}): null}

  //const { handleSubmit } = useForm();
  // const onSubmit = values => {
  //   console.log(values);
  // };
  //id="company"
  //value={props.newTaskTitle}
  //o
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
              onChange={props.newTaskInfo}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <select name="location" className="form-control" id="location">
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
    </React.Fragment>
  );
};

export default newTask;

// import React, { Component } from 'react';

// //why its class?
//    //easily send props to App.js or another component that stores all the states

// class NewTaskClass extends Component {
//   constructor ({

//   })
//   state = {

//   }

//   render(

//   )
//   return () {

//     return (
//       <React.Fragment>
//       <div class="container">
//         <form>
//           <div className="form-group">
//             <label for="newTaskDescription">Task</label>

//             <input
//               className="form-control form-control-sm"
//               type="text"
//               id="newTaskDescription"
//               placeholder="Enter new task."

//             />
//           </div>

//           <div className="form-group">
//             <label for="category">Category</label>
//             <select className="form-control" id="category">
//               <option>Errand</option>
//               <option>Apointment</option>
//               <option>Preparation</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label for="message">Message</label>
//             <textarea className="form-control" id="message" rows="3"></textarea>
//           </div>
//         </form>
//       </div>
//     </React.Fragment>
//     )
//   }

// }

// export default NewTaskClass
