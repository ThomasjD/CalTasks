import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';
import DatePicker from 'react-datepicker';

class CalendarData extends Component {
  constructor(props) {
    super(props);

    this.newDayObj = () => {
      //obj name 200219Wed
    };

    this.createDayObjName = () => {
      /*
        //datepicker to give obj of startime
        //use starttime to make obj name
        //d




      */
    };
  }
  state = {
    showChooseDate: false
  };

  createDayObjName = event => {
    event.preventDefault();
    alert('inside createDayObjName');
    let day = this.state.startTimeDate.day;
    //let year = this.state.startTimeDate.
    let date = this.state.startTimeDate.toLocalString;
    console.log(date);
  };

  handleStartTimeDateChange(date) {
    alert('inside handleStartTimeDateChange');
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
      () => console.log(startTimeDate.day)

      // () => this.props.startDateTimeHandler(this.state.startTimeDate)
    );
  }

  render() {
    //datePicker
    // let chooseDate = null;
    // if (this.state.showChooseDate) {
    //   chooseDate = (
    //     <React.Fragment>
    //       <div className="container">
    //         <DatePicker
    //           placeholderText="Choose Start Time"
    //           selected={this.state.startDate}
    //           onChange={date => this.handleStartTimeDateChange(date)}
    //           showTimeSelect
    //           timeFormat="HH:mm"
    //           timeIntervals={30}
    //           timeCaption="Start"
    //           dateFormat="MMMM d, yyyy h:mm aa"
    //         />

    //         {/* <DatePicker
    //         placeholderText="Choose End Time"
    //         selected={this.state.finishDate}
    //         onChange={date => this.handleFinishTimeDateChange(date)}
    //         showTimeSelect
    //         timeFormat="HH:mm"
    //         timeIntervals={15}
    //         timeCaption="End"
    //         dateFormat="MMMM d, yyyy h:mm aa"
    //       /> */}
    //       </div>
    //     </React.Fragment>
    //   );
    // }

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
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default CalendarData;
{
  /* <button
          onClick={() => {
            this.setState({
              showChooseDate: !this.state.showChooseDate
            });
          }}
        >
          PickDate
        </button> */
}
