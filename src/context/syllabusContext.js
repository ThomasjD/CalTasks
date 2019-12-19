import React from 'react';

const syllabusContext = React.createContext({
  processSyllabusRequestHandler: () => {},
  syllabusHandlerChoice: '0',
  index: '1',
  id: '22',
  syllabusData: () => {}
});

export default syllabusContext;
