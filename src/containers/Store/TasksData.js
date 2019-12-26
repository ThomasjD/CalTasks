import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';
class TasksData extends Component {
  state = {
    dataBaseName: 'tasks',
    unAssignedTasksForWeek: [
      {
        id: 'qrwrwq',
        todo: 'Find work',
        deadline: 'Lunes',
        location: 'Poplado'
      },
      {
        id: 'egewhw',
        todo: 'buy shoes',
        deadline: 'Martes',
        location: 'Floresta'
      },
      {
        id: 'asfasv',
        todo: 'mail package',
        deadline: 'Jueves',
        location: 'Laureles'
      }
    ],
    Monday: [
      { id: 'morning1', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon1', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening1', timeOfDay: '', task: 'play ball' }
    ],
    Tuesday: [
      { id: 'morning2', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon2', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening2', timeOfDay: '', task: 'play ball' }
    ],
    Wednesday: [
      { id: 'morning3', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon3', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening3', timeOfDay: '', task: 'play ball' }
    ],
    Thursday: [
      { id: 'morning4', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon4', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening4', timeOfDay: '', task: 'play ball' }
    ],
    Friday: [
      { id: 'morning5', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon5', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening5', timeOfDay: '', task: 'play ball' }
    ],
    Saturday: [
      { id: 'morning6', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon6', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening6', timeOfDay: '', task: 'play ball' }
    ],
    Sunday: [
      { id: 'morning7', timeOfDay: '', task: 'comprar comida' },
      { id: 'afternoon7', timeOfDay: '', task: 'eat lunch' },
      { id: 'evening7', timeOfDay: '', task: 'play ball' }
    ],
    TodayTasksHeader: '',
    word: 'red',
    reRenderTasks: false
  };

  lastTaskHeaderHandler = () => {
    switch (this.context.dataRequestDetails.handlerChoice) {
      case '1':
        if (this.state.unAssignedTasksForWeek.length != 0) {
          //alert(`Inside of lastTaskHeaderHandler if statement:`);
          this.setState(
            { lastTaskHeader: this.state.unAssignedTasksForWeek[0] },

            () => this.context.dataReceiverHandler(this.state)
          );
        } else {
          //alert(`Inside of lastTaskHeaderHandler else statement:`);
          this.setState(
            { lastTaskHeader: this.state.lastTaskHeader },

            () => this.context.dataReceiverHandler(this.state)
          );
        }

        break;

      case '2':
        if (this.state.Monday.length != 0) {
          alert(`Inside of lastTaskHeaderHandler if statement:`);
          this.setState(
            { TodayTasksHeader: this.state.Monday[0] },

            () => this.context.dataReceiverHandler(this.state)
          );
        } else {
          alert(`Inside of lastTaskHeaderHandler else statement:`);
          this.setState(
            { TodayTasksHeader: this.state.TodayTasksHeader },

            () => this.context.dataReceiverHandler(this.state)
          );
        }

      case '6':
        // if (this.state.maxReactWorkLeft.length != 0) {
        //   this.setState(
        //     {
        //       lastLessonHeader: this.state.maxReactWorkLeft[0]
        //     },

        //     () => {
        //       this.props.receiveSyllabusDataHandler(this.state);
        //     }
        //   );
        // } else {
        //   this.setState(
        //     { lastLessonHeader: this.state.lastLessonHeader },

        //     () => {
        //       this.props.receiveSyllabusDataHandler(this.state);
        //     }
        //   );
        // }
        break;
    }
  };
  //dynamic edit task for Today (Monday)
  addTaskHandler = e => {
    console.log(e.task);
    //need to fix this in newTask so that it automaticly picks up the default value of the radio button
    let location = !e.task.location ? (e.task.location = 'Popblado') : null;
    console.log(`target location is ${location}`);

    let newestEvent = [...this.state.tasks, e.task];
    //console.log(newestEvent[0].todo);

    this.setState({ tasks: newestEvent });
    //this.setState({ showEvents: true });
  };

  deleteTaskFromUnAssignedTasksForWeekHandler = taskIndex => {
    //alert('Are you sure you want to delete this Task? Mate');

    let currentUnassignedTasksForWeek = [...this.state.unAssignedTasksForWeek];
    //alert('Are you sure you want to delete this Task? Mate2');
    currentUnassignedTasksForWeek.splice(taskIndex, 1);

    this.setState(
      {
        unAssignedTasksForWeek: currentUnassignedTasksForWeek,
        receivedData: 'YES'
      },
      () => this.context.dataReceiverHandler(this.state)
    );
  };

