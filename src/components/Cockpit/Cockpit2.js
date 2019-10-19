import React, { Component } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
//import Navbar from './navBar';
import Lessons from '../Syllabus/MaxReact/Lessons';

class Cockpit2 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    maxReact: [
      { id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      { id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {
        id: 'kjhck2',
        lesson: '92. Using useEffect() in Functional Components ',
        completion: false
      }
    ],
    showLessons: false,
    showLessonsView: '0',
    lastLessonHeader: []
  };
  //let displayLessons = null

  toggleShowLessonsHandler = () => {
    if (this.state.tasks !== 0) {
      this.setState({ lastLessonHeader: this.state.maxReact[0] });
    } else {
      this.setState({ lastLessonHeader: this.state.lastLessonHeader });
    }

    //for handling headers
    switch (this.state.showLessonsView) {
      case '0':
        this.setState({ showLessons: '1' });

        break;

      case '1':
        this.setState({ showLessons: '0' });
        break;

      case '2':
        this.setState({ showLessons: '1' });
        break;
    }
  };
  //<p>tasks has # {this.state.maxReact.length}</p>
  render() {
    let displayAllLessons = null;

    if (this.state.showLessons === '1') {
      displayAllLessons = (
        <React.Fragment>
          <Lessons
            reRender={this.state.showLessons}
            lessons={this.state.maxReact}
            clicked={this.deleteLessonhandler}
            changed={this.lessonChangeHandler}
            lastLessonHeader={this.state.lastLessonHeader}
          />
        </React.Fragment>
      );
    }

    let displayLessons = null;
    displayLessons = (
      <React.Fragment>
        <p>tasks has # {this.state.maxReact.length}</p>
        <Lessons
          reRender={this.state.showLessons}
          lessons={this.state.maxReact}
          clicked={this.deleteLessonhandler}
          changed={this.lessonChangeHandler}
          lastLessonHeader={this.state.lastLessonHeader}
        />
      </React.Fragment>
    );

    let displayCockpit = null;
    if (this.state.showLessons == true) {
      displayCockpit = (
        <React.Fragment>
          <Lessons
            reRender={this.state.showLessons}
            lessons={this.state.maxReact}
            clicked={this.deleteLessonhandler}
            changed={this.lessonChangeHandler}
            lastLessonHeader={this.state.lastLessonHeader}
            lessonsLength={this.state.maxReact.length}
          />
        </React.Fragment>
      );
    }
    //{this.state.showLessons ? { displayAllLessons } : null}
    return (
      <React.Fragment>
        <button onClick={this.toggleShowLessonsHandler}>
          {' '}
          Show Lessons for React Max
        </button>
        {displayLessons}
        <p>hey there buddy</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.props.deleteCockpit2}
        >
          Delete Cockpit
        </button>
      </React.Fragment>
    );
  }
}

export default Cockpit2;

// import React, { useEffect } from 'react';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// //import Navbar from './navBar';

// const Cockpit2 = props => {
//   //can do anything that componentDidUpdate can do
//   //can send http request here
//   useEffect(() => {
//     // setTimeout(() => {
//     //   alert('FUck yea alert');
//     // }, 1000);
//     console.log('I am inside of [Cockpit2.js] useffect');

//     return () => {
//       console.log('[Cockpit2.js] cleanup work in useEffect');
//     };
//     //getting rid of timer

//     //const timer =
//     // return () => {
//     //   //clearTimeout(timer);
//     //   console.log('[Cockpit2.js] cleanup work in useEffect');
//     // };
//   });

//   //{classes.Cockpit}
//   // {cockpitBootstrap}
//   return (
//     <React.Fragment>
//       <p>hey there buddy</p>
//       <button
//         className="btn btn-primary"
//         type="button"
//         onClick={props.deleteCockpit2}
//       >
//         Delete Cockpit
//       </button>
//     </React.Fragment>
//   );
// };
// //export default Cockpit;

// export default React.memo(Cockpit2);
