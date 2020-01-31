import React, { Component } from 'react';
import DailyTimeBudget from '../DailyTimeBudget/DailyTimeBudget';
import DailyTimeBudget2 from '../../../containers/Store/ObjectiveData';
import classes from './WeeklyTimeBudget.module.css';
import StoreDataContext from '../../../context/StoreDataContext';
//import classes2 from '../DailyTimeBudget/DailyTimeBudget.module.css';

//each day have a predetermined amt of time for each category
//then each day you can balance it according to 24 hours
//after balancing for each day, you have to go back to balance the weekly total

//24 hours a day //broken down into .5 hour
//
class weeklyTimeBudget extends Component {
  constructor(props) {
    super(props);
    this.thisWeek = new DailyTimeBudget2();
    this.thisWeek.timeBudgetDay();
    this.state = {
      activityWeekCategories: this.thisWeek.activityWeekCategories,
      dailyBudget: this.thisWeek.dailyBudget,
      pickedDay: ''
    };
  }

  addHourToActivityPickedDay = activity => {
    let pickedDay = this.state.pickedDay;
    let allDaysTimeBudget = this.state.dailyBudget;
    let pickedDayDailyBudget = { ...this.state.dailyBudget[pickedDay] };

    let pickedDayCurrentTotalHourCount = pickedDayDailyBudget.totalHours;
    let pickedDayCurrentActivityHourCount = pickedDayDailyBudget[activity];

    //const [[activity], totalHours] = {...this.state.activityWeekCategories}
    let pickedDayUpdatedTotalHourCount = pickedDayCurrentTotalHourCount + 1;

    let pickedDayUpdatedActivityHourCount =
      pickedDayCurrentActivityHourCount + 1;
    pickedDayDailyBudget.totalHours = pickedDayUpdatedTotalHourCount;
    pickedDayDailyBudget[activity] = pickedDayUpdatedActivityHourCount;
    allDaysTimeBudget[pickedDay] = pickedDayDailyBudget;

    this.setState({ dailyBudget: allDaysTimeBudget });
    this.addHourToActivity(activity);
    //this.updatePurchaseState(updatedIngredients);
  };

