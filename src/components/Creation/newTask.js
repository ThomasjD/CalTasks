import React, { useState } from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';

const NewTask = props => {
  const [newTask, setNewTask] = useState({
    task: {
      id: '',
      todo: '',
      deadline: '',
      location: ''
    }
  });

  const change = e => {
    let name = e.target.name;

    let newValue = e.target.value;
    console.log('\n');
    let objListArray = Object.keys(newTask.task).map(iKey => {
      //console.log(iKey)
      if (iKey == name) {
        return { [iKey]: newValue };
      } else {
        return { [iKey]: newTask.task[iKey] };
      }
    });
    setNewTask({
      task: Object.assign(...objListArray)
    });
    console.log(newTask);
    //let currentTask = newTask.name

    //array = [id, todo, deadline, location]
    //let currentTask = { ...newTask };
    //Objects.key(newTask.task).map(infoKey => {});

    //map out all keys [key1,key2,key3] = keyarray
    //if a key  match matches the name of event.target then find index
    //make new object
    /*map(keyarry) => key {
          if (key = name) {
            key: e.target.value
          }else
          {key: newTask.key}

        }


        */

    // setNewTask({
    //   [e.target.name]: e.target.value
    // });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.newestTask(newTask);
    setNewTask({
      task: {
        id: '',
        todo: '',
        deadline: '',
        location: ''
      }
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Task</label>
            <textarea
              className="form-control form-control-sm"
              name="todo"
              type="text"
              placeholder="Enter new task."
              onChange={e => change(e)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <select
              name="location"
              className="form-control"
              onChange={e => change(e)}
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
              onChange={e => change(e)}
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

export default NewTask;

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
