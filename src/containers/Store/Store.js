import React, { Component } from 'react';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';

class Store extends Component {
  state = {
    syllabusData: null,
    tasksData: null
  };

  render() {
    return (
      <React.Fragment>
        <RightCockpit
          deleteLessonFromAssignedSyllabusHandler={event =>
            this.deleteLessonFromAssignedSyllabusHandler(event)
          }
        />

        <TasksData />
      </React.Fragment>
    );
  }
}

export default Store;
