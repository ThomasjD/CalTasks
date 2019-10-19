import React from 'react';

import { tsPropertySignature } from '@babel/types';

const newTask = props => {
  console.log(props.newTaskTitle);
  //{props.newTaskTitle? ({props.newTaskTitle}): null}
  return (
    <React.Fragment>
      <div class="container">
        <form>
          <div className="form-group">
            <label for="newTask">Task</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="company"
              placeholder="Enter new task."
              onChange={props.changed}
              value={props.newTaskTitle}
            />
          </div>
        </form>

        <div className="form-group">
          <label for="category">Category</label>
          <select
            value={props.category}
            className="form-control"
            id="category"
            onChange={props.selectionChange}
          >
            <option value="errand">Errand</option>
            <option value="apt">Apointment</option>
            <option value="chore">chore</option>
          </select>
        </div>

        <div className="form-group">
          <label for="location">Location</label>
          <textarea
            className="form-control"
            id="location"
            rows="3"
            value={props.location}
            onChange={props.locationChange}
          ></textarea>
        </div>

        <input type="submit" value="Submit" />
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
