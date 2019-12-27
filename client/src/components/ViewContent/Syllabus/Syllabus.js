import React, { Component } from 'react';
import App from '../../containers/App';

class Syllabus extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hello: 'whatsup America',
    bootStrap: [
      {
        id: 'xvl2il',
        lesson: '93. Controlling the useEffect()',
        completion: false
      },
      {
        id: 'bbb3kk',
        lesson: '94. Cleaning Lifecycle Hooks',
        completion: false
      },
      {
        id: 'kjh4k2',
        lesson: '95. Cleanup Work with useEffect()',
        completion: false
      }
    ]
  };

  //For cleanup
  componentWillUnmount() {
    console.log("[Syllabus] I'm inside of componentWillUnmount");
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.hello}</p>
      </React.Fragment>
    );
  }
}

export default Syllabus;
