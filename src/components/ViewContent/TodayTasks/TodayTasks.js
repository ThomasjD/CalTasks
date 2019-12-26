import React, { useState, useEffect, useContext } from 'react';
import TodayTask from './TodayTask/TodayTask';
import student from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';

const TodayTasks = props => {
  //get props from app.js, run through each element in state to feed into <Task>
  //todo,deadline,location,key,click, changed sent to <Task>
  const tasksContext = useContext(TasksContext);

  const renderTableHeaderHandler = () => {
    if (tasksContext.tasksData.tasksData) {
      let header = Object.keys(
        tasksContext.tasksData.tasksData.TodayTasksHeader
      );
      return header.map((key, index) => {
        if (key === 'id') {
          return <th key={index}>Click to Delete</th>;
        } else {
          return <th key={index}>{key.toUpperCase()}</th>;
        }
      });
    }
  };
  //todayTaskChanged={props.changed}
  const todayTasksHandler = () => {
    if (tasksContext.tasksData.tasksData) {
      return tasksContext.tasksData.tasksData.Monday.map((monday, index) => {
        let functionChoiceDelete = null;
        let functionChoiceChange = null;

        //const { id, task } = monday;
        if (props.everything.contentChoice === '2') {
          functionChoiceDelete = '5';
          functionChoiceChange = '6';
        } else {
          functionChoiceDelete = '7';
          functionChoiceChange = '8';
        }

        return (
          <React.Fragment key={monday.id}>
            <TodayTask
              id={monday.id}
              task={monday.task}
              deleteTodayTask={props.clicked}
              click={event =>
                tasksContext.dataRequestHandler(
                  event,
                  'tasks',
                  functionChoiceDelete,
                  'index',
                  index
                )
              }
              changed={event =>
                tasksContext.dataRequestHandler(
                  event,
                  'tasks',
                  functionChoiceChange,
                  'id',
                  monday.id
                )
              }
            />
          </React.Fragment>
        );
      });
    }
  };

  const [lastTaskHeader, setLastTaskHeader] = useState({
    lastHeader: props.monday
  });
  useEffect(() => {
    // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
    // if (onCallDelete.signalAlert === 'true') {

    if (props.monday.length === 1) {
      //let savedHeader = Object.keys(props.tasks[0]);
      //let savedHeader = props.tasks
      console.log(props.monday);
      setLastTaskHeader({ lastHeader: props.monday });

      console.log(`this is the last task alert ${lastTaskHeader.lastHeader}`);
    }
    if (props.reRenderTodayTasks === true) {
      // alert('Are you sure you want to delete this task?');
      //return (props.reRender = {})
    }
  });

  return (
    <div>
      <h1 id="title"> Today's Tasks</h1>
      <table id="students">
        <tbody>
          <tr>{renderTableHeaderHandler()}</tr>
          {todayTasksHandler()}
        </tbody>
      </table>
    </div>
  );
};

export default TodayTasks;
