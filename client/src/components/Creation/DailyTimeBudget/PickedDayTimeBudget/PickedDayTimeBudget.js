import { parseWithOptions } from 'date-fns/fp';
//import React, { Component } from 'react';
import classes from '../DailyTimeBudget.module.css';
import React, { useState, useContext } from 'react';

//class DailyTimeBudget extends Component {

const pickedDayTimeBudget = () => {
  // const TimeBudgetPickedDay = () => {
  //   let pickedDay = this.props.pickedDay;
  //   let dailyBudget = this.props.dailyBudget;
  //   let foundDayBudget = dailyBudget[pickedDay];
  //   // for (keys in foundDayBudget){

  //   //   return
  // };

  // render();
  // {
  let pickedDay = this.props.pickedDay;
  let dailyBudget = this.props.dailyBudget;
  let foundDayBudget = dailyBudget[pickedDay];
  // let Monday = { ...this.dailyBudget };
  // console.dir(Monday['Monday']);
  // let workMonday = { ...this.dailyBudget.Monday };
  // let workWork = { ...workMonday };
  console.log(`activity: ${this.props.activity}`);
  console.log(`hours: ${this.props.hours}`);
  return (
    <div className={classes.DailyTimeBudget}>
      <div className={classes.Activity}>
        {this.props.activity.toUpperCase()}
      </div>

      <div className={classes.Activity}>{this.props.hours}</div>

      <button className={classes.Less} onClick={this.props.decrease}>
        Less
      </button>
      <button className={classes.More} onClick={this.props.add}>
        More
      </button>
    </div>
  );
  // }
};

export default pickedDayTimeBudget;
