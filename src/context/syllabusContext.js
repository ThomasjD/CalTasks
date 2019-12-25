import React from 'react';

const syllabusContext = React.createContext({
  processSyllabusRequestHandler: () => {},
  processSyllabusRequestHandler2: () => {},
  syllabusHandlerChoice: '0',
  index: '1',
  id: '22',
  syllabusData: () => {},
  everythingSyllabus: ''
});

export default syllabusContext;
