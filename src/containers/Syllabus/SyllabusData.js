import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';

class Syllabus {
  state = {
    minReact: [
      {
        id: 'xvldddwil',
        lesson: '936670. (for props Changes)',
        completion: false
      },
      {
        id: 'bbbnnskk',
        lesson: '93531. (for state Changes)',
        completion: false
      },
      {
        id: 'kjhsdhck2',
        lesson: '9100. Using useEffect() in Functional Components ',
        completion: false
      }
    ],
    hoot: 33
  };

  render() {
    return <RightCockpit hoot={this.state.hoot} />;
  }
}

export default Syllabus;
