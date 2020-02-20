import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { compareAsc, format } from 'date-fns';
import { da } from 'date-fns/locale';

class DatePickerPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //startDate: new Date(),
      showStartTimeDate: false,
      showFinishTimeDate: false
    };
  }

  handleStartTimeDateChange(date) {
    let currentShowStartTimeDate = this.state.showStartTimeDate;
    let startTimeDate = {
      date: date,
      dateObjectString: date.toString(),
      toISOString: date.toISOString(),
      toUTCString: date.toUTCString(),
      toGMTString: date.toUTCString(),
      dateString: date.toDateString(),
      timeString: date.toTimeString(),
      year: date.getFullYear(),
      yearShort: date.getYear(),
      month: date.getMonth(),
      date: date.getDate(),
      day: date.getDay(),
      time: date.toLocaleTimeString(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      UTCDate: date.getUTCDate(),
      toLocalString: date.toLocaleString(),
      toLocalDateString: date.toLocaleDateString(),
      toLocaleTimeString: date.toLocaleTimeString()
    };

    this.setState(
      {
        showStartTimeDate: !currentShowStartTimeDate,
        startDate: date,
        startTimeDate: startTimeDate
      },
      () => this.props.startDateTimeHandler(this.state.startTimeDate)
    );
  }

  handleFinishTimeDateChange(date) {
    let currenShowFinishTimeDate = this.state.showFinishTimeDate;
    let finishTimeDate = {
      date: date,
      dateObjectString: date.toString(),
      toISOString: date.toISOString(),
      toUTCString: date.toUTCString(),
      toGMTString: date.toUTCString(),
      dateString: date.toDateString(),
      timeString: date.toTimeString(),
      year: date.getFullYear(),
      yearShort: date.getYear(),
      month: date.getMonth(),
      date: date.getDate(),
      day: date.getDay(),
      time: date.toLocaleTimeString(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      UTCDate: date.getUTCDate(),
      toLocalString: date.toLocaleString(),
      toLocalDateString: date.toLocaleDateString(),
      toLocaleTimeString: date.toLocaleTimeString()
    };

    this.setState(
      {
        finishTimeDate: finishTimeDate,
        finishDate: date,
        showFinishTimeDate: !currenShowFinishTimeDate
      },
      () => this.props.finishTimeDateHandler(this.state.finishTimeDate)
    );
    console.log(`inside handleChange2 datePicker ${this.state.startDate}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    alert(main);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <DatePicker
            placeholderText="Choose Start Time"
            selected={this.state.startDate}
            onChange={date => this.handleStartTimeDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Start"
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <DatePicker
            placeholderText="Choose End Time"
            selected={this.state.finishDate}
            onChange={date => this.handleFinishTimeDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="End"
            dateFormat="MMMM DD, yyyy h:mm aa"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DatePickerPicker;
