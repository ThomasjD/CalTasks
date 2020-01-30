import React, { Component } from 'react';
import ShowAllTasksAfterAddingTask from '../../context/tasksContext';
import RightCockpit from '../../containers/RightCockpit/RightCockpit';
import DisplayContent from '../Cockpit/displayContent';
import SyllabusContext from '../../context/syllabusContext';
import RightCockpitContext from '../../context/RightCockpitContext';
import { set } from 'date-fns';
import MaxReactSyllabus from './SyllabusData';
import StoreDataContext from '../../context/StoreDataContext';
class NewSyllabus extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    contentChoice: 'charisma',
    showRightCockpit: false,
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
  };

  change = e => {
    let name = e.target.name;
    let newValue = e.target.value;
    console.log(`I'm in change() in newSyllabus newValue:  ${newValue}`);
    this.setState({ contentChoice: newValue });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.addLesson[0].lesson);
    this.setState({ showRightCockpit: !this.state.showRightCockpit });
    console.log(`I'm in onSubmit ${this.state.contentChoice}`);

    //sending new Lesson to Cockpit

    //this.context.addNewLessonHandler(this.state.addLesson[1]);

    //deleting the lesson just sent to RightCockpit
    let deletionOfLesson = this.state.addLesson.splice(1, 1);
    this.setState({ addLesson: deletionOfLesson });
    console.log(this.state['addLesson'].length);

    //allow deleteSyllabusHandler in RightCockpit to either add or splice to the stored maxReact array

    //passing new content choice to displayContent -> RightCockpit
    this.context.newContentViewHandler('3', 'maxReact');
    //console.log(`after resetting state ${this.state.contentChoice2}`);
  };

  static contextType = RightCockpitContext;
  static contextType = StoreDataContext;

  render() {
    //console.log(JSON.stringify(this.props.maxReactWork, null, 2));
    //console.log(this.state['addLesson'][0].lesson);

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
