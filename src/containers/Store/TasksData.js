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
    word: 'red'
  };
  static contextType = TasksContext;

  lastTaskHeaderHandler = () => {
    switch (this.props.TasksHandlerChoice) {
      case '1':
        if (this.state.maxReact.length != 0) {
          this.setState(
            { lastLessonHeader: this.state.maxReact[0] },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        }

        break;
      case '6':
        if (this.state.maxReactWorkLeft.length != 0) {
          this.setState(
            {
              lastLessonHeader: this.state.maxReactWorkLeft[0]
            },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        } else {
          this.setState(
            { lastLessonHeader: this.state.lastLessonHeader },

            () => {
              this.props.receiveSyllabusDataHandler(this.state);
            }
          );
        }
        break;
    }
  };
  //dynamic edit task for Today (Monday)
  addTaskHandler = e => {
    console.log('hey I am in addTaskHandler');
    console.log(e.task);
    //need to fix this in newTask so that it automaticly picks up the default value of the radio button
    let location = !e.task.location ? (e.task.location = 'Popblado') : null;
    console.log(`target location is ${location}`);

    let newestEvent = [...this.state.tasks, e.task];
    //console.log(newestEvent[0].todo);

    this.setState({ tasks: newestEvent });
    //this.setState({ showEvents: true });
  };

  render() {
    //this.props.data(this.state.word);
    if (this.props.showData2 === true) {
      this.props.data(this.state.word);
      this.props.dataHandler2();
    }

    switch (this.props.tasksHandlerChoice) {
      case '1':
        this.lastTaskHeaderHandler();
        break;

      case '2':
        break;

      case '3':
        this.props.resetTasksHandlerChoice(
          this.deleteTaskFromAssignedTasksHandler(this.props.index)
        );
        break;

      case '4':
        let id = this.props.id;
        let newValue = this.props.value;
        this.props.resetTasksHandlerChoice(
          this.taskChangeHandler(newValue, id)
        );
        break;

      case '5':
        this.props.resetTasksHandlerChoice(
          this.assignTaskToDayHandler(this.props.index)
        );

        break;

      case '6':
        // leftOverLessonChangeHandler;
        this.lastTaskHeaderHandler()();
        this.setState(
          {
            showLeftOverTasksFromTotalTasks: true
          },
          this.props.resetTasksHandlerChoice(
            this.leftOverTasksChangeHandler(this.props.value, this.props.id)
          )
        );

        break;

      case '7':
        //let index = this.props.index;
        //this.addLessonFromOriginalSyllabusHandler(index);
        this.props.resetTasksHandlerChoice(
          this.addTaskFromTotalTasksSHandler(this.props.index)
        );

        break;
      case '8':
    }

    return (
      <React.Fragment>
        <p> inside of tasksdata</p>
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
