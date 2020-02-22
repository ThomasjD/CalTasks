import React, { Component } from 'react';
import numToDay from '../Calendar/numToDay';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import ReactDatePicker from '../Calendar/ReactDatePicker';
import DatePicker from 'react-datepicker';
import { format, compareAsc } from 'date-fns';
import StoreDataContext from '../../context/StoreDataContext';
import Icon from '../Calendar/Icon';
import { Form, Input, FormGroup, Container, Label } from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';
import { fi } from 'date-fns/locale';

class NewEvent extends Component {
  // state = {
  //   eventId: '', //task + date + start time
  //   eventTitle: '',
  //   eventNote: '',
  //   eventCategory: '', //errand,multiday event, single day event, (radial choices)
  //   //required
  //   startTimeDate: '',
  //   finishTimeDate: '',
  //   eventDuration: '', //
  //   blockOffTimeSlot: false,
  //   showStartTimeDate: false,
  //   showFinishTimeDate: false,
  //   deadline: ''
  // };
  constructor(props) {
    super(props);
    this.emptyTitle = React.createRef();
  }

  state = {
    eventId: '',
    eventTitle: '',
    eventNote: '',
    eventCategory: '',
    startTimeDate: '',
    finishTimeDate: '',
    eventDuration: '', //
    blockOffTimeSlot: false,
    showStartTimeDate: false,
    showFinishTimeDate: false,
    deadline: ''
  };

  // newEventHandler = (event, info) => {
  //   //let contentchoice = event.target.value;
  //   let typeOfData = ''; //string: syllabus,tasks,events,objectives
  //   let handlerChoice = ''; //string: '#' handler inside of database
  //   let dataLocation = ''; // string: where obj found inside database
  //   let infoType = ''; //string: index/id/
  //   //let info = ''; //string: actual info

  //   // let value = '';
  //   let dataRequestMessage = {};
  //   //alert(`dataRequestMessage: ${dataRequestMessage}`);
  //   switch (this.context.contentChoice) {
  //     case '5':
  //       typeOfData = 'events';
  //       handlerChoice = '1';
  //       dataLocation = '';
  //       infoType = '';
  //       //info = '';
  //       break;

  //   }
  //   dataRequestMessage = {
  //     typeOfData: typeOfData,
  //     handlerChoice: handlerChoice,
  //     dataLocation: dataLocation,
  //     infoType: infoType,
  //     info: info
  //   };

  //   this.context.dataRequestHandler(event, dataRequestMessage);
  // };

  // onSubmit = event => {
  //   event.preventDefault();
  //   //if forgot to fill out the title it will focus on it
  //   if (!this.state.eventTitle) {
  //     this.emptyTitle.current.focus();
  //     return alert('Give the event a name!');
  //   }
  //   let start = this.state.startTimeDate;

  //   let findDay = numToDay(start.day);

  //   let dataRequestMessage = {
  //     typeOfData: 'events',
  //     handlerChoice: '1',
  //     dataLocation: findDay,
  //     infoType: 'newEvent',
  //     info: this.state
  //   };
  //   this.context.dataRequestHandler(event, dataRequestMessage);

  //   this.resetState();
  // };

  onSubmit = event => {
    event.preventDefault();
    //if forgot to fill out the title it will focus on it
    if (!this.state.eventTitle) {
      this.emptyTitle.current.focus();
      return alert('Give the event a name!');
    }
    // let start = this.state.startTimeDate;

    // let findDay = numToDay(start.day);
    if (this.state.dayObjName) {
      let dataRequestMessage = {
        typeOfData: 'events',
        handlerChoice: '1',
        dataLocation: this.state.dayObjName,
        infoType: 'newEvent',
        info: this.state
      };
      this.context.dataRequestHandler(event, dataRequestMessage);

      this.resetState();
    }
  };

  resetState = () => {
    let contentChoiceObj = {
      target: {
        value: '9'
      }
    };

    this.setState(
      {
        eventId: '', //task + date + start time
        eventTitle: '',
        eventNote: '',
        eventCategory: '',
        //required
        startTimeDate: '',
        finishTimeDate: '',
        showStartTimeDate: false,
        showFinishTimeDate: false,
        deadline: '',
        eventDuration: '', //
        blockOffTimeSlot: ''
      },
      () => this.context.contentViewHandler(contentChoiceObj)
    );
  };

