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
      //alert(taskNum * '*');
      return (
        <Aux>
          <HowBusyThisDay
            taskNum={taskNum}
            particularKey={day.concat(index)}
            type={day}
          />
        </Aux>
      );
    });
  };
  // .reduce((arr, el) => {
  //   return arr.concat(el);
  // }, []);

  // return <div>day</div>;

  //{allTasksPerDay()}
  return (
    <React.Fragment>
      <div>
        {tasksContext.tasksData.tasksData.numTasksThisWeek['Tuesday']}
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

// let busyTask = null;
//     busyTask = Object.keys(tasksContext.tasksData.tasksData.numTasksThisWeek)
//       .map(day => {
//         return [
//           ...Array(tasksContext.tasksData.tasksData.numTasksThisWeek[day])
//         ].map((_, i) => {
//           return <HowBusyThisDay key={day + i} type={day} />;
//         });
//       })
//       .reduce((arr, el) => {
//         return arr.concat(el);
//       }, []);

//     return <div>day</div>;
