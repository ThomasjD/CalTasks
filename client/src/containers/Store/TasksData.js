import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksContext from '../../context/tasksContext';
class TasksData extends Component {
  state = {
    dataBaseName: 'tasks',
    showHowBusyWeeek: false,

    //NewEvent
    assignedTimeStart: '', //14:00:00 GMT-0500 (Colombia Standard Time)
    assignedTimeStop: '', //00:00 - 24:00, string
    assignedDateStart: '', //Thu Jan 16 2020
    assignedDateStop: '',
    //optional
    eventDuration: '', //
    blockOffTimeSlot: '', //T-F  when event will take on time slot for scheduled day

    unAssignedTasksForWeek: [
      {
        id: 'qrwrwq',
        scheduleTask: null,
        task: 'Find work',

        deadline: 'Lunes',
        category: 'workout',

        source: ''
        //Syllabus/syllabusId/syllabusTitle
      },
      {
        id: 'egewhw',
        scheduleTask: null,
        task: 'buy shoes',
        deadline: 'Martes',
        category: 'programing',
        source: ''
      },
      {
        id: 'asfasv',
        scheduleTask: null,
        task: 'mail package',
        deadline: 'Jueves',
        category: 'study',
        source: ''
      }
    ],
    Monday: [
      {
        id: 'morning1',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'programing',
        source: '',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon1',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'workout'
      },
      {
        id: 'evening1',
        timeOfDay: 'evening',
        task: 'play ball',
        deadline: 'Jueves',
        category: 'errands',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      }
    ],
    Tuesday: [
      {
        id: 'morning2',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'errands',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      }
      // {
      //   id: 'afternoon2',
      //   timeOfDay: 'afternoon',
      //   task: 'eat lunch',
      //   deadline: 'Jueves',
      //   category: 'Laureles',
      //   assignedTimeStart: '',
      //   assignedTimeStop: '',
      //   assignedDate: ''
      // },
      // {
      //   id: 'evening2',
      //   timeOfDay: 'evening',
      //   task: 'play ball',
      //   deadline: 'Jueves',
      //   category: 'Laureles'
      // }
    ],
    Wednesday: [
      {
        id: 'morning3',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon3',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'evening3',
        timeOfDay: '',
        task: 'play ball',
        deadline: 'Jueves',
        category: 'Laureles'
      }
    ],
    Thursday: [
      {
        id: 'morning4',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon4',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      }
      // {
      //   id: 'evening4',
      //   timeOfDay: 'evening',
      //   task: 'play ball',
      //   deadline: 'Jueves',
      //   category: 'Laureles',
      //   assignedTimeStart: '',
      //   assignedTimeStop: '',
      //   assignedDate: ''
      // }
    ],
    Friday: [
      {
        id: 'morning5',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon5',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'evening5',
        timeOfDay: 'evening',
        task: 'play ball',
        deadline: 'Jueves',
        category: 'Laureles'
      }
    ],
    Saturday: [
      {
        id: 'morning6',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon6',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'evening6',
        timeOfDay: 'evening',
        task: 'play ball',
        deadline: 'Jueves',
        category: 'Laureles'
      }
    ],
    Sunday: [
      {
        id: 'morning7',
        timeOfDay: 'morning',
        task: 'comprar comida',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      },
      {
        id: 'afternoon7',
        timeOfDay: 'afternoon',
        task: 'eat lunch',
        deadline: 'Jueves',
        category: 'Laureles',
        assignedTimeStart: '',
        assignedTimeStop: '',
        assignedDate: ''
      }
      // {
      //   id: 'evening7',
      //   timeOfDay: 'evening',
      //   task: 'play ball',
      //   deadline: 'Jueves',
      //   category: 'Laureles',
      //   assignedTimeStart: '',
      //   assignedTimeStop: '',
      //   assignedDate: ''
      // }
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
          //alert(`Inside of lastTaskHeaderHandler case 2 if statement:`);
          this.setState(
            { TodayTasksHeader: this.state.Monday[0] },

            () => this.context.dataReceiverHandler(this.state)
          );
        } else {
          alert(`Inside of lastTaskHeaderHandler case 2 else statement:`);
          this.setState(
            { TodayTasksHeader: this.state.TodayTasksHeader },

            () => this.context.dataReceiverHandler(this.state)
          );
        }
    }
  };
  //dynamic edit task for Today (Monday)
  addTaskHandler = e => {
    console.log(e.task);
    //need to fix this in newTask so that it automaticly picks up the default value of the radio button
    let category = !e.task.category ? (e.task.category = 'Popblado') : null;
    console.log(`target category is ${category}`);

    let newestEvent = [...this.state.tasks, e.task];

    this.setState({ tasks: newestEvent });
    //this.setState({ showEvents: true });
  };

  deleteTaskFromUnAssignedTasksForWeekHandler = taskIndex => {
    let currentUnassignedTasksForWeek = [...this.state.unAssignedTasksForWeek];

    currentUnassignedTasksForWeek.splice(taskIndex, 1);

    this.setState(
      {
        unAssignedTasksForWeek: currentUnassignedTasksForWeek,
        receivedData: 'YES'
      },
      () => this.context.dataReceiverHandler(this.state)
    );
  };

