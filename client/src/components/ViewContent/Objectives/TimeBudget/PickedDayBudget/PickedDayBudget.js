import React, { Component } from 'react';
import classes from './PickedDayBudget.module.css';
import StoreDataContext from '../../../../../context/StoreDataContext';
import PickedDayData from '../WeeklyTimeBudget';
import daily from './PickedDayBudget.module.css';
class PickedDayBudget extends Component {
  render() {
    let displayDailyTimeBudget = null;

    let dataBudget = this.context.dataBudget;

    let dataBudget1 = { ...dataBudget };
    let dataBudget2 = dataBudget1.dataBudget;
    let dataBudget3 = { ...dataBudget2 };
    let pickedDay = dataBudget3.pickedDay;
    console.log(JSON.stringify(this.context.dataBudget));
    let dailyBudgetObj = dataBudget3.dailyBudget;
    let activityWeekCategoriesObj = dataBudget3.activityWeekCategories;

    let dailyBudget = { ...dailyBudgetObj };
    let activityWeekCategories = { ...activityWeekCategoriesObj };

    let disabledDeductBtnWeek = { ...activityWeekCategories };

    for (let key in disabledDeductBtnWeek) {
      disabledDeductBtnWeek[key] = disabledDeductBtnWeek[key] <= 0;
    }

    displayDailyTimeBudget = Object.keys(activityWeekCategories).map(
      eachCategory => {
        let moreButtonDisabled = null;
        let lessButtonDisabled = null;

        if (activityWeekCategories.totalHours >= 168) {
          // alert(activityWeekCategories.totalHours);
          moreButtonDisabled = true;
        }
        if (activityWeekCategories[eachCategory] <= 0) {
          lessButtonDisabled = true;
        }
        let disabled24hr = null;
        let pickDayLess0hours = null;

        if (this.context.dataBudget.pickedDay) {
          let pickedDay = this.context.dataBudget.pickedDay;
          if (dailyBudget[pickedDay].totalHours >= 24) {
            disabled24hr = true;
          }
          if (dailyBudget[pickedDay][eachCategory] <= 0) {
            pickDayLess0hours = true;
          }
        }
        return (
          <React.Fragment key={eachCategory.concat('word')}>
            <div className={daily.DailyTimeBudget}>
              <div className={daily.DailyTimeBudget}>
                <div className={daily.Activity}>
                  {eachCategory.toUpperCase()}
                </div>
                <div className={daily.ActivityHours}>
                  {activityWeekCategories[eachCategory]}
                </div>

                <button
                  className={daily.Less}
                  onClick={event =>
                    this.requestDataHandler(event, eachCategory)
                  }
                  value="2"
                  disabled={lessButtonDisabled}
                >
                  Less
                </button>

                <button
                  className={daily.More}
                  onClick={event =>
                    this.requestDataHandler(event, eachCategory)
                  }
                  // disabled={this.props.moreButtonDisabled}
                  value="3"
                  disabled={moreButtonDisabled}
                >
                  More
                </button>
              </div>
              {/* <div>{displayPickedDay}</div> */}
            </div>
          </React.Fragment>
        );
      }
    );
    return <div>insidePickedDay}</div>;

    // <div className={classes.DailyTimeBudget}>
    //   <div className={classes.DailyTimeBudget}>
    //     <div className={classes.Activity}>
    //       {this.props.activity.toUpperCase()}
    //     </div>
    //     <div className={classes.ActivityHours}>{this.props.hours}</div>

    //     <button
    //       className={classes.Less}
    //       onClick={this.props.reduce}
    //       disabled={this.props.lessButtonDisabled}
    //     >
    //       Less
    //     </button>

    //     <button
    //       className={classes.More}
    //       onClick={this.props.add}
    //       // disabled={this.props.moreButtonDisabled}

    //       disabled={this.props.moreButtonDisabled}
    //     >
    //       More
    //     </button>
    //   </div>
    //   <div>{displayPickedDay}</div>
    // </div>
  }
}
export default PickedDayBudget;
