import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';
import SyllabusContext from '../../context/syllabusContext.js';
import TasksDataContext from '../../context/tasksContext.js';
import Aux from '../../hoc/Aux';
import Layout from '../../hoc/Layout';
import CalendarContext from '../../context/calendarContext';

class Store extends Component {
  state = {
    showSyllabusList: false,
    crunk: 'Hootie',
    showLeftOverLessonsFromSyllabus: false,
    showLeftOverTasksForWeek: false,
    syllabusData: null,
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
        this.setState({
          tasksData: dataBase,
          tasksHandlerChoice: '0'
        });
        break;
    }
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
        });
        break;

      case 'tasks':
        this.setState({
          tasksData: dataBase
        });

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
    // let displayMessage = null;
    // if (this.state.syllabusHandlerChoice === '0') {
    //   displayMessage = <div>Hey syllabusHandlerchoice is recorded</div>;
    // }
    // Layout wrap displayed
    return (
      <Aux>
        <Layout>
          <CalendarContext.Provider
            value={{
              resetHandlerChoice: this.resetHandlerChoice,
              everythingCalendar: this.state,
              dataRequestHandler: this.dataRequestHandler,
              dataRequestDetails: this.state.dataRequestDetails,
              dataReceiverHandler: this.dataReceiverHandler
            }}
          >
            {/* <Calendar /> */}
            <SyllabusContext.Provider
              value={{
                resetHandlerChoice: this.resetHandlerChoice,
                everythingSyllabus: this.state,
                dataRequestHandler: this.dataRequestHandler,
                dataRequestDetails: this.state.dataRequestDetails,
                dataReceiverHandler: this.dataReceiverHandler
              }}
            >
              <SyllabusData></SyllabusData>

              <TasksDataContext.Provider
                value={{
                  crunk: this.state.crunk,
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
                />
                <RightCockpit></RightCockpit>
              </TasksDataContext.Provider>
            </SyllabusContext.Provider>
          </CalendarContext.Provider>
        </Layout>
      </Aux>
    );
  }
}

export default Store;
