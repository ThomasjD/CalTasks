import { parseWithOptions } from 'date-fns/fp';
//import React, { Component } from 'react';
import classes from '../DailyTimeBudget.module.css';
import React, { useState, useContext } from 'react';

//class DailyTimeBudget extends Component {

const pickedDayTimeBudget = props => {
  // const TimeBudgetPickedDay = () => {
  //   let pickedDay = this.props.pickedDay;
  //   let dailyBudget = this.props.dailyBudget;
  //   let foundDayBudget = dailyBudget[pickedDay];
  //   // for (keys in foundDayBudget){

  //   //   return
  // };

  // render();
  // {
  let pickedDay = props.pickedDay;
  console.log(`inside PickedDayTimeBudget pickedDay: ${pickedDay}`);

  let dailyBudget = { ...props.dailyBudget };
  let foundDayBudget = dailyBudget[pickedDay];
  // let Monday = { ...this.dailyBudget };
  // console.dir(Monday['Monday']);
  // let workMonday = { ...this.dailyBudget.Monday };
  // let workWork = { ...workMonday };
  console.log(`activity: ${props.activity}`);
  console.log(`hours: ${props.hours}`);
  return (
    <div className={classes.DailyTimeBudget}>
      <h3>Time Budget for {pickedDay}</h3>
      <div className={classes.Activity}>{props.activity.toUpperCase()}</div>

      <div className={classes.Activity}>{props.hours}</div>

      <button className={classes.Less} onClick={props.decrease}>
        Less
      </button>
      <button className={classes.More} onClick={props.add}>
        More
      </button>
    </div>
  );
  // }
};

export default pickedDayTimeBudget;
