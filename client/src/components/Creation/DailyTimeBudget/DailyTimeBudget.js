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
      Wednesday: {},
      Thursday: {},
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

    // return Object.keys(foundDayBudget).map(eachCategory => (
    //   <pickedDayTimeBudget
    //     key={eachCategory.concat(eachCategory)}
    //     activity={eachCategory}
    //     hours={foundDayBudget[eachCategory]}
    //     // reduce={() => this.deductHourToActivity(eachCategory)}
    //     // add={() => this.addHourToActivity(eachCategory)}
    //     pickedDay={pickedDay}
    //     dailyBudget={dailyBudget}
    //   />
    // ));
  };

  render() {
    
    let dynamicDisableMoreBtn = null;
    if (this.props.pickedDay) {
      dynamicDisableMoreBtn = true;
    }

    let displayPickedDay = null;
    if (this.props.pickedDay) {
      let activity = this.props.activity;
      let hours = this.props.dailyBudget[this.props.pickedDay][activity];
      displayPickedDay = (
        <div className={classes.DailyTimeBudget}>
          <div className={classes.Activity}>{activity.toUpperCase()}</div>
          <div className={classes.ActivityHours}>{hours}</div>

          <button
            className={classes.Less}
            onClick={this.props.reducePickedDay}
            disabled={this.props.pickDayLess0hours}
          >
            Less
          </button>
          <button
            className={classes.More}
            onClick={this.props.addPickedDay}
            //disabled={this.props.moreButtonDisabled}
            disabled={this.props.disabled24hr}
            //disabled={this.props.moreButtonDisabled}
          >
            More
          </button>
        </div>
      );
    }

    return (
      <div className={classes.DailyTimeBudget}>
        <div className={classes.DailyTimeBudget}>
          <div className={classes.Activity}>
            {this.props.activity.toUpperCase()}
          </div>
          <div className={classes.ActivityHours}>{this.props.hours}</div>

          <button
            className={classes.Less}
            onClick={this.props.reduce}
            disabled={this.props.lessButtonDisabled}
          >
            Less
          </button>
          <button
            className={classes.More}
            onClick={this.props.add}
            // disabled={this.props.moreButtonDisabled}

            disabled={this.props.moreButtonDisabled}
          >
            More
          </button>
        </div>
        <div>{displayPickedDay}</div>
      </div>
    );
  }
}

export default DailyTimeBudget;
