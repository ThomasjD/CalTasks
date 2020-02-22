import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';
import DatePicker from 'react-datepicker';
import numToDay from '../../components/Calendar/numToDay';
import StoreContext from '../../context/StoreDataContext';

import { format, compareAsc } from 'date-fns';
class CalendarData extends Component {
  constructor(props) {
    super(props);

    this.newDayObj = dayObjName => {
      console.log('inside newDayObj ');
      //empty obj if dayObjName doesn't exist
      let dayObjName2 = {
        unScheduledTask: dayObjName,
        repeats: ['hello', 'there'],
        hours: {
          '00:00': '',
          '00:30': '',
          '01:00': '',
          '01:30': '',
          '02:00': '',
          '02:30': '',
          '03:00': '',
          '03:30': '',
          '04:00': '',
          '04:30': '',
          '05:00': '',
          '05:30': '',
          '06:00': '',
          '06:30': '',
          '07:00': '',
          '08:30': '',
          '08:00': '',
          '08:30': '',
          '09:00': '',
          '09:30': '',
          '10:00': '',
          '10:30': '',
          '11:00': '',
          '11:30': '',
          '12:00': '',
          '12:30': '',
          '13:00': '',
          '13:30': '',
          '14:00': '',
          '14:30': '',
          '15:00': '',
          '15:30': '',
          '16:00': '',
          '16:30': '',
          '17:00': '',
          '17:30': '',
          '18:00': '',
          '18.30': '',
          '19:00': '',
          '19.30': '',
          '20:00': '',
          '20.30': '',
          '21:00': '',
          '21.30': '',
          '02:00': '',
          '22.30': '',
          '23:00': '',
          '23.30': '',
          '24:00': '',
          '24.30': ''
        }
      };

      let updatedDayObj = { ...this.state.days, [dayObjName]: dayObjName2 };
      this.setState({ days: updatedDayObj });
    };
  }
  state = {
    showChooseDate: false,
    days: {
      '200204Tue': {
        unscheduledtasks: [{ id: 'task8', title: 'homework;' }]
      }
    }
  };
  static contextType = StoreContext;
  createDayObjName = event => {
    event.preventDefault();
    alert('inside createDayObjName');
    let day = this.state.startTimeDate.day;

    let date = this.state.startTimeDate.toLocalString;
    console.log(date);
  };

  handleStartTimeDateChange(date) {
    let currentShowStartTimeDate = this.state.showStartTimeDate;
    let day = format(date, 'E');
    let dateDigit = format(date, 'dd');
    let year = format(date, 'yy');
    let month = format(date, 'MM');
    let dayObjName = year + month + dateDigit + day;

    console.log(`day: ${day} type: ${typeof day}`);
    console.log(`date: ${dateDigit} type: ${typeof dateDigit}`);
    console.log(`year: ${year} type: ${typeof year}`);
    console.log(`month: ${month} type: ${typeof month}`);
    console.log(`dayObjName: ${dayObjName} type: ${typeof dayObjName}`);

    let currentDaysObj = this.state.days;

    //if there there is NO obj for that day
    if (typeof currentDaysObj[dayObjName] == 'undefined') {
      this.newDayObj(dayObjName);
    } else {
      //if there is an obj for that day

      let newTask = { id: 'task243', title: 'groceries' };

      currentDaysObj[dayObjName].unscheduledtasks.push(newTask);
      console.log(currentDaysObj[dayObjName]);

      this.setState(
        {
          days: currentDaysObj
        },

        () => console.log(this.state.days[dayObjName])
      );
    }
  }

  // newEventHandler = value => {
  //   let newEvent = this.context.dataRequestDetails.value;
  //   let startTimeDate = this.context.dataRequestDetails.value.startTimeDate;

  //   let assignTask = {
  //     id: newEvent.startTimeDate.dateObjectString,
  //     timeOfDay: startTimeDate.time,
  //     task: newEvent.eventTitle,
  //     note: newEvent.eventNote,
  //     deadline: newEvent.deadline,
  //     category: newEvent.eventCategory,
  //     assignedTimeStart: startTimeDate,
  //     assignedTimeStop: newEvent.finishTimeDate
  //   };

  //   //Thur blocked out
  //   let dataLocation = this.context.dataRequestDetails.dataLocation;

