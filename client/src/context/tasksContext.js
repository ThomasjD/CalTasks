import React from 'react';

const tasksData = React.createContext({
  crunk: '',
  dataRequestHandler: () => {},
  tasksData: '',
  dataRequestDetails: '',
  dataReceiverHandler: () => {},
  resetHandlerChoice: () => {}
});

export default tasksData;
