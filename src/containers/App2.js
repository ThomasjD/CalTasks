//dynamic edit task
todayTaskChangeHandler = (event, taskChangedId) => {
  //find the task that matches the taskChangedId
  const foundTaskId = this.state.Monday.findIndex(currentId => {
    return currentId.id === taskChangedId;
  });

  //create new task item that we will put into array
  const updatedTask = { ...this.state.Monday[foundTaskId] };

  updatedTask.todo = event.target.value;

  //pull out the states tasks array
  const Monday = [...this.state.Monday];

  //update the task with id of interest w/ new task description
  Monday[foundTaskId] = updatedTask;

  //update the state
  this.setState({ Monday: Monday });
};