  //   // let availableObjects = Object.keys(this.state)

  //   if (!this.state[dataLocation]) {
  //     // object exists
  //     let addNewEventToNewDataLocation = [assignTask];

  //     this.setState(
  //       {
  //         [dataLocation]: addNewEventToNewDataLocation,
  //         pickedDayTasksHeader: assignTask,
  //         dataLocation: dataLocation
  //       },

  //       () => this.context.dataReceiverHandler(this.state)
  //     );
  //   } else {
  //     let addNewEventToExistingDataLocation = this.state[dataLocation][0];

  //     this.setState(
  //       {
  //         [dataLocation]: addNewEventToExistingDataLocation,
  //         pickedDayTasksHeader: assignTask,
  //         dataLocation: dataLocation
  //       },

  //       () => this.context.dataReceiverHandler(this.state)
  //     );
  //   }
  // };
  newEventHandler = value => {
    let newEvent = this.context.dataRequestDetails.value;
    //let startTimeDate = this.context.dataRequestDetails.value.startTimeDate;
    let dayObjName = this.context.dataRequestDetails.value.dayObjName;
    let newTask = {
      id: newEvent.task, //.concat(newEvent.dayObjName),
      // timeOfDay: startTimeDate.time,
      objName: newEvent.dayObjName,
      task: newEvent.eventTitle,
      note: newEvent.eventNote,
      deadline: newEvent.deadline,
      category: newEvent.eventCategory
      // assignedTimeStart: startTimeDate,
      // assignedTimeStop: newEvent.finishTimeDate
    };

    // let dataLocation = this.context.dataRequestDetails.dataLocation;
    let dataLocation = newEvent.dayObjName;
    let currentDaysObj = this.state.days;

    //if there there is NO obj for that day
    if (typeof currentDaysObj[this.state.dayObjName] == 'undefined') {
      this.newDayObj(dayObjName);
      console.log('Inside if of newEventHandler() ');
    } else {
      //if there is an obj for that day

      // let newTask = { id: 'task243', title: 'groceries' };

      currentDaysObj[dayObjName].unscheduledtasks.push(newTask);
      console.log(currentDaysObj[dayObjName]);

      this.setState(
        {
          days: currentDaysObj
        },
        () => console.log('Inside of newevent() setState  ')
      );
      //() => this.context.dataReceiverHandler(this.state)

      // console.log(this.state)
      // );
    }

    // if (!this.state[dataLocation]) {
    //   // object exists
    //   let addNewEventToNewDataLocation = [assignTask];

    //   this.setState(
    //     {
    //       [dataLocation]: addNewEventToNewDataLocation,
    //       pickedDayTasksHeader: assignTask,
    //       dataLocation: dataLocation
    //     },

    //     () => this.context.dataReceiverHandler(this.state)
    //   );
    // } else {
    //   let addNewEventToExistingDataLocation = this.state[dataLocation][0];

    //   this.setState(
    //     {
    //       [dataLocation]: addNewEventToExistingDataLocation,
    //       pickedDayTasksHeader: assignTask,
    //       dataLocation: dataLocation
    //     },

    //     () => this.context.dataReceiverHandler(this.state)
    //   );
    // }
  };

  render() {
    console.dir(this.state);
    if (
      this.context.dataRequestDetails &&
      this.context.dataRequestDetails.typeOfData === 'events'
    ) {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //new Event
          // alert(
          //   `doogie inside TasksData events case 1 contentChoice: ${this.context.dataRequestDetails.handlerChoice}`
          // );

          this.context.resetHandlerChoice(
            this.newEventHandler(this.context.dataRequestDetails.value)
          );

          // this.context.resetHandlerChoice(() =>
          //   this.lastTaskHeaderHandler(() =>
          //     this.newEventHandler(this.context.dataRequestDetails.value)
          //   )
          // );

          // this.context.resetHandlerChoice(this.lastTaskHeaderHandler());

          break;
      }
    }

    return (
      <React.Fragment>
        <div className="container">
          <DatePicker
            placeholderText="Choose Start Time"
            selected={this.state.startDate}
            onChange={date => this.handleStartTimeDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Start"
            dateFormat="MMMM dd, yyyy"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default CalendarData;
