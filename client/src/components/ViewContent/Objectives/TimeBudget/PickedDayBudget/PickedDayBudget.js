import React, { Component } from 'react';
//import classes from './PickedDayBudget.module.css';
import StoreDataContext from '../../../../../context/StoreDataContext';
//import PickedDayData from '../WeeklyTimeBudget';
import daily from './PickedDayBudget.module.css';
import WeeklyTimeBudgetClass from '../WeeklyTimeBudget.module.css';
class PickedDayBudget extends Component {
  static contextType = StoreDataContext;

  requestDataHandler = (event, eachCategory) => {
    let handlerChoice = event.target.value;
    let dataRequestMessage = {
      typeOfData: 'obj',
      handlerChoice: handlerChoice,
      dataLocation: '',
      infoType: '',
      info: eachCategory
    };
    // switch (handlerchoice) {
    //   case '1':
    //     dataRequestMessage.handlerChoice = handlerChoice;
    //     break;
    //   case '2':
    //     break;
    // }

    // alert(
    //   `dataRequestMessage.handlerchoice ${dataRequestMessage.handleChoice}`
    // );
    this.context.dataRequestHandler(event, dataRequestMessage);
  };
  render() {
    let displayDailyTimeBudget = null;

    let dataBudget = this.context.dataBudget;

    let dataBudget1 = { ...dataBudget };
    let dataBudget2 = dataBudget1.dataBudget;
    let dataBudget3 = { ...dataBudget2 };
    let pickedDay = dataBudget3.pickedDay;

    // if (this.context.dataBudget && this.context.dataBudget.dataBudget) {
    //   console.log(JSON.stringify(pickedDay));
    // }
    //console.log(JSON.stringify(dataBudget3));
    let dailyBudgetObj = dataBudget3.dailyBudget;
    //console.log(JSON.stringify(dailyBudgetObj));
    let dailyBudgetObjExt = { ...dailyBudgetObj };
    //console.log(JSON.stringify(dailyBudgetObjExt[pickedDay]));

    let pickedDayObj = dailyBudgetObjExt[pickedDay];
    console.log(JSON.stringify(pickedDayObj));
    //let pickedDayObjext = { ...pickedDayObj };

    //console.log(JSON.stringify(dailyBudgetObj));

    // let activityWeekCategoriesObj = dataBudget3.activityWeekCategories;

    // let dailyBudget = { ...dailyBudgetObj };

    // let activityWeekCategories = { ...activityWeekCategoriesObj };

    let disabledDeductBtnWeek = { ...pickedDayObj };

    for (let key in disabledDeductBtnWeek) {
      disabledDeductBtnWeek[key] = disabledDeductBtnWeek[key] <= 0;
    }

    console.log(Object.keys(pickedDayObj));

    displayDailyTimeBudget = Object.keys(pickedDayObj).map(eachCategory => {
      let moreButtonDisabled = null;
      let lessButtonDisabled = null;

      // if (pickedDayObj.totalHours >= 168) {
      //   // alert(activityWeekCategories.totalHours);
      //   moreButtonDisabled = true;
      // }
      // if (pickedDayObj[eachCategory] <= 0) {
      //   lessButtonDisabled = true;
      // }
      let disabled24hr = null;
      let pickDayLess0hours = null;

      if (pickedDayObj.totalHours >= 24) {
        disabled24hr = true;
      }
      if (pickedDayObj[eachCategory] <= 0) {
        pickDayLess0hours = true;
      }

      return (
        <React.Fragment key={eachCategory.concat('word')}>
          <div className={daily.WeeklyTimeBudget}>
            <div className={daily.DailyTimeBudget}>
              <div className={daily.Activity}>{eachCategory.toUpperCase()}</div>
              <div className={daily.ActivityHours}>
                {pickedDayObj[eachCategory]}
              </div>

              <button
                className={daily.Less}
                onClick={event => this.requestDataHandler(event, eachCategory)}
                value="5"
                disabled={pickDayLess0hours}
              >
                Less
              </button>

              <button
                className={daily.More}
                onClick={event => this.requestDataHandler(event, eachCategory)}
                // disabled={this.props.moreButtonDisabled}
                value="6"
                disabled={disabled24hr}
              >
                More
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <h3 className={WeeklyTimeBudgetClass.WeeklyTimeBudget}>
          Time Budget for {pickedDay}
        </h3>
        {/* <div className={WeeklyTimeBudgetClass.WeeklyTimeBudget}>
          
        </div> */}
        {displayDailyTimeBudget}
      </React.Fragment>
    );
    //return <div>inside PickedDayBudget</div>;
  }
}
export default PickedDayBudget;
