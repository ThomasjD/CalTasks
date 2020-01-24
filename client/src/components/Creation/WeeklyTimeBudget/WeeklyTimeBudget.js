import React, { Component } from 'react';
import DailyTimeBudget from '../DailyTimeBudget/DailyTimeBudget';
//hygiene, traveling, packing,wating

//each day have a predetermined amt of time for each category
//then each day you can balance it according to 24 hours
//after balancing for each day, you have to go back to balance the weekly total

//24 hours a day //broken down into .5 hour
//
class weeklyTimeBudget extends Component {
  state = {
    totalWeekHours: 168,
    weeklyBudget: [
      { activity: 'sleep', totalHours: '' },
      { activity: 'exercise', totalHours: '' },
      { activity: 'work', totalHours: '' },
      { activity: 'free', totalHours: '' },
      { activity: 'errands', totalHours: '' },
      { activity: 'getReady', totalHours: '' }
    ]
  };

  // render() {
  //   return (
  //     <div className={classes.BuildControls}>
  //     {controls.map(ctrl => (
  //       <DailytimeBudget key={ctrl.activity} hours={ctrl.totalHours} />
  //     ))}
  //   </div>
  //   )
  // }
  // }

  render() {
    let thisWeek = new DailyTimeBudget();
    console.dir(thisWeek.hoursInDay);

    return (
      <div>
        {this.state.weeklyBudget.map(eachCategory => (
          <DailyTimeBudget
            key={eachCategory.activity}
            hours={eachCategory.totalHours}
          />
        ))}
      </div>
    );
  }
}

export default weeklyTimeBudget;

// Monday: {},
//   Tuesday: {},
//   Wednesday: {},
//   Thursday: {},
//   Friday: {},
//   Saturday: {},
//   Sunday: {},
