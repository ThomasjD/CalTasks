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
    showLeftOverTasksForWeek: false,
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
          }
          // },
          // //() => {
          //   console.log(this.state.tasksData.lastTaskHeader);
          // }
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

  processSyllabusRequestHandler2 = (
    event,
    syllabusHandlerChoice,
    infoType,
    info
  ) => {
    let index = null;
    let id = null;
    //let value = null;
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
      value: event.value
    });
  };

  dataRequestHandler = (event, typeOfData, handlerChoice, infoType, info) => {
    let index = null;
    let id = null;
    let value = '';
    //let inspection = event.value;

    if (infoType === 'index') {
      index = info;
      //value = null;
    } else {
      id = info;
    }
    value = event.target.value;

    let dataRequestDetails = {
      handlerChoice: handlerChoice,
      index: index,
      id: id,
      value: value,
      typeOfData: typeOfData
    };
    //event, index, handlerType
    this.setState({
      dataRequestDetails: dataRequestDetails
    });
  };

  dataReceiverHandler = dataBase => {
    switch (dataBase.dataBaseName) {
      case 'syllabus':
        this.setState({
          syllabusData: dataBase

          // dataRequestDetails: {
          //   typeOfData: 'reset',
          //   handlerChoice: '0',
          //   index: null,
          //   id: null,
          //   value: ''
          // }
        });
        break;

      case 'tasks':
        //alert('Inside of dataReceiverHandler-tasks');
        this.setState({
          tasksData: dataBase
          // dataRequestDetails: {
          //   typeOfData: 'kickboxer',
          //   handlerChoice: '0',
          //   index: null,
          //   id: null,
          //   value: ''
          // }
        });
        //alert(this.state.crunk);
        break;
    }
  };

  resetHandlerChoice = () => {
    this.setState({
      dataRequestDetails: {
        handlerChoice: '0',
        typeOfData: '',
        index: null,
        id: null,
        value: ''
      }
    });
  };

  render() {
    let displayMessage = null;
    if (this.state.syllabusHandlerChoice === '0') {
      displayMessage = <div>Hey syllabusHandlerchoice is recorded</div>;
    }

    return (
      <div>
        <SyllabusContext.Provider
          value={{
            resetHandlerChoice: this.resetHandlerChoice,
            processSyllabusRequestHandler: this.processSyllabusRequestHandler,
            syllabusHandlerChoice: this.state.syllabusHandlerChoice,
            index: this.state.index,
            id: this.state.id,
            everythingSyllabus: this.state,
            processSyllabusRequestHandler2: this.processSyllabusRequestHandler2,
            dataRequestHandler: this.dataRequestHandler,
            dataRequestDetails: this.state.dataRequestDetails,
            dataReceiverHandler: this.dataReceiverHandler
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
              dataReceiverHandler: this.dataReceiverHandler,
              dataRequestHandler: this.dataRequestHandler,
              dataRequestDetails: this.state.dataRequestDetails,
              tasksData: this.state,
              resetHandlerChoice: this.resetHandlerChoice
            }}
          >
            <TasksData
              showLeftOverTasksForWeek={this.state.showLeftOverTasksForWeek}
              dataRequestDetails={this.state.dataRequestDetails}
              sendSyllabusDataHandler={this.sendSyllabusDataHandler}
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
