//import React, { useState, useContext } from 'react';

const calendarObj = () => {
  let today = new Date();

  let findDay = '';
  switch (today.getDay()) {
    case 1:
      findDay = 'Monday';
      break;
    case 2:
      findDay = 'Tuesday';
      break;
    case 3:
      findDay = 'Wednesday';
      break;
    case 4:
      findDay = 'Thursday';
      break;
    case 5:
      findDay = 'Friday';
      break;
    case 6:
      findDay = 'Saturday';
      break;
    case 0:
      findDay = 'Sunday';
      break;
  }

  return findDay;
};

export default calendarObj;
