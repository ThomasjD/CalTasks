import React, { useEffect, useState, useContext } from 'react';
import students from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';
import Task from '../../ViewContent/Tasks/Task/Task';
import HowBusyThisDay from './HowBusyThisDay/HowBusyThisDay';
import Aux from '../../../hoc/Aux';
//import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';
// import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
// import Template from '../../Template/Template';

const HowBusyThisWeek = props => {
  const tasksContext = useContext(TasksContext);
  // const (aa,setbb) = useState({

  // })

  const renderTableHeaderDayTasksHandler = () => {
    // let header = null;
    // header = Object.keys(tasksContext.tasksData.tasksData.numTasksThisWeek);

    // return header.map((key, index) => {
    //   return (
    //     <Aux>
    //       <th key={index}>Day</th>
    //       <th key={index}>Number Of Tasks</th>
    //     </Aux>
    //   );

    return (
      <Aux>
        <th key="day">Day</th>
        <th key="icon">Number Of Tasks</th>
      </Aux>
    );
  };

  const allTasksPerDay = () => {
    //
    let busyTask = null;
    busyTask = Object.keys(tasksContext.tasksData.tasksData.numTasksThisWeek);

    return busyTask.map((day, index) => {
      let taskNum = tasksContext.tasksData.tasksData.numTasksThisWeek[day];
      let particularKey = day.concat(index);
      return (
        <Aux>
          <tr>
            <td className="text-dark">{day}</td>
            <td className="text-dark">
              {makeIconHandler(day, taskNum, particularKey)}
            </td>
          </tr>
        </Aux>
      );
    });
  };
  const makeIconHandler = (day, taskNum, particularKey) => {
    let makeIcon = null;
    return (makeIcon = [...Array(taskNum)]
      .map((_, index) => {
        return (
          <HowBusyThisDay
            taskNum={taskNum}
            particularKey={day.concat(index)}
            type={day}
          />
        );
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, [])); //get rid of the array

    // let busyTask = Object.keys(
    //   tasksContext.tasksData.tasksData.numTasksThisWeek
    // ) // array of keys
    //   .map(day => {
    //     //use each key  make arrays equivalent to their value
    //     return [
    //       ...Array(tasksContext.tasksData.tasksData.numTasksThisWeek[day])
    //     ].map((_, index) => {
    //       //for each of these undefined array pass in this component
    //       return
    //        <HowBusyThisDay
    //       taskNum={taskNum}
    //       particularKey={day.concat(index)}
    //       type={day}
    //     />

    //     <HowBusyThisDay key={day + index} type={day} />;
    //     });
    //   }) //end up w/ an array of components
    // .reduce((arr, el) => {
    //   return arr.concat(el);
    // }, []); //get rid of the array

    // return busyTask;
  };
  return (
    <React.Fragment>
      <div>
        <table id="students">
          <tbody>
            <tr>{renderTableHeaderDayTasksHandler()}</tr>
            {allTasksPerDay()}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default HowBusyThisWeek;