  deductHourToActivityPickedDay = activity => {
    let pickedDay = this.state.pickedDay;
    let allDaysTimeBudget = this.state.dailyBudget;
    let pickedDayDailyBudget = { ...this.state.dailyBudget[pickedDay] };

    let pickedDayCurrentTotalHourCount = pickedDayDailyBudget.totalHours;
    let pickedDayCurrentActivityHourCount = pickedDayDailyBudget[activity];

    //const [[activity], totalHours] = {...this.state.activityWeekCategories}
    let pickedDayUpdatedTotalHourCount = pickedDayCurrentTotalHourCount - 1;

    let pickedDayUpdatedActivityHourCount =
      pickedDayCurrentActivityHourCount - 1;
    pickedDayDailyBudget.totalHours = pickedDayUpdatedTotalHourCount;
    pickedDayDailyBudget[activity] = pickedDayUpdatedActivityHourCount;
    allDaysTimeBudget[pickedDay] = pickedDayDailyBudget;

    this.setState({ dailyBudget: allDaysTimeBudget });
    this.deductHourToActivity(activity);
  };

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
    //this.deductHourToActivity(activity);
    //this.updatePurchaseState(updatedIngredients);
  };
  deductHourToActivity = activity => {
    let activityWeekCategories = { ...this.state.activityWeekCategories };
    let currentTotalHourCount = activityWeekCategories.totalHours;
    let currentActivityHourCount = activityWeekCategories[activity];

    //const [[activity], totalHours] = {...this.state.activityWeekCategories}
    let updatedTotalHourCount = currentTotalHourCount - 1;
    activityWeekCategories.totalHours = updatedTotalHourCount;
    let updatedActivityHourCount = currentActivityHourCount - 1;
    activityWeekCategories[activity] = updatedActivityHourCount;

    this.setState({ activityWeekCategories: activityWeekCategories });
  };

  pickDayHandler = event => {
    let pickedDay = event.target.value;
    //alert(pickedDay);
    this.setState({
      pickedDay: pickedDay
    });
    let contentViewObject = {
      target: {
        value: '12'
      }
    };

    this.context.contentViewHandler(contentViewObject);
  };
  static contextType = StoreDataContext;
  //disablled = when -hours for each category
  //when totalHours = for week is not balanced
  //need to balance each day first

  render() {
    let disabledDeductBtnWeek = { ...this.state.activityWeekCategories };

    for (let key in disabledDeductBtnWeek) {
      disabledDeductBtnWeek[key] = disabledDeductBtnWeek[key] <= 0;
    }

    let displayDailyTimeBudget = null;
    let pickedDay = this.state.pickedDay;
    displayDailyTimeBudget = Object.keys(this.state.activityWeekCategories).map(
      eachCategory => {
        let moreButtonDisabled = null;
        let lessButtonDisabled = null;

        if (this.state.activityWeekCategories.totalHours >= 168) {
          moreButtonDisabled = true;
        }
        if (this.state.activityWeekCategories[eachCategory] <= 0) {
          lessButtonDisabled = true;
        }
        let disabled24hr = null;
        let pickDayLess0hours = null;
        if (pickedDay) {
          if (this.state.dailyBudget[pickedDay].totalHours >= 24) {
            disabled24hr = true;
          }
          if (this.state.dailyBudget[pickedDay][eachCategory] <= 0) {
            pickDayLess0hours = true;
          }
        }
        return (
          <DailyTimeBudget
            key={eachCategory.concat(eachCategory)}
            activity={eachCategory}
            hours={this.state.activityWeekCategories[eachCategory]}
            reduce={() => this.deductHourToActivity(eachCategory)}
            add={() => this.addHourToActivity(eachCategory)}
            reducePickedDay={() =>
              this.deductHourToActivityPickedDay(eachCategory)
            }
            addPickedDay={() => this.addHourToActivityPickedDay(eachCategory)}
            pickedDay={this.state.pickedDay}
            dailyBudget={this.state.dailyBudget}
            //disabled24hr={disabled24hr}
            moreButtonDisabled={moreButtonDisabled}
            lessButtonDisabled={lessButtonDisabled}
            disabled24hr={disabled24hr}
            pickDayLess0hours={pickDayLess0hours}
          />
        );
      }
    );

    let displayPickedDay = null;

    if (this.state.pickedDay) {
      let pickedDayBudget = { ...this.state.dailyBudget };
      let foundDayBudget = { ...this.state.dailyBudget[pickedDay] };

      displayPickedDay = Object.keys(this.state.dailyBudget[pickedDay]).map(
        eachCategory => {
          let disabled24hr = null;
          let pickDayLess0hours = null;
          if (this.state.dailyBudget[pickedDay].totalHours >= 24) {
            disabled24hr = true;
          }
          if (this.state.dailyBudget[pickedDay][eachCategory] <= 0) {
            pickDayLess0hours = true;
          }

          return (
            <DailyTimeBudget
              key={eachCategory.concat(eachCategory)}
              activity={eachCategory}
              hours={foundDayBudget[eachCategory]}
              reducePickedDay={() =>
                this.deductHourToActivityPickedDay(eachCategory)
              }
              addPickedDay={() => this.addHourToActivityPickedDay(eachCategory)}
              pickedDay={this.state.pickedDay}
              dailyBudget={this.state.dailyBudget}
              disabled24hr={disabled24hr}
              pickDayLess0hours={pickDayLess0hours}
            />
          );
        }
      );
    }
    let PickDaysOfWeekTimeBudget = (
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Monday"
          onClick={event => this.pickDayHandler(event)}
        >
          Monday
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Tuesday"
          onClick={event => this.pickDayHandler(event)}
        >
          Tuesday
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Wednesday"
          onClick={event => this.pickDayHandler(event)}
        >
          Wednesday
        </button>

        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Thursday"
          onClick={event => this.pickDayHandler(event)}
        >
          Thursday
        </button>

        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Friday"
          onClick={event => this.pickDayHandler(event)}
        >
          Friday
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Saturday"
          onClick={event => this.pickDayHandler(event)}
        >
          Saturday
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2 dropdown-item"
          value="Sunday"
          onClick={event => this.pickDayHandler(event)}
        >
          Sunday
        </button>
      </div>
    );
    return (
      <React.Fragment>
        <label className="btn  dropdown m-2 active">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pick Day to edit Time Budget
          </button>

          {PickDaysOfWeekTimeBudget}
        </label>

        <div>
          <h3 className="">Time Budget for Week</h3>
          {displayDailyTimeBudget}
        </div>
      </React.Fragment>
    );
  }
}

export default weeklyTimeBudget;
//className={classes.WeeklyTimeBudget}
