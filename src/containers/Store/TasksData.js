import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';

class TasksData extends Component {
  state = {
    tasks: [
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
    word: 'blue'
  };
  //<RightCockpit></RightCockpit>

  render() {
    return (
      <React.Fragment>
        <p> inside of tasksdata</p>
        <button onClick={event => this.props.data(event, this.state.word)}>
          Click Me{' '}
        </button>
      </React.Fragment>
    );
  }
}

export default TasksData;
