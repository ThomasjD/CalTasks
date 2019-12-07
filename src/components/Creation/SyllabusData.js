import React, { Component } from 'react';
import ShowAllTasksAfterAddingTask from '../../context/newTask-context';
import RightCockpit from '../../containers/RightCockpit/RightCockpit';
import DisplayContent from '../Cockpit/displayContent';
import TryingOutContext from '../../context/tryOutContext';
import { set } from 'date-fns';
import NewSyllabus from './newSyllabus';
class MaxReactSyllabus extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    worker: 'bubble bee',
    showRightCockpit: false,
    addLesson: [
      {
        lesson: 'work',
        id: 'this.state..lesson.bind(this)',
        completion: false
      },
      {
        lesson: 'latin)',
        id: 't()',
        completion: false
      },
      {
        lesson: '95Ex',
        id: 'clean) - Ex',
        completion: false
      }
    ]
  };
  render() {
    console.log('I am inside of Syllabusdata');
    console.log(this.state.addLesson);
    return <NewSyllabus maxReactWork={this.state.worker}></NewSyllabus>;
  }
}
export default MaxReactSyllabus;

/*
  addLesson: [
      {
        lesson: '93. Controlling the useEffect() Behavior',
        id: 'this.state.contentChoice.lesson.bind(this)',
        completion: false
      },
      {
        lesson: '94. Cleaning up with Lifecycle Hooks & useEffect()',
        id: '94. Cleaning up with Lifecycle Hooks & useEffect()',
        completion: false
      },
      {
        lesson: '95. Cleanup Work with useEffect() - Ex',
        id: '95. Cleanup Work with useEffect() - Ex',
        completion: false
      }
    ]
    */
