import React from 'react';

const tasksData = React.createContext({
  dataRequestHandler: () => {},
  tasksData: false,
  dataRequestDetails: '',
  dataReceiverHandler: () => {},
  resetHandlerChoice: () => {}
});

export default tasksData;
