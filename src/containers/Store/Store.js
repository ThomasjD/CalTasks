import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';
import SyllabusContext from '../../context/syllabusContext.js';
import TasksDataContext from '../../context/tasksContext.js';

class Store extends Component {
  state = {
    lastLessonHeader: [],

    crunk: 'Hootie',
    showLeftOverLessonsFromSyllabus: false,
    syllabusData: null,
    syllabusHandlerChoice: '0',
    tasksData: null,
    dataRequestDetails: {
      handlerChoice: false,
      index: null,
      id: null,
      value: null
    }
  };

  //Now deals with syllabusData strictly
  sendSyllabusDataHandler = handlerChoice => {
    this.setState({ syllabusHandlerChoice: handlerChoice });
    console.log('Inside of sendSyllabusDataHandler');
  };

  receiveSyllabusDataHandler = dataBase => {
    switch (dataBase.dataBaseName) {
      case 'syllabus':
        this.setState(
          {
            syllabusData: dataBase,
            syllabusHandlerChoice: '0'
          },
          () => {
            console.log(this.state.syllabusData.lastLessonHeader);
          }
        );
        break;

      case 'tasks':
        this.setState(
          {
            tasksData: dataBase,
            tasksHandlerChoice: '0'
          },
          () => {
            console.log(this.state.tasksData.lastLessonHeader);
          }
        );

        break;
    }
  };

  resetSyllabusHandlerChoice = () => {
    this.setState({ syllabusHandlerChoice: '0' });
  };

  processSyllabusRequestHandler = (
    event,
    syllabusHandlerChoice,
    infoType,
    info
  ) => {
    console.log(
      `In processSyllabusRequestHandler event.value => ${event.target.value} `
    );

    let index = null;
    let id = null;
    let value = null;
    if (infoType === 'index') {
      index = info;
    } else {
      id = info;
    }
    //event, index, handlerType
    this.setState({
      syllabusHandlerChoice: syllabusHandlerChoice,
      index: index,
      id: id,
      value: event.target.value
    });
  };

  dataRequestHandler = (
    handlerChoice, //a # to signal type of function that will get called
    infoType, //string: 'id', 'index', or 'value'
    info, // string: id, index, or value
    value
  ) => {
    //console.log(`In DataRequestHandler event.value => ${event.target.value} `);
    console.log('Inside dataRequestHandler');
    let index = null;
    let id = null;

    if (infoType === 'index') {
      index = info;
    } else {
      id = info;
    }

    let dataRequestDetails = {
      handlerChoice: handlerChoice,
      index: index,
      id: id,
      value: value
    };
    //event, index, handlerType
    this.setState({
      dataRequestDetails: dataRequestDetails
    });
  };
  dataReceiverHandler = dataBase => {
    switch (dataBase.dataBaseName) {
      case 'syllabus':
        this.setState(
          {
            syllabusData: dataBase,
            syllabusHandlerChoice: '0'
          },
          () => {
            console.log(this.state.syllabusData.lastLessonHeader);
          }
        );
        break;

      case 'tasks':
        this.setState({
          tasksData: dataBase,
          dataRequestDetails: {
            handlerChoice: '0',
            index: null,
            id: null,
            value: null
          }
        });

        break;
    }
  };

  resetHandlerChoice = () => {
    this.setState({
      dataRequestDetails: {
        handlerChoice: false,
        index: false,
        id: false,
        value: false
      }
    });
  };

  render() {
    let displayMessage = null;
    if (this.state.syllabusHandlerChoice === '1') {
      displayMessage = <div>Hey syllabusHandlerchoice is recorded</div>;
    }

    return (
      <div>
        <SyllabusContext.Provider
          value={{
            processSyllabusRequestHandler: this.processSyllabusRequestHandler,
            syllabusHandlerChoice: this.state.syllabusHandlerChoice,
            index: this.state.index,
            id: this.state.id,
            everythingSyllabus: this.state
          }}
        >
          <SyllabusData
            resetSyllabusHandlerChoice={this.resetSyllabusHandlerChoice}
            syllabusHandlerChoice={this.state.syllabusHandlerChoice}
            receiveSyllabusDataHandler={this.receiveSyllabusDataHandler}
            sendSyllabusDataHandler={this.sendSyllabusDataHandler}
            value={this.state.value}
            index={this.state.index}
            id={this.state.id}
          ></SyllabusData>

          <TasksDataContext.Provider
            value={{
              dataRequestHandler: (a, b, c, d) =>
                this.dataRequestHandler(a, b, c, d),
              dataRequestDetails: this.state.dataRequestDetails,
              tasksData: this.state
            }}
          >
            <TasksData
              resetHandlerChoice={this.resetHandlerChoice}
              receiveSyllabusDataHandler={this.receiveSyllabusDataHandler}
              dataReceiverHandler={this.dataReceiverHandler}
            />
            <RightCockpit
              //Tasks
              //Syllabus
              sendSyllabusDataHandler={this.sendSyllabusDataHandler}
            ></RightCockpit>
          </TasksDataContext.Provider>
        </SyllabusContext.Provider>
      </div>
    );
  }
}

export default Store;
