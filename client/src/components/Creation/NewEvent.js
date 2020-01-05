import React, { Component } from 'react';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
//import ReactDatePicker from '../Calendar/ReactDatePicker';
import Icon from '../Calendar/Icon';
import { Form, Input, FormGroup, Container, Label } from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';

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
  state = {
    eventTitle: '',
    day: '',
    month: '',
    year: '',
    time: '',
    task: {
      id: '', //task + date + start time
      timeOfDay: '',
      task: '', //title
      note: '',
      deadline: '', //scheduled date
      category: '', //
      source: '', //event
      assignedTimeStart: '',
      assignedTimeStop: '',
      assignedDate: ''
    },
    date: null,
    focused: null,
    showPickedDate: false
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.newestEvent(this.state);
  };
  handleDateChange = date => {
    //let date = event.target.value;
    this.setState({ date: date, showPickedDate: true }, () =>
      alert(this.state.date._d)
    );
  };
  render() {
    let showCaseReactDate = (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <SingleDatePicker
                firstDayOfWeek={1}
                keepOpenOnDateSelect={true} //doesn't close screen after picking date
                hideKeyboardShortcutsPanel={false}
                //displayFormat={() => moment.localeData().longDateFormat('L')}

                //phrases={SingleDatePickerPhrases}
                showClearDate={false}
                small={true}
                block={false}
                numberOfMonths={2}
                date={this.state.date}
                onDateChange={date => this.handleDateChange(date)}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                openDirection="down"
                hideKeyboardShortcutsPanel={true}
              />
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
    let showCurrentPickedDate = null;

    if (this.state.date && this.state.date._d) {
      showCurrentPickedDate = (
        <div>{JSON.stringify(this.state.date['_d'])}</div>
      );
    }

    //{ showCurrentPickedDate }
    return (
      <React.Fragment>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={this.state.task.task}
                onChange={e => this.change(e)}
              />
            </div>

            <div className="form-group">
              <label>Note</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={this.state.task.note}
                onChange={e => this.change(e)}
              />

              {showCaseReactDate}
            </div>
            {showCurrentPickedDate}
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
