import React, { Component } from 'react';
import classes from './PickedDayBudget.module.css';
import StoreDataContext from '../../../../../context/StoreDataContext';

class PickedDayBudget extends Component {
  TimeBudgetPickedDay = () => {
    let pickedDay = this.props.pickedDay;
    let dailyBudget = this.props.dailyBudget;
    let foundDayBudget = dailyBudget[pickedDay];
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
export default PickedDayBudget;
