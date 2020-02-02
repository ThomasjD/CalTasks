import React, { Component } from 'react';
import StoreDataContext from '../context/StoreDataContext';

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
  }

  state = {};
  dataForDisplay = () => {
    this.setState(
      {
        dataBudget: this.state.unAssignedTasksForWeek[0]
        // ,
        // dataLocation: this.context.dataRequestDetails.dataLocation
      },

      () => this.context.dataReceiverHandler(this.state)
    );
  };
  static contextType = StoreDataContext;
  render() {
    if (this.context.dataRequestDetails.typeOfData === 'obj') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //show picked day timeBudget
          this.context.dataReceiverHandler(this.state);

          break;
        case '2': //show picked day timeBudget
          break;
      }
    }
    return <div>Inside of ObjData </div>;
  }
}

export default ObjectiveData;
