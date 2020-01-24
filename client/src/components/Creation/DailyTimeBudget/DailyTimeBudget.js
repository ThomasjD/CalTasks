import { parseWithOptions } from 'date-fns/fp';
import React, { Component } from 'react';
/*let maxReact2 = new Syllabus(
      'maxReact2',
      'maxReact22222',
      '11asfd',
      'Use this in fusfsasgnctions',
      '11.Read allasf about this'
    );
*/

//import React, {useState, useContext} from 'react'
class DailyTimeBudget extends Component {
  constructor(props) {
    super();
    this.hoursInWeek = 168;
    this.hoursInDay = 24;
    this.weeklyTotal = {
      sleep: 7,
      exercise: 7,
      work: 49,
      relaxation: 7,
      errands: 14,
      getReady: 28
    };
    this.Monday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Tuesday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Wednesday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Thursday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Friday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Saturday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
    this.Sunday = {
      sleep: 7,
      exercise: 1,
      work: 9,
      relaxation: 1,
      errands: 2,
      getReady: 4
    };
  }

  // state = {
  //   hoursInWeek: 168,
  //   hoursInDay: 24,
  //   weeklyTotal: {sleep: 7,
  //     exercise: 7,
  //     work: 49,
  //     relaxation: 7,
  //     errands: 14,
  //     getReady: 28},
  //   Monday:
  //     {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Tuesday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Wednesday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Thursday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Friday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Saturday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4},
  //   Sunday: {sleep: 7,
  //     exercise: 1,
  //     work: 9,
  //     relaxation: 1,
  //     errands: 2,
  //     getReady: 4}
  // }
  render() {
    return (
      <div>
        <p>inside of DailyTimeBudget</p>
      </div>
    );
  }
}

export default DailyTimeBudget;
