import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
//import TasksContext from '../../context/tasksContext';
import calendarObj from '../../components/Calendar/calendarObj';
import numToDay from '../../components/Calendar/numToDay';
import StoreContext from '../../context/StoreDataContext';

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
    // Thursday: [
    //   {
    //     id: 'morning4',
    //     timeOfDay: 'morning',
    //     task: 'comprar comida',
    //     deadline: 'Jueves',
    //     category: 'Laureles',
    //     assignedTimeStart: '',
    //     assignedTimeStop: '',
    //     assignedDate: ''
    //   },
    //   {
    //     id: 'afternoon4',
    //     timeOfDay: 'afternoon',
    //     task: 'eat lunch',
    //     deadline: 'Jueves',
    //     category: 'Laureles',
    //     assignedTimeStart: '',
    //     assignedTimeStop: '',
    //     assignedDate: ''
    //   },
    //   {
    //     id: 'evening4',
    //     timeOfDay: 'evening',
    //     task: 'play ball',
    //     deadline: 'Jueves',
    //     category: 'Laureles',
    //     assignedTimeStart: '',
    //     assignedTimeStop: '',
    //     assignedDate: ''
    //   }
    // ],
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
  static contextType = StoreContext;
  lastTaskHeaderHandler = () => {
    switch (this.context.dataRequestDetails.handlerChoice) {
      case '1':
        if (this.state.unAssignedTasksForWeek.length != 0) {
          // alert(`Inside of lastTaskHeaderHandler if statement:`);
          this.setState(
            {
              lastTaskHeader: this.state.unAssignedTasksForWeek[0],
              dataLocation: this.context.dataRequestDetails.dataLocation
            },

            () => this.context.dataReceiverHandler(this.state)
          );
          // alert(`Inside of lastTaskHeaderHandler after setState :`);
        } else {
          //alert(`Inside of lastTaskHeaderHandler else statement:`);
          this.setState(
            {
              lastTaskHeader: this.state.lastTaskHeader,
              dataLocation: this.context.dataRequestDetails.dataLocation
            },

            () => this.context.dataReceiverHandler(this.state)
          );
        }

        break;

      case '2':
        //alert(`Inside of lastTaskHeaderHandler case 2 if statement:`);
        let today = this.context.dataRequestDetails.dataLocation;

        if (this.state[today].length != 0) {
          //alert(`Inside of lastTaskHeaderHandler case 2 if statement:`);
          this.setState(
            { TodayTasksHeader: this.state[today][0], dataLocation: today },

            () => this.context.dataReceiverHandler(this.state)
          );
        } else {
          // alert(`Inside of lastTaskHeaderHandler case 2 else statement:`);
          this.setState(
            { TodayTasksHeader: this.state.TodayTasksHeader },
            // () => console.log(this.state)
            () => this.context.dataReceiverHandler(this.state)
          );
        }
        // alert(
        //   `inside tasksData  TodayTasksHeader: ${this.state.TodayTasksHeader}`
        // );

        break;
      case '9':
        let pickedDay = this.context.dataRequestDetails.dataLocation;
        // alert(`inside case 9 pickedDay: ${pickedDay}`);
        // alert(
        //   `inside case 9 datalocation: ${this.state[pickedDay].eventTitle}`
        // );
        if (!this.state[pickedDay]) {
          let chair = this.state[pickedDay]; //[]
          // alert(pickedDay);
          // alert(
          //   `Inside of lastTaskHeaderHandler case 2 if statement: ${chair}`
          // );

          this.setState(
            {
              pickedDayTasksHeader: this.state.Friday[0],
              // pickedDayTasksHeader: this.state.Monday[0],
              dataLocation: this.context.dataRequestDetails.dataLocation
            },

            () => this.context.dataReceiverHandler(this.state)
          );
        } else {
          //alert(`Inside of lastTaskHeaderHandler else statement:`);
          this.setState(
            {
              pickedDayTasksHeader: this.state[pickedDay][0],
              dataLocation: this.context.dataRequestDetails.dataLocation
            },

            () => this.context.dataReceiverHandler(this.state)
          );
        }

        break;
      case '10':
        if (!this.state[pickedDay]) {
          //pickedDay = this.context.dataRequestDetails.dataLocation;
          alert(`inside case 10 pickedDay: ${pickedDay}`);
          this.setState(
            {
              pickedDayTasksHeader: this.state.Monday[0],
              dataLocation: this.context.dataRequestDetails.dataLocation
            },

            () => this.context.dataReceiverHandler(this.state)
          );
        }
        break;
    }
  };

  deleteTaskFromUnAssignedTasksForWeekHandler = taskIndex => {
    let currentUnassignedTasksForWeek = [...this.state.unAssignedTasksForWeek];

    currentUnassignedTasksForWeek.splice(taskIndex, 1);

    this.setState(
      {
        unAssignedTasksForWeek: currentUnassignedTasksForWeek,
        receivedData: 'YES',
        dataLocation: 'unAssignedTasksForWeek'
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
    //alert('Are you sure you want to delete this task?');
    this.setState({ reRenderTodayTasks: true });
    let dataLocation = this.context.dataRequestDetails.dataLocation;

    //get tasks array
    const todayTasks = [...this.state[dataLocation]];

    //splice task of interst
    todayTasks.splice(taskIndex, 1);

    //update new list of tasks to state
    this.setState({ [dataLocation]: todayTasks }, () =>
      this.context.dataReceiverHandler(this.state)
    );

    //this.setState({ showTasksCounter: false });
  };

  todayTaskChangeHandler = (newTaskValue, taskChangedId) => {
    //find the task that matches the taskChangedId
    let dataLocation = this.context.dataRequestDetails.dataLocation;

    const foundTaskIndex = this.state[dataLocation].findIndex(currentId => {
      return currentId.id === taskChangedId;
    });

    //create new task item that we will put into array
    const updatedTask = { ...this.state[dataLocation][foundTaskIndex] };

    updatedTask.task = newTaskValue;

    //pull out the states tasks array
    const todayTasks = [...this.state[dataLocation]];

    //update the task with id of interest w/ new task description
    todayTasks[foundTaskIndex] = updatedTask;

    //update the state
    //without the () =>() -> dataReceiver will not wait till things have been updated in state, it will exicute rightaway
    this.setState({ [dataLocation]: todayTasks }, () =>
      this.context.dataReceiverHandler(this.state)
    );
  };
  showHowBusyEverydayHandler = () => {
    let daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    let numTasksThisWeek = {};
    daysOfWeek.map(day => {
      let numberOfTaskForDay = 0;
      if (this.state[day]) {
        numberOfTaskForDay = this.state[day].length;
        // alert(numberOfTaskForDay);
      }
      let currentNumTasksThisWeek = {
        ...numTasksThisWeek,
        [day]: numberOfTaskForDay
      };

      numTasksThisWeek = currentNumTasksThisWeek;
    });

    this.setState(
      { numTasksThisWeek: numTasksThisWeek, showHowBusyWeek: true },
      () => this.context.dataReceiverHandler(this.state)
    );
  };

  //newTask
  newTaskHandler = () => {
    console.log('inside TasksData newTaskHandler');
    //need to fix this in newTask so that it automaticly picks up the default value of the radio button
    let newTask = { ...this.context.dataRequestDetails.value };

    let newTaskObj = { ...newTask };

    let day = numToDay(newTaskObj.startTimeDate.day);
    console.log(day);
    let currentDayTasks = this.state[day];
    console.log(currentDayTasks);
    let updatedDayTasks = currentDayTasks.push(newTaskObj);
    this.setState({ tasks: updatedDayTasks, dataLocation: day }, () =>
      this.context.dataReceiverHandler(this.state)
    );
    //this.setState({ showEvents: true });
  };

  newEventHandler = value => {
    let newEvent = this.context.dataRequestDetails.value;
    let startTimeDate = this.context.dataRequestDetails.value.startTimeDate;

    let assignTask = {
      id: newEvent.startTimeDate.dateObjectString,
      timeOfDay: startTimeDate.time,
      task: newEvent.eventTitle,
      note: newEvent.eventNote,
      deadline: newEvent.deadline,
      category: newEvent.eventCategory,
      assignedTimeStart: startTimeDate,
      assignedTimeStop: newEvent.finishTimeDate
    };

    //Thur blocked out
    let dataLocation = this.context.dataRequestDetails.dataLocation;

    // let availableObjects = Object.keys(this.state)

    if (!this.state[dataLocation]) {
      // object exists
      let addNewEventToNewDataLocation = [assignTask];

      this.setState(
        {
          [dataLocation]: addNewEventToNewDataLocation,
          pickedDayTasksHeader: assignTask,
          dataLocation: dataLocation
        },

        () => this.context.dataReceiverHandler(this.state)
      );
    } else {
      let addNewEventToExistingDataLocation = this.state[dataLocation][0];

      this.setState(
        {
          [dataLocation]: addNewEventToExistingDataLocation,
          pickedDayTasksHeader: assignTask,
          dataLocation: dataLocation
        },

        () => this.context.dataReceiverHandler(this.state)
      );
    }

    // //THE DAY OF THE WEEK
    // //let assignToDay = newEvent.startTimeDate.day;
    // let today = calendarObj();

    // let findDay = '';
    // switch (today) {
    //   case 1:
    //     findDay = 'Monday';
    //     break;
    //   case 2:
    //     findDay = 'Tuesday';
    //     break;
    //   case 3:
    //     findDay = 'Wednesday';
    //     break;
    //   case 4:
    //     findDay = 'Thursday';
    //     break;
    //   case 5:
    //     findDay = 'Friday';
    //     break;
    //   case 6:
    //     findDay = 'Saturday';
    //     break;
    //   case 0:
    //     findDay = 'Sunday';
    //     break;
    // }

    // let foundDay = this.state[today]; //array of objects on certain day
    // foundDay.push(assignTask);

    // this.setState({ [today]: foundDay }, () =>
    //   this.context.dataReceiverHandler(this.state)
    // );
    // if (this.state[this.context.dataRequestDetails.dataLocation]) {
    //   let pickedDay = this.context.dataRequestDetails.dataLocation;
    //   //alert(`inside case 9 pickedDay: ${pickedDay}`);
    //   // alert(
    //   //   `inside case 9 datalocation: ${this.state[pickedDay].eventTitle}`
    //   // );
    //   if (!this.state[pickedDay]) {
    //     //alert(`Inside of lastTaskHeaderHandler case 2 if statement:`);
    //     //alert('inside TasksData newEventHandler if statement');
    //     this.setState(
    //       {
    //         pickedDayTasksHeader: this.state[pickedDay][0],
    //         dataLocation: this.context.dataRequestDetails.dataLocation
    //       },

    //       () => this.context.dataReceiverHandler(this.state)
    //     );
    //   } else {
    //     //alert(`Inside of lastTaskHeaderHandler case 2 else statement:`);
    //     this.setState(
    //       {
    //         pickedDayTasksHeader: this.state[pickedDay][0],
    //         dataLocation: this.context.dataRequestDetails.dataLocation
    //       },

    //       () => this.context.dataReceiverHandler(this.state)
    //     );
    //   }
    // }
  };

  render() {
    //need to put back this.context.

    if (
      this.context.dataRequestDetails &&
      this.context.dataRequestDetails.typeOfData === 'events'
    ) {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //new Event
          // alert(
          //   `doogie inside TasksData events case 1 contentChoice: ${this.context.dataRequestDetails.handlerChoice}`
          // );

          this.context.resetHandlerChoice(
            this.newEventHandler(this.props.dataRequestDetails.value)
          );

          this.context.resetHandlerChoice(() =>
            this.lastTaskHeaderHandler(() =>
              this.newEventHandler(this.props.dataRequestDetails.value)
            )
          );

          // this.context.resetHandlerChoice(this.lastTaskHeaderHandler());

          break;
      }
    }

    //dataRequestDetails.typeOfData === 'events';
    if (this.context.dataRequestDetails.typeOfData === 'tasks') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //Unscheduled Tasks for Week
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());

          break;

        case '2': //Today's Tasks: TodayTasksHeader
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

        case '5': //Delete task on TodayTasks contentChoice = #2
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
        case '7': //for cockpit displaying icons for every task for each day of week
          this.context.resetHandlerChoice(this.showHowBusyEverydayHandler());

          break;
        case '8': //new Event
          break;
        case '9': //picked day
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());
          break;
        case '10': //picked day
          this.context.resetHandlerChoice(this.lastTaskHeaderHandler());
          break;
        case '11': //newTask
          console.log('inside TasksData case 11');
          this.context.resetHandlerChoice(this.newTaskHandler());
          //this.newTaskHandler();
          break;
      }
    }

    return <React.Fragment></React.Fragment>;
  }
}

export default TasksData;
