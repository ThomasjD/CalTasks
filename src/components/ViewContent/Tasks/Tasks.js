import React, { PureComponent } from 'react';
import Task from './Task/Task';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import student from '../../../containers/Student.css';
import TasksContext from '../../../context/tasksContext';
class Tasks extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    //lastHeader: this.props.lastHeader
    showMessageForEventValue: false
  };

  // setupLastTableHeader() {
  //   if (this.props.tasks != 0) {
  //     this.setState({ lastHeader: this.state.tasks[0] });
  //   } else {
  //     this.setState({ lastHeader: this.state.lastHeader });
  //   }
  // }

  renderTableHeaderAllTasksHandler() {
    console.log('Inside Tasks.js');
    let clickToAddDelete = null;

    if (this.props.showLeftOverTasksForWeek) {
      clickToAddDelete = 'Click to schedule this task';
    } else {
      clickToAddDelete = 'Click to Delete Task';
    }

    if (this.context.tasksData.tasksData) {
      let header = Object.keys(this.context.tasksData.tasksData.lastTaskHeader);
      return header.map((key, index) => {
        //console.log(`this is the key: (${key}) and the index: (${index})`);
        if (key === 'id') {
          return <th key={index}>Click to Delete</th>;
        } else {
          return <th key={index}>{key.toUpperCase()}</th>;
        }
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
        if (this.props.everything.contentChoice === '1') {
          functionChoiceDelete = '3';
          functionChoiceChange = '4';
        } else {
          functionChoiceDelete = '5';
          functionChoiceChange = '6';
        }

        return (
          <ErrorBoundary key={task.id}>
            <Task
              todo={task.todo}
              deadline={task.deadline}
              location={task.location}
              particularKey={task.id}
              click={event =>
                this.context.dataRequestHandler(
                  event,
                  functionChoiceDelete,
                  'index',
                  index
                )
              }
              changed={event =>
                this.context.dataRequestHandler(
                  event,
                  functionChoiceChange,
                  'id',
                  task.id
                )
              }
            ></Task>
          </ErrorBoundary>
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

    // let currentMessageDiv = this.state.showMessageForEventValue;
    // this.setState({ showMessageForEventValue: !currentMessageDiv });
    let currentValue = JSON.stringify(event.target.value, null, 2);
    this.setState({
      showMessageForEventValue: true,
      targetValue: currentValue
    });
  };

  static contextType = TasksContext;
  render() {
    let messageDiv = null;
    if (this.state.showMessageForEventValue === true) {
      messageDiv = <div>event.value is : {this.state.targetValue}</div>;
    }

    return (
      <div>
        <h1 id="title"> All Tasks</h1>
        {messageDiv}
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

export default Tasks;

//original

/*
this.props.tasks.map((task, index) => {
            return (<ErrorBoundary key = {task.id}>
            <Task 
            todo = {task.todo} 
            deadline = {task.deadline}
            location = {task.location}
            key = {task.id}
            click = {() => this.props.clicked(index)}
            changed = {(event) => this.props.changed (event, task.id)}>Change Task (below)</Task>
            </ErrorBoundary>
            )
          })
*/

//original functional component

/*
import React, { useEffect, useState } from 'react';
import Task from './Task/Task';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
//import { isEmptyStatement } from '@babel/types';

const Tasks = props => {
  console.log('[Tasks.js] rendering');

  const allTasksHandler = () => {
    return props.tasks.map((task, index) => {
      return (
        //<ErrorBoundary key={task.id}>
        <Task
          todo={task.todo}
          deadline={task.deadline}
          location={task.location}
          key={task.id}
          click={() => props.clicked(index)}
          changed={event => props.changed(event, task.id)}
        />
        //</ErrorBoundary>
      );
    });
  };

  const renderTableHeaderAllTasksHandler = () => {
    //props.tasks.length !== 0
    //if (Object.keys(props.tasks !== 0)) {

    //if there are still tasks left
    if (props.tasks.length > 1) {
      let header = Object.keys(props.tasks[0]);

      return header.map((key, index) => {
        console.log(`this is the key: (${key}) and the index: (${index})`);
        if (key === 'id') {
          return <th key={index}>Click to Delete</th>;
        } else {
          return <th key={index}>{key.toUpperCase()}</th>;
        }
      });
    } else {
      //if there are no tasks left then these will be used to print the log
      // return (
      //   <React.Fragment>
      //     <th>Click To Delete</th>
      //     <th>todo</th>
      //     <th>deadline</th>
      //     <th>location</th>
      //   </React.Fragment>
      // );
      //console.log(Object.keys(lastTaskHeader.lastHeader));
      let header = Object.keys(lastTaskHeader.lastHeader[0]);

      return header.map((key, index) => {
        console.log(`this is the key: (${key}) and the index: (${index})`);
        if (key === 'id') {
          return <th key={index}>Click to Delete</th>;
        } else {
          return <th key={index}>{key.toUpperCase()}</th>;
        }
      });
    }
  };

  //console.log('we out of tasks');

  //? console.log('still got some tasks')

  //let header = Object.keys(props.tasks);

  //console.log(`this is the header: ${header}`);
  const [lastTaskHeader, setLastTaskHeader] = useState({
    lastHeader: props.tasks
  });

  useEffect(() => {
    // console.log(`this is the state of alert ${onCallDelete.signalAlert}`);
    // if (onCallDelete.signalAlert === 'true') {

    if (props.tasks.length === 1) {
      //let savedHeader = Object.keys(props.tasks[0]);
      //let savedHeader = props.tasks
      console.log(props.tasks);
      setLastTaskHeader({ lastHeader: props.tasks });

      console.log(`this is the last task alert ${lastTaskHeader.lastHeader}`);
    }
    if (props.reRender === true) {
      alert('Are you sure you want to delete this task?');
      //return (props.reRender = {})
    }

    // }

    return () => {
      console.log('i am in the return of useEffect in TASKS');
    };
  }, [props.reRender]);
  //
  return (
    <div>
      <h1 id="title"> All Tasks</h1>

      <table id="students">
        <tbody>
          <tr>{renderTableHeaderAllTasksHandler()}</tr>
          {allTasksHandler()}
        </tbody>
      </table>
    </div>
  );

  // return props.tasks.map((task, index) => {
  //   return (
  //     <ErrorBoundary key={task.id}>
  //       <Task
  //         todo={task.todo}
  //         deadline={task.deadline}
  //         location={task.location}
  //         key={task.id}
  //         click={() => props.clicked(index)}
  //         changed={event => props.changed(event, task.id)}
  //       >
  //         Change Task (below)
  //       </Task>
  //     </ErrorBoundary>
  //   );
  // });
};
export default Tasks;
*/
