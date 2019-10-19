import React from 'react';

const newtaskContext = React.createContext({
  showNewTask: false,
  newTaskTitle: '',
  newTaskCategory: '',
  newTaskLocation: '',
  submit: ''
});

export default newtaskContext;
//margin: 10px auto;
