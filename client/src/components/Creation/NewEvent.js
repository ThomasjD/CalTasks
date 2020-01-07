import React, { Component } from 'react';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import ReactDatePicker from '../Calendar/ReactDatePicker';
import RightCockpitContext from '../../context/RightCockpitContext';
import CalendarContext from '../../context/calendarContext';
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

// onSubmit = e => {
// e.preventDefault();

// const [newEvent, setNewEvent] = useState({
//   title: ''
// });

// setNewEvent({
//   [e.target.name]: e.target.value
// });
// let bigEvent = { [e.target.name]: e.target.value };
// props.newestEvent(bigEvent);
// };

class NewEvent extends Component {
  //startDate1: Thu Jan 16 2020 14:00:00 GMT-0500 (Colombia Standard Time)
  state = {
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
    assignedDateStop: '',
    startDate1: '',
    startDate2: null
  };

  onSubmit = e => {
    //send state to Store, reset empty state, go to new view: events/tasks for specific day,
    e.preventDefault();

    //this.props.newestEvent(this.state);

    this.resetState(this.context.newestEvent(this.state));
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
      () => this.context.newContentViewHandler('2', 'Monday')
    );
    //send new view
  };
  handleDateChange = date => {
    //let date = event.target.value;
    this.setState({ date: date, showPickedDate: true });
  };

  startDateTimeHandler = date => {
    //alert(JSON.stringify(date));

    //console.log(`valueOF ${Object.prototype.valueOf(date)}`);
    console.log(JSON.stringify(date));

    //console.log(...hood);
    // let scheduledStartDateTime = valueOf(date);
    // console.log(scheduledStartDateTime);
    this.setState({ startDate1: date, day: '1' });
    console.log(this.state.startDate1);
    // //startDate1: Thu Jan 23 2020 16:30:00 GMT-0500 (Colombia Standard Time)

    console.log(
      `Inside NewEvent startDateTimeHandler: typeOf date ${typeof date} `
    );
  };

  finishTimeHandler = date => {
    this.setState({ startDate2: JSON.stringify(date) });
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
  static contextType = CalendarContext;
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
                finishTimeHandler={date => this.finishTimeHandler(date)}
              />
            </div>

            <button onClick={e => this.onSubmit(e)}>Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
// {this.state.showPickedDate ? { showCurrentPickedDate } : null}
export default NewEvent;

// <div className="form-group">
//             <label for="exampleFormControlTextarea1">Example textarea</label>
//             <textarea
//               value = 'Search on Ebay'
//               className="form-control"
//               rows="3">
//                </textarea>
//           </div>
