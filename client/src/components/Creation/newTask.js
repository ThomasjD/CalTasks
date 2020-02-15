import React, { useRef, useEffect, useState, useContext } from 'react';
//import useForm from 'react-hook-form';
import { tsPropertySignature } from '@babel/types';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import StoreContext from '../../context/StoreDataContext';
import axios from 'axios';

const NewTask = props => {
  const storeContext = useContext(StoreContext);
  const taskTitleRef = useRef(null);
  useEffect(() => {
    //runs after initial render & last render

    taskTitleRef.current.focus();
  }, []); //only executes when component renders 1st time & cleans up when unmounted
  const [newTask, setNewTask] = useState({
    // task: {
    id: 'klgdshljkhgkjsdg',
    timeOfDay: '9:00',
    task: 'Watch show',
    deadline: 'Thursday',
    category: 'watch show',
    startTimeDate: '',
    finishTimeDate: '',
    // assignedDate: '',
    // taskDuration: '',
    blockOffTimeSlot: false,
    showStartTimeDate: false,
    showFinishTimeDate: false
    //}

    // task: {
    //   id: '',
    //   timeOfDay: '',
    //   task: '',
    //   deadline: '',
    //   category: '',
    //   startTimeDate: '',
    //   finishTimeDate: '',
    //   // assignedDate: '',
    //   // taskDuration: '',
    //   blockOffTimeSlot: false,
    //   showStartTimeDate: false,
    //   showFinishTimeDate: false
    // }
  });

  const [startTimeDate, setStartTimeDate] = useState({
    dateString: '',
    day: '',
    date: '',
    month: '',
    year: '',
    timeString: '',
    hour: '',
    minute: '',
    showStartTimeDate: false
  });
  const [finishTimeDate, setFinishTimeDate] = useState({
    dateString: '',
    day: '',
    date: '',
    month: '',
    year: '',
    timeString: '',
    hour: '',
    minute: '',
    showFinishTimeDate: false
  });

  // const [newTask, setNewTask] = useState({
  //   task: {
  //     id: '',
  //     todo: '',
  //     deadline: '',
  //     category: '',
  //     startTimeDate: '',
  //     finishTimeDate: null
  //   }
  //   // showFinishTimeDate: false
  // });

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

  const newTaskHandler = (event, info) => {
    //let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    //alert(`dataRequestMessage: ${dataRequestMessage}`);
    switch (this.context.contentChoice) {
      case '5':
        typeOfData = 'events';
        handlerChoice = '1';
        dataLocation = '';
        infoType = 'id';
        //info = '';
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
    }
    dataRequestMessage = {
      typeOfData: typeOfData,
      handlerChoice: handlerChoice,
      dataLocation: dataLocation,
      infoType: infoType,
      info: info
    };

    this.context.dataRequestHandler(event, dataRequestMessage);
  };

  const onSubmit = event => {
    event.preventDefault();
    // alert(storeContext.contentChoice);

    let dataRequestMessage = {};
    let newTaskObj = { ...newTask.startDateTime };
    console.log(newTask);

    dataRequestMessage = {
      typeOfData: 'tasks',
      handlerChoice: '11',
      dataLocation: '',
      infoType: 'newTask',
      info: newTask
    };
    let word = {
      one: 'mot',
      two: 'hai'
    };

    storeContext.dataRequestHandler(event, dataRequestMessage);
    // console.log('before contViewHandler');
    axios
      .post('https://caltask-f1e28.firebaseio.com/newtask.json', newTask)
      .catch(error => console.log(error));
    resetState();
  };
  const resetState = () => {
    setNewTask({
      id: '',
      timeOfDay: '',
      task: '',
      deadline: '',
      category: '',
      startTimeDate: '',
      finishTimeDate: '',
      // assignedDate: '',
      // taskDuration: '',
      blockOffTimeSlot: false,
      showStartTimeDate: false,
      showFinishTimeDate: false
    });
    let contentChoiceObj = {
      target: {
        value: '0'
      }
    };

    storeContext.contentViewHandler(contentChoiceObj);
  };
  const startDateTimeHandler = date => {
    // console.log('inside startDateTimeHandler');
    setStartTimeDate({
      dateObjectString: date.dateObjectString,
      dateString: date.dateString,
      day: date.day,
      date: date.date,
      month: date.month,
      year: date.year,
      timeString: date.time,
      hour: date.hour,
      minute: date.minute,
      showStartTimeDate: true
    });

    setNewTask({
      id: newTask.id,
      task: newTask.task,
      deadline: newTask.deadline,
      category: newTask.category,
      startTimeDate: startTimeDate,
      finishTimeDate: finishTimeDate,
      blockOffTimeSlot: newTask.blockOffTimeSlot,
      showStartTimeDate: newTask.showStartTimeDate,
      showFinishTimeDate: newTask.showFinishTimeDate
    });
    // this.setState({
    //   startTimeDate: eventStartTimeDate,
    //   showFinishTimeDate: true
    // });
    console.log(startTimeDate);
  };

  const finishTimeDateHandler = date => {
    setFinishTimeDate({
      dateObjectString: date.dateObjectString,
      dateString: date.dateString,
      day: date.day,
      date: date.date,
      month: date.month,
      year: date.year,
      timeString: date.time,
      hour: date.hour,
      minute: date.minute
    });

    // let currentShowFinishTimeDate = this.state.showFinishTimeDate
    // showFinishTimeDate: !currentShowFinishTimeDate
    // this.setState({ finishTimeDate: eventFinishTimeDate });
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={event => onSubmit(event)}>
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
              startDateTimeHandler={date => startDateTimeHandler(date)}
              finishTimeDateHandler={date => finishTimeDateHandler(date)}
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
    </React.Fragment>
  );
};

export default NewTask;
