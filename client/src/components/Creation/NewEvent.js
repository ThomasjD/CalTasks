import React, { Component } from 'react';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import ReactDatePicker from '../Calendar/ReactDatePicker';
import RightCockpitContext from '../../context/RightCockpitContext';
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
  state = {
    eventId: '', //task + date + start time
    eventTitle: '',
    eventNote: '',
    eventCategory: '', //errand,multiday event, single day event, (radial choices)
    //required
    StartTimeDate: '',
    FinishTimeDate: '',

    showStartTimeDate: false,
    showFinishTimeDate: false
  };

  onSubmit = e => {
    e.preventDefault();

    let typeOfData = 'events';
    let handlerChoice = '8';
    let infoType = 'newEvent';
    let info = this.state;

    // this.setState({ blue: 'blue' }, event =>
    //   this.context.dataRequestHandler(
    //     event,
    //     typeOfData,
    //     handlerChoice,
    //     infoType,
    //     info
    //   )
    // );

    this.resetState(event =>
      this.context.dataRequestHandler(
        event,
        typeOfData,
        handlerChoice,
        infoType,
        info
      )
    );
  };

  resetState = () => {
    this.setState(
      {
        eventId: '', //task + date + start time
        eventTitle: '', //title, string

        eventNote: '', //text, string
        eventCategory: '', //errand,multiday event, single day event, (radial choices)

        //required
        assignedTimeStart: '', //14:00:00 GMT-0500 (Colombia Standard Time)
        assignedDateStart: '', //Thu Jan 16 2020
        //optional
        eventDuration: '', //
        blockOffTimeSlot: '', //T-F  when event will take on time slot for scheduled day
        assignedTimeStop: '', //00:00 - 24:00, string
        assignedDateStop: ''
      },
      event =>
        this.context.viewRequestHandler(
          event,
          'newViewNewData',
          '8',
          'tasks',
          'unAssignedTasksForWeek'
        )
    );
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
    this.setState({ startTimeDate: date, showStartTimeDate: true });

    console.log(
      `Inside NewEvent startDateTimeHandler: typeOf date ${typeof date} `
    );
  };

  finishTimeDateHandler = date => {
    this.setState({ finishTimeDate: date, showFinishTimeDate: true });
    console.log(`finishTimeHandler in newEvent: ${date}`);
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
  static contextType = RightCockpitContext;

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
                <option value="2eeting">Meeting</option>
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
                value={this.state.eventNote}
                onChange={e => this.eventNoteChange(e)}
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
