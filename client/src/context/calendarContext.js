import React from 'react';

const calendarContext = React.createContext({
  calendarHandlerChoice: '0',
  calendarData: () => {},
  everythingSyllabus: '',
  dataRequestDetails: ''
});

export default calendarContext;
