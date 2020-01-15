import React, { PureComponent } from 'react';
import Task from './Task/Task';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import student from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';
import statusClasses from './Tasks.module.css'; //changes color of text depending on # of unscheduled tasks left
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Tasks extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    showMessageForEventValue: false
  };

  renderTableHeaderAllTasksHandler() {
    console.log('Inside Tasks.js');

    if (this.context.tasksData.tasksData.lastTaskHeader) {
      let header = Object.keys(this.context.tasksData.tasksData.lastTaskHeader);
      return header.map((key, index) => {
        //console.log(`this is the key: (${key}) and the index: (${index})`);

        switch (key) {
          case 'id':
            return <th key={index}>Click to Delete</th>;
            break;
          case 'scheduleTask':
            return <th key={index}>Schedule Task</th>;
            break;
          case 'category':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;
          case 'task':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;

          case 'deadline':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;
        }
        // if (key === 'id') {
        //   return <th key={index}>Click to Delete</th>;
        // } else {
        //   return <th key={index}>{key.toUpperCase()}</th>;
        // }
      });
    }
  }

  allTasksHandler() {
    return this.context.tasksData.tasksData.unAssignedTasksForWeek.map(
      (task, index) => {
        let functionChoiceDelete = null;
        let functionChoiceChange = null;

        //destructuring
        // const { id, name, age, email } = student;
        if (this.props.contentChoice === '1') {
          functionChoiceDelete = '3';
          functionChoiceChange = '4';
        } else {
          functionChoiceDelete = '5'; //for todayTasks
          functionChoiceChange = '6'; //for todayTasks
        }

        return (
          <Aux>
            <ErrorBoundary key={task.id}>
              <Task
                key={task.id}
                task={task.task}
                deadline={task.deadline}
                category={task.category}
                particularKey={task.id}
                scheduleTask={task.schedulTask}
                click={event =>
                  this.context.dataRequestHandler(
                    event,
                    'tasks',
                    functionChoiceDelete,
                    'index',
                    index
                  )
                }
                changed={event =>
                  this.context.dataRequestHandler(
                    event,
                    'tasks',
                    functionChoiceChange,
                    'id',
                    task.id
                  )
                }
              ></Task>
            </ErrorBoundary>
          </Aux>
        );
      }
    );
  }
  //sendChangeRequestHandler = (event, functionChoiceDelete ) => {

  //}

  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Tasks] getDerivedStateFromProps')
  //     return state
  // }

  //niche -removed
  // componentWillReceiveProps(props) {
  //    console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Tasks] shouldComponentUpdate');
    //comparing if props have changed
    if (
      nextProps.unAssignedTasksForWeek !==
      this.context.tasksData.tasksData.unAssignedTasksForWeek
    ) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Tasks] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  // componentWillUpdate() {
  //     return
  // }

  componentDidUpdate(prevProps, prevState, message) {
    console.log('[Tasks] componentDidUpdate');
    console.log(message);
  }

  componentWillUnmount() {
    console.log('[Tasks.js] componentWillUnmount');
  }

  dataRequestHandler = (event, a, b, c) => {
    console.log('[Tasks] rendering...');

    let currentValue = JSON.stringify(event.target.value, null, 2);
    this.setState({
      showMessageForEventValue: true,
      targetValue: currentValue
    });
  };

  static contextType = TasksContext;

  render() {
    //applying styling to text basing on amount of unscheduled Tasks
    let workLoadStatus = null;
    if (this.context.tasksData.tasksData.unAssignedTasksForWeek) {
      switch (this.context.tasksData.tasksData.unAssignedTasksForWeek.length) {
        case 1:
          workLoadStatus = (
            <p className={statusClasses.lightLoad}>
              There are  
              {this.context.tasksData.tasksData.unAssignedTasksForWeek.length}{' '}
              unscheduled tasks for the Week.
            </p>
          );
          break;
        case 2:
          workLoadStatus = (
            <p className={statusClasses.mediumLoad}>
              There are  
              {this.context.tasksData.tasksData.unAssignedTasksForWeek.length}{' '}
              unscheduled tasks for the Week.
            </p>
          );
          break;
        case 3:
          workLoadStatus = (
            <p className={statusClasses.heavyLoad}>
              There are  
              {this.context.tasksData.tasksData.unAssignedTasksForWeek.length}{' '}
              unscheduled tasks for the Week.
            </p>
          );
          break;
      }
    }

    return (
      <div>
        {workLoadStatus}
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeaderAllTasksHandler()}</tr>
            {this.allTasksHandler()}
          </tbody>
        </table>
      </div>
    );
  }
}

Tasks.propTypes = {
  //check to see if this.props.contentChoice passed  in is a string
  contentChoice: PropTypes.string.isRequired
};
export default Tasks;