import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';
import DatePicker from 'react-datepicker';
import numToDay from '../../components/Calendar/numToDay';
//import * as moment from 'moment';
import { format, compareAsc } from 'date-fns';
class CalendarData extends Component {
  constructor(props) {
    super(props);

    this.newDayObj = dayObjName => {
      let day = {
        unScheduledTask: [],
        repeats: [],
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
      let currentDaysObj = { ...this.state.days };
      let upgradeDaysObj = {};

      if (currentDaysObj[dayObjName]) {
        upgradeDaysObj = { ...currentDaysObj, [dayObjName]: day };
      } else {
        let randomTask = { id: '2432', title: 'grocery shopping' };
        let currentDayObj = { ...this.state.days[dayObjName] };
        let currentDayUnScheduledTask = currentDayObj.unScheduledTask;
        let upgradedDayUnScheduledTask = currentDayUnScheduledTask.push(
          randomTask
        );
        let upgradedDayObj = {
          ...currentDayObj,
          unScheduledTask: upgradedDayUnScheduledTask
        };
        this.setState({});
      }
    };

    this.createDayObjName = () => {};
  }
  state = {
    showChooseDate: false,
    days: {}
  };

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

    //dynamic keys use []
    let currentDaysObj = {
      ...this.state.days,
      [dayObjName]: {
        word: 'hello'
      }
    };

    console.dir(currentDaysObj);

    this.setState(
      {
        showStartTimeDate: !currentShowStartTimeDate,
        startDate: date
        // startTimeDate: startTimeDate
      },
      () => console.log(day)
    );
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
            timeIntervals={30}
            timeCaption="Start"
            dateFormat="MMMM dd, yyyy"
            //dateFormat="MMMM d, yyyy h:mm aa"
            //dateFormat="mm/dd/yyyy h:m aa",
            // format="mm/dd/yyyy"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default CalendarData;