  changeTaskFromUnAssignedTasksForWeekHandler = (taskValue, taskChangeId) => {
    //Find the index of the lessons that matches the id sent in
    const foundTaskIndex = this.state.unAssignedTasksForWeek.findIndex(
      currentId => {
        return currentId.id === taskChangeId;
      }
    );

    //createnew task item to put into array
    const updatedTasks = {
      ...this.state.unAssignedTasksForWeek[foundTaskIndex]
    };

    //using updated values to define the task of the particular pulled out task
    //updatedTasks.lesson = event.target.value;
    updatedTasks.task = taskValue;

    //pull out of states maxReact array
    const unAssignedTasksForWeek = [...this.state.unAssignedTasksForWeek];

    //update the new lesson w/ ID of interest from the copy of MaxReact (unAssignedTasksForWeek)
    unAssignedTasksForWeek[foundTaskIndex] = updatedTasks;

    //final update of unAssignedTasksForWeek
    this.setState({ unAssignedTasksForWeek: unAssignedTasksForWeek }, () =>
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
    const foundTaskIndex = this.state.Monday.findIndex(currentId => {
      return currentId.id === taskChangedId;
    });

    //create new task item that we will put into array
    const updatedTask = { ...this.state.Monday[foundTaskIndex] };

    updatedTask.task = newTaskValue;

    //pull out the states tasks array
    const Monday = [...this.state.Monday];

    //update the task with id of interest w/ new task description
    Monday[foundTaskIndex] = updatedTask;

    //update the state
    //without the () =>() -> dataReceiver will not wait till things have been updated in state, it will exicute rightaway
    this.setState({ Monday: Monday }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };
  showHowBusyEverydayHandler = () => {
    let numTasksThisWeek = {
      Monday: this.state.Monday.length,
      Tuesday: this.state.Tuesday.length,
      Wednesday: this.state.Wednesday.length,
      Thursday: this.state.Thursday.length,
      Friday: this.state.Friday.length,
      Saturday: this.state.Saturday.length,
      Sunday: this.state.Sunday.length
    }; //alert(this.state.numTasksThisWeek.Monday)

    this.setState(
      { numTasksThisWeek: numTasksThisWeek, showHowBusyWeek: true },
      () => this.context.dataReceiverHandler(this.state)
    );
  };

  newEventHandler = value => {
    alert(`inside newEventHandler ${this.context.dataRequestDetails}`);
    let newEvent = this.context.dataRequestDetails.value;
    let assignTask = {
      id: newEvent.startTimeDate.dateObjectString,
      timeOfDay: newEvent.startTimeDate.time,
      task: newEvent.eventTitle,
      deadline: newEvent,
      category: newEvent.eventCategory,
      assignedTimeStart: newEvent.startTimeDate.toLocaleTimeString,
      assignedTimeStop: newEvent.startTimeDate.toLocaleTimeString,
      assignedDate: newEvent.startTimeDate.toLocalDateString
    };
    alert(`assignTask.task ${assignTask.task}`);
    //THE DAY OF THE WEEK
    let assignToDay = newEvent.startTimeDate.day;
    alert(`assignToDay: ${assignToDay}`);
    let findDay = '';
    switch (assignToDay) {
      case 1:
        findDay = 'Monday';
        break;
      case 2:
        findDay = 'Tuesday';
        break;
      case 3:
        findDay = 'Wednesday';
        break;
      case 4:
        findDay = 'Thursday';
        break;
      case 5:
        findDay = 'Friday';
        break;
      case 6:
        findDay = 'Saturday';
        break;
      case 0:
        findDay = 'Sunday';
        break;
    }
    alert(`findDay: ${findDay}`);
    let foundDay = this.state[findDay]; //array of objects on certain day
    foundDay.push(assignTask);
    this.setState({ [findDay]: foundDay }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };

  static contextType = TasksContext;

  render() {
    if (this.context.dataRequestDetails.typeOfData === 'tasks' || 'events') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1':
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());
          break;

        case '2':
          //alert('case 2 tasksdata');
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

        case '5': //Changes on TodayTasks contentChoice = #2
          this.context.resetHandlerChoice(
            this.deleteTodayTaskhandler(this.props.dataRequestDetails.index)
          );

          break;
        case '6': //Changes on TodayTasks contentChoice = #2
          this.context.resetHandlerChoice(
            this.todayTaskChangeHandler(
              this.props.dataRequestDetails.value,
              this.props.dataRequestDetails.id
            )
          );

          break;
        case '7':
          this.context.resetHandlerChoice(this.showHowBusyEverydayHandler());

          break;
        case '8': //new Event
          //alert('inside case 8');
          //this.newEventHandler();
          this.context.resetHandlerChoice(
            this.newEventHandler(this.props.dataRequestDetails.value)
          );

          break;
      }
    } else {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '8': //new Event
          alert('inside case 8');

          this.context.resetHandlerChoice(
            this.newEventHandler(this.props.dataRequestDetails.value)
          );

          break;
      }
    }

    return <React.Fragment></React.Fragment>;
  }
}

export default TasksData;
// {this.context.dataRequestDetails['handlerChoice'] ? (
//   <div>{this.context.dataRequestDetails.handlerChoice} </div>
// ) : null}