  handleDateChange = date => {
    this.setState({
      startTimeDate: date,
      showStartTimeDate: true
    });
  };

  startDateTimeHandler = date => {
    let eventStartTimeDate = {
      dateObjectString: date.dateObjectString,
      dateString: date.dateString,
      day: date.day,
      date: date.date,
      month: date.month,
      year: date.year,
      timeString: date.time,
      hour: date.hour,
      minute: date.minute
    };
    this.setState({
      startTimeDate: eventStartTimeDate,
      showFinishTimeDate: true
    });
  };

  finishTimeDateHandler = date => {
    let eventFinishTimeDate = {
      dateObjectString: date.dateObjectString,
      dateString: date.dateString,
      day: date.day,
      date: date.date,
      month: date.month,
      year: date.year,
      timeString: date.time,
      hour: date.hour,
      minute: date.minute
    };

    // let currentShowFinishTimeDate = this.state.showFinishTimeDate
    // showFinishTimeDate: !currentShowFinishTimeDate
    this.setState({ finishTimeDate: eventFinishTimeDate });
  };

  eventTitleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  eventNoteChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  eventTypeChange = e => {
    this.setState({
      eventType: e.target.value
    });
  };

  handleStartTimeDateChange(date) {
    //let currentShowStartTimeDate = this.state.showStartTimeDate;
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

    // let currentDaysObj = this.state.days;

    // //if there there is NO obj for that day
    // if (typeof currentDaysObj[dayObjName] == 'undefined') {
    //   this.newDayObj(dayObjName);
    // } else {
    //   //if there is an obj for that day

    //   let newTask = { id: 'task243', title: 'groceries' };

    //   currentDaysObj[dayObjName].unscheduledtasks.push(newTask);
    //   console.log(currentDaysObj[dayObjName]);

    this.setState({
      dayObjName: dayObjName
    });
  }

  static contextType = StoreDataContext;

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="eventTitle"
                className="form-control"
                ref={this.emptyTitle}
                //defaultValue="NBA AllStar Game"
                value={this.state.eventTitle}
                onChange={e => this.eventTitleChange(e)}
              />
            </div>

            <div className="form-group">
              <label>Event Type</label>
              <select
                name="assignedTimeStart"
                className="form-control"
                placeholder="Enter Start Time."
                onChange={e => this.eventTypeChange(e)}
                id="assignedTimeStart"
                defaultValue="1"
              >
                <option value="1">Appointment</option>
                <option value="2">Meeting</option>
                <option value="3">One Time - Scheduled</option>
                <option value="4">One Time - Unschedule</option>
                <option value="5">Multi Day Event</option>
              </select>
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

              {/* <DatePickerPicker
                startDateTimeHandler={date => this.startDateTimeHandler(date)}
                finishTimeDateHandler={date => this.finishTimeHandler(date)}
              /> */}

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

            <button onClick={e => this.onSubmit(e)}>Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default NewEvent;

// let date2 = {
//   date: 31,
//   dateObjectString:
//     'Fri Jan 31 2020 08:00:00 GMT-0500 (Colombia Standard Time)',
//   toISOString: '2020-01-31T13:00:00.000Z',
//   toUTCString: 'Fri, 31 Jan 2020 13:00:00 GMT',
//   toGMTString: 'Fri, 31 Jan 2020 13:00:00 GMT',
//   dateString: 'Fri Jan 31 2020',
//   timeString: '08:00:00 GMT-0500 (Colombia Standard Time)',
//   year: 2020,
//   yearShort: 120,
//   month: 0,
//   day: 5,
//   time: '8:00:00 AM',
//   hour: 8,
//   minute: 0,
//   UTCDate: 31,
//   toLocalString: '1/31/2020, 8:00:00 AM',
//   toLocalDateString: '1/31/2020',
//   toLocaleTimeString: '8:00:00 AM'
// };