  changeTaskFromUnAssignedTasksForWeekHandler = (lessonValue, taskChangeId) => {
    //Find the index of the lessons that matches the id sent in
    const foundTaskIndex = this.state.unAssignedTasksForWeek.findIndex(
      currentId => {
        return currentId.id === taskChangeId;
      }
    );

    //createnew task item to put into array
    const updatedLessons = {
      ...this.state.unAssignedTasksForWeek[foundTaskIndex]
    };

    //using updated values to define the lesson of the particular pulled out lesson
    //updatedLessons.lesson = event.target.value;
    updatedLessons.todo = lessonValue;

    //pull out of states maxReact array
    const lessons = [...this.state.unAssignedTasksForWeek];

    //update the new lesson w/ ID of interest from the copy of MaxReact (lessons)
    lessons[foundTaskIndex] = updatedLessons;

    //final update of lessons
    this.setState({ unAssignedTasksForWeek: lessons }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };

  deleteTodayTaskhandler = taskIndex => {
    alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTodayTasks: true });

    //get tasks array
    const Monday = [...this.state.Monday];

    //splice task of interst
    Monday.splice(taskIndex, 1);

    //update new list of tasks to state
    this.setState({ Monday: Monday }, () =>
      this.context.dataReceiverHandler(this.state)
    );

    //this.setState({ showTasksCounter: false });
  };

  todayTaskChangeHandler = (newTaskValue, taskChangedId) => {
    //find the task that matches the taskChangedId
    const foundTaskId = this.state.Monday.findIndex(currentId => {
      return currentId.id === taskChangedId;
    });

    //create new task item that we will put into array
    const updatedTask = { ...this.state.Monday[foundTaskId] };

    updatedTask.task = newTaskValue;

    //pull out the states tasks array
    const Monday = [...this.state.Monday];

    //update the task with id of interest w/ new task description
    Monday[foundTaskId] = updatedTask;

    //update the state
    this.setState(
      { Monday: Monday },
      this.context.dataReceiverHandler(this.state)
    );
  };

  static contextType = TasksContext;

  render() {
    //this.props.data(this.state.word);
    let displayTasksContext = null;
    // if (this.context.dataRequestDetails == true) {
    //   console.log('Inside TasksData dataRequestDetails: ');
    // }
    // this.context.dataRequestDetails
    //   ? (displayTasksContext = <div> hello tasksData</div>)
    //   : null;
    if (this.context.dataRequestDetails.handlerChoice == true) {
      displayTasksContext = <div> hello tasksData</div>;
    }
    if (this.context.dataRequestDetails.typeOfData === 'tasks') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1':
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());
          break;

        case '2':
          alert('case 2 tasksdata');
          //TodayTasksHeader
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());
          break;

        case '3': //delete from contentChoice = #1
          this.context.resetHandlerChoice(
            this.deleteTaskFromUnAssignedTasksForWeekHandler(
              this.props.dataRequestDetails.index
            )
          );
          break;
        case '4': //change from contentChoice = #1
          this.context.resetHandlerChoice(
            this.changeTaskFromUnAssignedTasksForWeekHandler(
              this.props.dataRequestDetails.value,
              this.props.dataRequestDetails.id
            )
          );
          break;

        case '5':
          this.context.resetHandlerChoice(
            this.deleteTodayTaskhandler(this.props.dataRequestDetails.index)
          );

          break;
        case '6':
          this.context.resetHandlerChoice(
            this.todayTaskChangeHandler(
              this.props.dataRequestDetails.value,
              this.props.dataRequestDetails.id
            )
          );

          break;
      }
    }

    //   case '4':
    //     let id = this.props.id;
    //     let newValue = this.props.value;
    //     this.props.resetTasksHandlerChoice(
    //       this.taskChangeHandler(newValue, id)
    //     );
    //     break;

    //   case '6':
    //     // leftOverLessonChangeHandler;
    //     this.lastTaskHeaderHandler()();
    //     this.setState(
    //       {
    //         showLeftOverTasksFromTotalTasks: true
    //       },
    //       this.props.resetTasksHandlerChoice(
    //         this.leftOverTasksChangeHandler(this.props.value, this.props.id)
    //       )
    //     );

    //     break;

    //   case '7':
    //     //let index = this.props.index;
    //     //this.addLessonFromOriginalSyllabusHandler(index);
    //     this.props.resetTasksHandlerChoice(
    //       this.addTaskFromTotalTasksSHandler(this.props.index)
    //     );

    //     break;
    //   case '8':
    // }

    return (
      <React.Fragment>
        {this.context.dataRequestDetails['handlerChoice'] ? (
          <div>{this.context.dataRequestDetails.handlerChoice} </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default TasksData;

// <button onClick={event => this.props.data(event, this.state)}>
//   Click Me{' '}
// </button>

{
  /* <button onClick={e => this.dataHandler(e)}>
pussh me for the word
</button> */
}
