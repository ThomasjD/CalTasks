import React, { Component } from 'react';
//import App from 'App'

class DataStructure extends Component {
  constructor(props) {
    super(props);
  }

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
    maxReact: [
      {id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      {id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {id: 'kjhck2', lesson: '92. Using useEffect() in Functional Components ', completion: false },
    ],
    Monday: [
      { id: 'morning', task: '' },
      { id: 'afternoon', task: 'eat lunch' },
      { id: 'evening', task: 'play ball' }
    ],
    Tuesday: [
      { id: 'morning', task: '' },
      { id: 'afternoon', task: '' },
      { id: 'evening', task: '' }
    ],
    showTasks: false,
    showTasksToday: false,
    showCockpit: true,
    showView: '0',
    students: [
      { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
      { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
      { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
    ]
  };

  // return (
  //   <App dataStructure: {this.state}/>)
}

export default DataStructure;
