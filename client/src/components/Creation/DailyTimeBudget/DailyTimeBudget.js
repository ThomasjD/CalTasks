import { parseWithOptions } from 'date-fns/fp';
import React, { Component } from 'react';
import classes from './DailyTimeBudget.module.css';
import PickedDayTimeBudget from './PickedDayTimeBudget/PickedDayTimeBudget';

//import React, {useState, useContext} from 'react'
class DailyTimeBudget extends Component {
  constructor(props) {
    super(props);

    this.hoursInWeek = 168;
    this.hoursInDay = 24;
    this.activityWeekCategories = {
      sleep: 49,
      exercise: 7,
      work: 49,
      free: 7,
      errands: 14,
      getReady: 28,
      totalHours: 168
    };

    this.activityDayCategories = {
      sleep: 7,
      exercise: 1,
      work: 9,
      free: 1,
      errands: 2,
      getReady: 4,
      totalHours: 24
    };

    this.daysOfWeek = {
      Monday: {},
      Tuesday: {},
      WednesDay: {},
      ThursDay: {},
      Friday: {},
      Saturday: {},
      Sunday: {}
    };
    this.dailyBudget = {};

    //create a seperate object that contains activityCategories
    this.timeBudgetDay = () => {
      Object.keys(this.daysOfWeek).map(day => {
        //give each day the categories w/ hours
        console.log(day);
        let updatedDailyBudget = {
          ...this.dailyBudget,
          [day]: this.activityDayCategories
        };

        return (this.dailyBudget = updatedDailyBudget);
      });
    };

    // timeBudgetWeek = () => {
    //   //
    // }
  }

  TimeBudgetPickedDay = () => {
    let pickedDay = this.props.pickedDay;
    let dailyBudget = this.props.dailyBudget;
    let foundDayBudget = dailyBudget[pickedDay];

    return Object.keys(foundDayBudget).map(eachCategory => (
      <pickedDayTimeBudget
        key={eachCategory.concat(eachCategory)}
        activity={eachCategory}
        hours={foundDayBudget[eachCategory]}
        // reduce={() => this.deductHourToActivity(eachCategory)}
        // add={() => this.addHourToActivity(eachCategory)}
        pickedDay={pickedDay}
        dailyBudget={dailyBudget}
      />
    ));
  };

  render() {
    // alert(this.props.pickedDay);

    // let Monday = { ...this.dailyBudget };
    // // console.dir(Monday['Monday']);
    // let workMonday = { ...this.dailyBudget.Monday };
    // let workWork = { ...workMonday };

    let pickedDay = this.props.pickedDay;
    let dailyBudget = this.props.dailyBudget;
    let displayPickedDay = null;
    if (this.props.pickedDay) {
      let foundDayBudget = dailyBudget[pickedDay];
      console.dir(dailyBudget);
      console.dir(foundDayBudget);
      // alert(`sleep: ${foundDayBudget.sleep}`);

      displayPickedDay = Object.keys(foundDayBudget).map(eachCategory => {
        console.log(`eachCategory: ${eachCategory}`);
        return (
          <pickedDayTimeBudget
            key={eachCategory.concat(eachCategory)}
            activity={eachCategory}
            hours={foundDayBudget[eachCategory]}
            // reduce={() => this.deductHourToActivity(eachCategory)}
            // add={() => this.addHourToActivity(eachCategory)}
            pickedDay={pickedDay}
            dailyBudget={dailyBudget}
          />
        );
      });
    }

    return (
      <div className="classes.DailyTimeBudget">
        <div className={classes.DailyTimeBudget}>
          <div className={classes.Activity}>
            {this.props.activity.toUpperCase()}
          </div>
          <div className={classes.Activity}>{this.props.hours}</div>

          <button className={classes.Less} onClick={this.props.reduce}>
            Less
          </button>
          <button className={classes.More} onClick={this.props.add}>
            More
          </button>
        </div>
        <div>{displayPickedDay}</div>
      </div>
    );
  }
}

export default DailyTimeBudget;
