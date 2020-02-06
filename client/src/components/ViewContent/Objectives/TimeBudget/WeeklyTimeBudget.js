import React, { Component } from 'react';
import classes from './WeeklyTimeBudget.module.css';
import StoreDataContext from '../../../../context/StoreDataContext';

import ObjectiveData from '../../../../containers/Store/ObjectiveData';
import PickedDayBudget from './PickedDayBudget/PickedDayBudget';
import weekClass from './WeeklyTimeBudget.module.css';
//import classes2 from '../DailyTimeBudget/DailyTimeBudget.module.css';

class WeeklyTimeBudget extends Component {
  constructor(props) {
    super(props);

    this.thisWeek = new ObjectiveData();
    this.thisWeek.timeBudgetDay();
    // this.state = {
    //   activityWeekCategories: '',
    //   dailyBudget: '',
    //   pickedDay: '',
    //   word: 'chicken3'
    // };

    this.state = {
      word: 'chicken4',
      activityWeekCategories: this.thisWeek.activityWeekCategories,
      dailyBudget: this.thisWeek.dailyBudget,
      pickedDay: ''
    };

    this.initialDataRequest = () => {
      let dataRequestMessage = {
        typeOfData: 'obj',
        handlerChoice: '1',
        dataLocation: '',
        infoType: '',
        info: ''
      };
      this.context.dataRequestHandler(dataRequestMessage);
    };
  }
  state = {
    word: 'chicken5'
  };

  pickDayHandler = event => {
    let pickedDay = event.target.value;

    let dataRequestMessage = {
      typeOfData: 'obj',
      handlerChoice: '4',
      dataLocation: '',
      infoType: 'pickedDay',
      info: pickedDay
    };
    this.context.dataRequestHandler(event, dataRequestMessage);

    let contentViewObject = {
      target: {
        value: '12'
      }
    };
    this.context.contentViewHandler(contentViewObject);
  };

  initialState = () => {
    let dataBudget = this.context.dataBudget.dailyBudget;
    let activityWeekCategories = this.context.dataBudget.activityWeekCategories;

    this.setState({
      dataBudget: dataBudget,
      activityWeekCategories: activityWeekCategories,
      word: 'chicken'
    });
  };

  requestDataHandler = (event, eachCategory) => {
    let handlerChoice = event.target.value;
    let dataRequestMessage = {
      typeOfData: 'obj',
      handlerChoice: handlerChoice,
      dataLocation: '',
      infoType: '',
      info: eachCategory
    };

    this.context.dataRequestHandler(event, dataRequestMessage);
  };

  static contextType = StoreDataContext;
  render() {
    //Display Week Data
    let displayDailyTimeBudget = null;

    if (this.context.dataBudget && this.context.dataBudget.dataBudget) {
      let dataBudget = this.context.dataBudget;

      let dataBudget1 = { ...dataBudget };
      let dataBudget2 = dataBudget1.dataBudget;
      let dataBudget3 = { ...dataBudget2 };

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

          return (
            <React.Fragment key={eachCategory.concat('word')}>
              <div className={weekClass.WeeklyTimeBudget}>
                <div className={weekClass.DailyTimeBudget}>
                  <div className={weekClass.Activity}>
                    {eachCategory.toUpperCase()}
                  </div>
                  <div className={weekClass.ActivityHours}>
                    {activityWeekCategories[eachCategory]}
                  </div>

                  <button
                    className={weekClass.Less}
                    onClick={event =>
                      this.requestDataHandler(event, eachCategory)
                    }
                    value="2"
                    disabled={lessButtonDisabled}
                  >
                    Less
                  </button>

                  <button
                    className={weekClass.More}
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
        <label className="btn  dropdown m-1 active">
          <h3 className="">Time Budget for Week</h3>

          {PickDaysOfWeekTimeBudget}
        </label>

        <div>{displayDailyTimeBudget}</div>
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
      </React.Fragment>
    );
  }
}

export default WeeklyTimeBudget;
