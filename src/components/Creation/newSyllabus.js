import React, { Component } from 'react';
import ShowAllTasksAfterAddingTask from '../../context/newTask-context';
import RightCockpit from '../../containers/RightCockpit/RightCockpit';
import DisplayContent from '../Cockpit/displayContent';

class NewSyllabus extends Component {
  constructor(props) {
    super(props);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    contentChoice2: '2'
  };

  handleClick = event => {
    // do something meaningful
  };

  change = e => {
    let name = e.target.name;

    let newValue = e.target.value;

    this.setState({ contentChoice2: newValue });
    console.log(JSON.stringify(newValue, null, 2));
    //   console.log(`inside of change in newSyllabus ${newValue}`);
    //   //array of keys [a,b,c,d] --> for every key return {key: value}
    //   //this.setState({ contentChoice2: newValue });
    //   this.setState({
    //     contentChoice2: newValue
    //   });\

    console.log(`this is newValue: ${newValue}`);
    console.log(
      `this is this.state.contentChoice2: ${this.state.contentChoice2}`
    );
  };

  onSubmit = e => {
    e.preventDefault();
    //let newChoice = e.target.value;
    //console.log(e.target.name);
    //console.log(
    //  `I'm in onSubmit  e.target.value: ${JSON.stringify(newChoice, null, 2)}`
    // );
    //this.setState({ contentChoice2: newChoice });
    console.log(`I'm in onSubmit ${this.state.contentChoice2}`);
    //this.props.newestSyllabus(this.state.contentChoice2);
    this.props.newestSyllabus(this.state.contentChoice2);
    // setNewTask({
    //   task: {
    //     id: newTask.task['todo'],
    //     todo: newTask.task['todo'],
    //     deadline: newTask.task['deadline'],
    //     location: newTask.task['location']
    //   }
    // });

    //props.newestTask(newTask);

    //reset the state for this component

    // setNewTask({
    //   task: {
    //     id: '',
    //     todo: '',
    //     deadline: '',
    //     location: ''
    //   }
    // });

    console.log(`after resetting state ${this.state.contentChoice2}`);
  };
  //name="newView"
  //value={this.state.contentChoice2}
  //onChange={e => this.state.change(e)}
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <label>Syllabus</label>
              <textarea
                className="form-control form-control-sm"
                type="text"
                name="contentChoice"
                placeholder="Enter new Syllabus."
              />
            </div>

            <button type="submit" value="Submit">
              {' '}
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewSyllabus;

/*
render() {
    return (
      <button name="color" onClick={this.handleClick}>
          color
        </button>
      <ShowAllTasksAfterAddingTask.Provider
        value={{ contentChoice2: this.state.contentChoice2 }}
      >
        <RightCockpit 
          contentChoice2 = {this.state.contentChoice2}>

        </RightCockpit>


      </ShowAllTasksAfterAddingTask.Provider>
    );
  }
}
*/
