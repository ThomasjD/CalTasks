import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.word = 'chicken';
  }
  state = {
    word2: 'chicken2'
  };
  render() {
    return <div> inside Word</div>;
  }
}

export default Word;
