import React from 'react';

const storeData = React.createContext({
  //all dataBases
  dataRequestHandler: () => {},
  dataRequestDetails: '',
  dataReceiverHandler: () => {},
  resetHandlerChoice: () => {},
  storeData: '',

  //calendarData
  everythingCalendar: '',

  //syllabusData
  syllabusData: () => {},
  everythingSyllabus: '',

  //tasksData
  tasksData: '',
  newDataHandler: () => {},
  showLeftOverTasksForWeek: ''

  //UI
});

export default storeData;
