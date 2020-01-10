import React from 'react';

const tasksData = React.createContext({
  crunk: '',
  dataRequestHandler: () => {},
  tasksData: false,
  dataRequestDetails: '',
  dataReceiverHandler: () => {},
  resetHandlerChoice: () => {}
});

export default tasksData;
