import React, { useRef, useEffect, useState, useContext } from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import RightCockpit from '../../containers/RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';

const NewTask = props => {
  const tasksContext = useContext(TasksContext);
  const taskTitleRef = useRef(null);
  useEffect(() => {
    //runs after initial render & last render

    taskTitleRef.current.focus();
  }, []); //only executes when component renders 1st time & cleans up when unmounted
  const [newTask, setNewTask] = useState({
    task: {
      id: '',
      timeOfDay: '',
      task: '',
      deadline: '',
      category: '',
      assignedTimeStart: '',
      assignedTimeStop: '',
      assignedDate: '',
      taskDuration: '', //
      blockOffTimeSlot: false,
      showStartTimeDate: false,
      showFinishTimeDate: false
    }
  });

  const change = e => {
    let name = e.target.name;

    let newValue = e.target.value;
    //array of keys [a,b,c,d] --> for every key return {key: value}
    let objListArray = Object.keys(newTask.task).map(iKey => {
      //return an array of objects [{key: value},{key: value},{key: value}]
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

    //array = [id, todo, deadline, category]
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
    setNewTask({
      task: {
        id: newTask.task['todo'],
        todo: newTask.task['todo'],
        deadline: newTask.task['deadline'],
        category: newTask.task['category']
      }
    });

    //props.newestTask(newTask);
    //reset the state for this component
    setNewTask({
      task: {
        id: '',
        todo: '',
        deadline: '',
        category: ''
      }
    });

    console.log(`after resetting state ${newTask}`);
    props.newestTaskHandler('3');
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Task</label>
            <textarea
              className="form-control form-control-sm"
              name="task"
              type="text"
              ref={taskTitleRef} //will focus when loading & rendering
              placeholder="Enter new task."
              onChange={e => change(e)}
            />
          </div>

          <div className="form-group">
            <label>Note</label>
            <input
              type="text"
              name="eventNote"
              className="form-control"
              defaultValue="Watch on Chanel 13"
              //value={this.state.eventNote}
              onChange={e => this.eventNoteChange(e)}
              //ref={eventNoteRef => eventNoteRef.focus()}
            />
          </div>

          <div className="form-group">
            <label>Task Category</label>
            <select
              name="category"
              className="form-control"
              onChange={e => change(e)}
              id="category"
              defaultValue="programing"
            >
              <option value="programing">programing</option>
              <option value="workout">workout</option>
              <option value="errand">errand</option>
              <option value="errand">chore</option>
              <option value="errand">errand</option>
            </select>
          </div>

          <div className="form-group">
            <label>Start Time</label>

            <DatePickerPicker
              startDateTimeHandler={date => this.startDateTimeHandler(date)}
              finishTimeDateHandler={date => this.finishTimeHandler(date)}
            />
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

          <button type="submit" value="Submit">
            {' '}
            Submit
          </button>
        </form>
      </div>
      <p>{props.newTaskTitle}</p>
      <p>{props.category}</p>
    </React.Fragment>
  );
};

export default NewTask;
