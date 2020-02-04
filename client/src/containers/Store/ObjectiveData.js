import React, { Component } from 'react';
import StoreDataContext from '../../context/StoreDataContext';

class ObjectiveData extends Component {
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
    this.firstTimeLoad = true;

    //create a seperate object that contains activityCategories
    this.timeBudgetDay = () => {
      //alert('inside Objective Data timeBudgetDay()');
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
  }

  state = {
    dataBaseName: 'obj',
    firstTimeData: true,
    dailyBudget: null,
    activityWeekCategories: null
  };
  dataForDisplay = () => {
    this.timeBudgetDay();
    this.setState(
      {
        dataLocation: 'new'
      },

      () => this.context.dataReceiverHandler(this.state)
    );
  };

  pickedDayHandler = () => {
    let pickedDay = this.context.dataRequestDetails.info;
    this.setState({ pickedDay: pickedDay }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };
  initialRun = () => {
    this.setState({
      dailyBudget: this.dailyBudget,
      activityWeekCategories: this.activityDayCategories,
      firstTimeData: !this.state.firstTimeData
    });
  };
  static contextType = StoreDataContext;
  render() {
    console.log(this.context.dataRequestDetails.handlerChoice);
    if (this.state.firstTimeData) {
      this.initialRun(this.timeBudgetDay());
    }

    if (
      !this.state.firstTimeData &&
      this.context.dataRequestDetails.typeOfData === 'obj'
    ) {
      //alert(this.context.dataRequestDetails.handlerChoice);

      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //show picked day timeBudget
          alert(
            `inside case 1 this.context.dataRequestDetails.handlerChoice: ${this.context.dataRequestDetails.handlerChoice}`
          );
          this.context.resetHandlerChoice(this.dataForDisplay());

          break;
        case '2': //show picked day timeBudget
          this.context.resetHandlerChoice(() => this.pickedDayHandler());

          break;
      }
    }
    return <div>Inside of ObjData </div>;
  }
}

export default ObjectiveData;
