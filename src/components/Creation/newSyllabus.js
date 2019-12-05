import React, { Component } from 'react';
import ShowAllTasksAfterAddingTask from '../../context/newTask-context';
import RightCockpit from '../../containers/RightCockpit/RightCockpit';
import DisplayContent from '../Cockpit/displayContent';
import TryingOutContext from '../../context/tryOutContext';

class NewSyllabus extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    contentChoice: '',
    showRightCockpit: false,
    addLesson: {
      id: this.state.addLesson.lesson,
      lesson: '93. Controlling the useEffect() Behavior',
      completion: false
    }
  };

  change = e => {
    let name = e.target.name;
    let newValue = e.target.value;
    console.log(`I'm in change() in newSyllabus newValue:  ${newValue}`);
    this.setState({ contentChoice: newValue });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.addLesson.lesson);
    this.setState({ showRightCockpit: !this.state.showRightCockpit });
    console.log(`I'm in onSubmit ${this.state.contentChoice}`);

    //sending new Lesson to Cockpit
    this.context.addNewLessonHandler(this.state);
    //passing new content choice to displayContent -> RightCockpit
    //this.props.newestSyllabus(this.state.contentChoice2);
    this.context.newestSyllabus('3');
    //console.log(`after resetting state ${this.state.contentChoice2}`);
  };

  static contextType = TryingOutContext;

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
                onChange={e => this.change(e)}
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
