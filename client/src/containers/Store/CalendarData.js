import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import DatePicker from 'react-datepicker';
import numToDay from '../../components/Calendar/numToDay';
import StoreContext from '../../context/StoreDataContext';

import { format, compareAsc } from 'date-fns';
class CalendarData extends Component {
  constructor(props) {
    super(props);

    this.newDayObj = (dayObjName, newTask, newEvent) => {
      console.log('inside newDayObj ');
      //empty obj if dayObjName doesn't exist
      let newDayObj = {
        unScheduledTasks: newTask,
        unScheduledEvents: newEvent,
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

      let updatedDayObj = { ...this.state.days, [dayObjName]: newDayObj };
      this.setState({ days: updatedDayObj });
    };
  }
  state = {
    showChooseDate: false,
    days: {
      '200131Fri': {
        unScheduledTasks: [{ id: 'task8', title: 'homework;' }],
        unScheduledEvents: [
          {
            eventId: 'event37',
            eventTitle: 'homework festival;',
            eventNote: '',
            eventCategory: '',
            eventStartTimeDate: {
              date: 31,
              dateObjectString:
                'Fri Jan 31 2020 08:00:00 GMT-0500 (Colombia Standard Time)',
              toISOString: '2020-01-31T13:00:00.000Z',
              toUTCString: 'Fri, 31 Jan 2020 13:00:00 GMT',
              toGMTString: 'Fri, 31 Jan 2020 13:00:00 GMT',
              dateString: 'Fri Jan 31 2020',
              timeString: '08:00:00 GMT-0500 (Colombia Standard Time)',
              year: 2020,
              yearShort: 120,
              month: 0,
              day: 5,
              time: '8:00:00 AM',
              hour: 8,
              minute: 0,
              UTCDate: 31,
              toLocalString: '1/31/2020, 8:00:00 AM',
              toLocalDateString: '1/31/2020',
              toLocaleTimeString: '8:00:00 AM'
            },
            eventFinishTimeDate: '',
            //later: If one-day event
            eventDuration: '',
            //later: T -> schedule it on calendarData
            //F--> put into unScheduledEventsList for that day
            blockOffTimeSlot: false,
            showStartTimeDate: false,
            showFinishTimeDate: false,
            eventDeadline: '',
            //later: show multiday non-continous event
            showMultidayNonContinousDate: false
          }
        ]
      }
    }
  };
  static contextType = StoreContext;

  newTaskHandler = value => {
    let newTask = this.context.dataRequestDetails.value;
    let newTaskObj = {
      taskId: value.eventId, //.concat(newEvent.dayObjName),
      // timeOfDay: startTimeDate.time,
      objName: value.dayObjName,
      taskTitle: value.taskTitle,
      taskNote: value.taskNote,
      taskDeadline: value.taskDeadline,
      taskCategory: value.taskCategory,
      taskStartTimeDate: value.taskStartTimeDate,
      taskFinishTimeDate: value.taskFinishTimeDate,
      taskDuration: value.taskDuration, //
      blockOffTimeSlot: value.blockOffTimeSlot,
      //required
      showStartTimeDate: value.showStartTimeDate,
      //later: show another datePicker to pick a multiday task
      showFinishTimeDate: value.showFinishTimeDate,

      //later: show multiday non-continous task
      showMultidayNonContinousDate: value.showMultidayNonContinousDate,
      taskDeadline: value.taskDeadline,
      //later: If one-day task
      taskDuration: value.taskDuration,
      //later: T -> schedule it on calendarData
      //F--> put into unScheduledTasksList for that day
      blockOffTimeSlot: value.blockOffTimeSlot
    };

    let dayObjName = this.context.dataRequestDetails.value.dayObjName;

    let dataLocation = newTaskObj.dayObjName;
    let currentDaysObj = this.state.days;

    //if there there is NO obj for that day
    if (typeof currentDaysObj[dayObjName] == 'undefined') {
      let newTaskObj = null;
      let newEventObj = null;
      //This way a day can store these new objs
      this.newDayObj(dayObjName, newTaskObj, newEventObj);
    } else {
      //if there is an obj for that day -> add this newEvent

      //adding the newEvent to the unScheduledEvents list for that day
      currentDaysObj[dayObjName].unScheduledTasks.push(newTaskObj);

      console.log(currentDaysObj[dayObjName]);

      this.setState(
        {
          days: currentDaysObj
        },
        () => console.log('Inside of newevent() setState  ')
      );
    }
  };
  newEventHandler = value => {
    let newEvent = this.context.dataRequestDetails.value;
    let newEventObj = {
      eventId: value.eventId, //.concat(newEvent.dayObjName),
      // timeOfDay: startTimeDate.time,
      objName: value.dayObjName,
      eventTitle: value.eventTitle,
      eventNote: value.eventNote,
      eventDeadline: value.eventDeadline,
      eventCategory: value.eventCategory,
      eventStartTimeDate: value.eventStartTimeDate,
      eventFinishTimeDate: value.eventFinishTimeDate,
      eventDuration: value.eventDuration, //
      blockOffTimeSlot: value.blockOffTimeSlot,
      //required
      showStartTimeDate: value.showStartTimeDate,
      //later: show another datePicker to pick a multiday event
      showFinishTimeDate: value.showFinishTimeDate,

      //later: show multiday non-continous event
      showMultidayNonContinousDate: value.showMultidayNonContinousDate,
      eventDeadline: value.eventDeadline,
      //later: If one-day event
      eventDuration: value.eventDuration,
      //later: T -> schedule it on calendarData
      //F--> put into unScheduledEventsList for that day
      blockOffTimeSlot: value.blockOffTimeSlot
    };
    //let startTimeDate = this.context.dataRequestDetails.value.startTimeDate;
    let dayObjName = this.context.dataRequestDetails.value.dayObjName;

    let dataLocation = newEvent.dayObjName;
    let currentDaysObj = this.state.days;

    //if there there is NO obj for that day
    if (typeof currentDaysObj[dayObjName] == 'undefined') {
      let newTask = null;
      //This way a day can store these new objs
      this.newDayObj(dayObjName, newTask, newEventObj);
    } else {
      //if there is an obj for that day -> add this newEvent

      //adding the newEvent to the unScheduledEvents list for that day
      currentDaysObj[dayObjName].unScheduledEvents.push(newEventObj);

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
  };

  render() {
    console.dir(this.state);
    if (
      this.context.dataRequestDetails &&
      this.context.dataRequestDetails.typeOfData === 'calendar'
    ) {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //new Event
          this.context.resetHandlerChoice(
            this.newEventHandler(this.context.dataRequestDetails.value)
          );

          break;
      }
    }

    return <React.Fragment></React.Fragment>;
  }
}
export default CalendarData;

/* function for datePicker for react & handler change()
handleStartTimeDateChange(date) {
  let currentShowStartTimeDate = this.state.showStartTimeDate;
  let day = format(date, 'E');
  let dateDigit = format(date, 'dd');
  let year = format(date, 'yy');
  let month = format(date, 'MM');
  let dayObjName = year + month + dateDigit + day;

  // console.log(`day: ${day} type: ${typeof day}`);
  // console.log(`date: ${dateDigit} type: ${typeof dateDigit}`);
  // console.log(`year: ${year} type: ${typeof year}`);
  // console.log(`month: ${month} type: ${typeof month}`);
  // console.log(`dayObjName: ${dayObjName} type: ${typeof dayObjName}`);

  let currentDaysObj = this.state.days;

  //if there there is NO obj for that day
  if (typeof currentDaysObj[dayObjName] == 'undefined') {
    this.newDayObj(dayObjName);
  } else {//if there is an obj for that day
    

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
        </div> */
