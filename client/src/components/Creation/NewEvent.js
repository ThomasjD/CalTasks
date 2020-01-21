import React, { Component } from 'react';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import ReactDatePicker from '../Calendar/ReactDatePicker';
//import RightCockpitContext from '../../context/RightCockpitContext';
import TasksDataContext from '../../context/tasksContext';
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

  state = {
    eventId: 'ri Jan 31 2020 08:00:00 GMT-0500 (Colombia Standard Time',
    eventTitle: 'Mavs vs Lakers',
    eventNote: 'watch on TnT',
    eventCategory: 'leisure',
    startTimeDate: {
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
    finishTimeDate: '',
    eventDuration: '', //
    blockOffTimeSlot: false,
    showStartTimeDate: false,
    showFinishTimeDate: false,
    deadline: ''
  };

  newEventHandler = (event, info) => {
    //let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    //let info = ''; //string: actual info

    // let value = '';
    let dataRequestMessage = {};
    alert(`dataRequestMessage: ${dataRequestMessage}`);
    switch (this.props.contentChoice) {
      case '5':
        alert('case 5');
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

  onSubmit = event => {
    event.preventDefault();
    this.setState({ activity: 'nada' });
    //alert(`contentView: ${this.props.contentChoice}`);
    // this.setState({ blue: 'blue' }, event =>
    //   this.context.dataRequestHandler(
    //     event,
    //     typeOfData,
    //     handlerChoice,
    //     infoType,
    //     info
    //   )
    // );

    let date2 = {
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
    };

    //let dataLocation = this.state.startTimeDate.day;
    // alert(`inside day2 roughing it: ${date2.day}`);
    let findDay = '';
    switch (date2.day) {
      case 1:
        findDay = 'Monday';
        break;
      case 2:
        findDay = 'Tuesday';
        break;
      case 3:
        findDay = 'Wednesday';
        break;
      case 4:
        findDay = 'Thursday';
        break;
      case 5:
        findDay = 'Friday';
        break;
      case 6:
        findDay = 'Saturday';
        break;
      case 0:
        findDay = 'Sunday';
        break;
    }

    // let typeOfData = 'tasks';
    // let handlerChoice = '10';
    // let dataLocation = 'Friday';
    // let infoType = 'newEvent';
    // let info = this.state;

    // let dataRequestMessage = {
    //   typeOfData: 'events',
    //   handlerChoice: '1',
    //   dataLocation: 'Thursday',
    //   infoType: 'pickedDayTasks',
    //   info: this.state
    // };

    let dataRequestMessage = {
      typeOfData: 'events',
      handlerChoice: '1',
      dataLocation: 'Thursday',
      infoType: 'pickedDayTasks',
      info: this.state
    };
    alert(
      `dataRequestMessage.info.eventTitle: ${dataRequestMessage.info.eventTitle}`
    );
    // dataRequestMessage = {
    //   typeOfData: typeOfData,
    //   handlerChoice: handlerChoice,
    //   dataLocation: dataLocation,
    //   infoType: infoType,
    //   info: info
    // };
    //  alert(
    //       `inside NewEvent dataRequestMessage.dataLocation: ${dataRequestMessage.dataLocation}`
    //     );

    // this.context.dataRequestHandler(event, dataRequestMessage);
    // alert(
    //   `dataRequestMessage.info.eventTitle ${dataRequestMessage.info.eventTitle}`
    // );

    this.context.dataRequestHandler(event, dataRequestMessage);
    // this.resetState(event =>
    //   this.context.dataRequestHandler(event, dataRequestMessage)
    // );
  };

  resetState = () => {
    let dataRequestMessage = {
      typeOfData: 'work',
      handlerChoice: '1',
      dataLocation: 'Thursday',
      infoType: 'pickedDayTasks',
      info: this.state
    };

    let event = {
      target: {
        value: '0'
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
      () => this.context.dataRequestHandler(event, dataRequestMessage)
    );
    this.props.contentViewHandler(event);
    // event.preventDefault();
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

    // //let dataLocation = this.state.startTimeDate.day;
    // alert(`inside day2 roughing it: ${date2.day}`);
    // let findDay = '';
    // switch (date2.day) {
    //   case 1:
    //     findDay = 'Monday';
    //     break;
    //   case 2:
    //     findDay = 'Tuesday';
    //     break;
    //   case 3:
    //     findDay = 'Wednesday';
    //     break;
    //   case 4:
    //     findDay = 'Thursday';
    //     break;
    //   case 5:
    //     findDay = 'Friday';
    //     break;
    //   case 6:
    //     findDay = 'Saturday';
    //     break;
    //   case 0:
    //     findDay = 'Sunday';
    //     break;
    // }
    // let dataRequestMessage = {
    //   typeOfData: 'tasks',
    //   handlerChoice: '',
    //   dataLocation: findDay,
    //   infoType: 'pickedDayTasks',
    //   info: ''
    // };
    // // alert(
    // //   `inside NewEvent dataRequestMessage.dataLocation: ${dataRequestMessage.dataLocation}`
    // // );
    // this.context.dataRequestHandler(event, dataRequestMessage);

    // alert(`contentViewObject : ${contentViewObject.target.value}`);
    //send new view
  };

  handleDateChange = date => {
    //let date = event.target.value;
    this.setState({
      startTimeDate: date,
      showStartTimeDate: true
    });
  };

  startDateTimeHandler = date => {
    console.log(date);
    let date2 = {
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
    };
    //alert(`date2.day: ${date2.day}`);

    // let eventStartTimeDate = {
    //   dateObjectString: date.dateObjectString,
    //   dateString: date.dateString,
    //   day: date.day,
    //   date: date.date,
    //   month: date.month,
    //   year: date.year,
    //   timeString: date.time,
    //   hour: date.hour,
    //   minute: date.minute
    // };

    let eventStartTimeDate = {
      dateObjectString: date2.dateObjectString,
      dateString: date2.dateString,
      day: date2.day,
      date: date2.date,
      month: date2.month,
      year: date2.year,
      timeString: date2.time,
      hour: date2.hour,
      minute: date2.minute
    };
    this.setState({
      startTimeDate: eventStartTimeDate,
      showFinishTimeDate: true
    });
    //alert(`eventStartTimeDate.dateString: ${eventStartTimeDate.dateString}`);
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
  //static contextType = TasksDataContext;
  static contextType = TasksDataContext;

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
                defaultValue="NBA AllStar Game"
                //value={this.state.eventTitle}
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

              <DatePickerPicker
                startDateTimeHandler={date => this.startDateTimeHandler(date)}
                finishTimeDateHandler={date => this.finishTimeHandler(date)}
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
