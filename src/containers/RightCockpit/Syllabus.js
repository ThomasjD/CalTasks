import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from './RightCockpit';

class Syllabus extends Component {
  state = {
    maxReact: [
      { id: 'xvlwil', lesson: '90. (for props Changes)', completion: false },
      { id: 'bbbskk', lesson: '91. (for state Changes)', completion: false },
      {
        id: 'kjhck2',
        lesson: '92. Using useEffect() in Functional Components ',
        completion: false
      }
    ]
  };

  render() {
    //let lesson = {this.state.maxReact}
    return;
    <React.Fragment>{this.state.maxReact}</React.Fragment>;
  }
}

export default Syllabus;
