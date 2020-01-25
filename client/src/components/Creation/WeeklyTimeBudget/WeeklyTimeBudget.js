import React, { Component } from 'react';
import DailyTimeBudget from '../DailyTimeBudget/DailyTimeBudget';
import classes from './WeeklyTimeBudget.module.css';
//import classes2 from '../DailyTimeBudget/DailyTimeBudget.module.css';

//each day have a predetermined amt of time for each category
//then each day you can balance it according to 24 hours
//after balancing for each day, you have to go back to balance the weekly total

//24 hours a day //broken down into .5 hour
//
class weeklyTimeBudget extends Component {
  constructor(props) {
    super(props);
    this.thisWeek = new DailyTimeBudget();
    this.thisWeek.timeBudgetDay();
    this.state = {
      activityWeekCategories: this.thisWeek.activityWeekCategories,
      dailyBudget: this.thisWeek.dailyBudget,
      pickedDay: ''
    };
  }

  // state = {
  //   totalWeekHours: 168,

  //   hoursPerDay: 24,
  //   weeklyBudget: {
  //     sleep: 7,
  //     exercise: 7,
  //     work: 49,
  //     free: 7,
  //     errands: 14,
  //     getReady: 28,
  //     totalHours: 168
  //   }
  // };

  addHourToActivity = activity => {
    let activityWeekCategories = { ...this.state.activityWeekCategories };
    let currentTotalHourCount = activityWeekCategories.totalHours;
    let currentActivityHourCount = activityWeekCategories[activity];

    //const [[activity], totalHours] = {...this.state.activityWeekCategories}
    let updatedTotalHourCount = currentTotalHourCount + 1;
    activityWeekCategories.totalHours = updatedTotalHourCount;
    let updatedActivityHourCount = currentActivityHourCount + 1;
    activityWeekCategories[activity] = updatedActivityHourCount;

    this.setState({ activityWeekCategories: activityWeekCategories });

    //this.updatePurchaseState(updatedIngredients);
  };
  deductHourToActivity = activity => {};

  pickDayHandler = event => {
    let pickedDay = event.target.value;
    alert(pickedDay);
    this.setState({
      pickedDay: pickedDay
    });
  };

  render() {
    let displayDailyTimeBudget = null;
    console.log(Object.keys(this.state.activityWeekCategories));
    let Monday = { ...this.state.dailyBudget.Monday };

    console.log(this.state.dailyBudget.Monday.work);

    displayDailyTimeBudget = Object.keys(
      this.state.activityWeekCategories
    ).map(eachCategory => (
      <DailyTimeBudget
        key={eachCategory.concat(eachCategory)}
        activity={eachCategory}
        hours={this.state.activityWeekCategories[eachCategory]}
        reduce={() => this.deductHourToActivity(eachCategory)}
        add={() => this.addHourToActivity(eachCategory)}
        pickedDay={this.state.pickedDay}
        dailyBudget={this.state.dailyBudget}
      />
    ));

    return (
      <React.Fragment>
        <div className="btn-group mb-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Monday"
            onClick={event => this.pickDayHandler(event)}
          >
            Monday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Tuesday"
            onClick={event => this.pickDayHandler(event)}
          >
            Tuesday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Wednesday"
            onClick={event => this.pickDayHandler(event)}
          >
            Wednesday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Thursday"
            onClick={event => this.pickDayHandler(event)}
          >
            Thursday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Friday"
            onClick={event => this.pickDayHandler(event)}
          >
            Friday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Saturday"
            onClick={event => this.pickDayHandler(event)}
          >
            Saturday
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            value="Sunday"
            onClick={event => this.pickDayHandler(event)}
          >
            Sunday
          </button>
        </div>

        <div className={classes.WeeklyTimeBudget}>{displayDailyTimeBudget}</div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default weeklyTimeBudget;
//
