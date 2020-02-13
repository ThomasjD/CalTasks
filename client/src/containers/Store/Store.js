import React, { Component } from 'react';
//import classes from '../../components/Cockpit/Cockpit.module.css';
import RightCockpit from '../RightCockpit/RightCockpit';
import TasksData from './TasksData';
import SyllabusData from './SyllabusData';
import SyllabusContext from '../../context/syllabusContext.js';
import TasksDataContext from '../../context/tasksContext.js';
import Aux from '../../hoc/Aux';
import Layout from '../../hoc/Layout/Layout';
import CalendarContext from '../../context/calendarContext';
//import Basic from './react-big-scheduler-master/Basic';
import StoreDataContext from '../../context/StoreDataContext';
import ObjectiveData from './ObjectiveData';
import UiData from './UiData';
import Modal from '../../components/UI/Modal/Modal';
class Store extends Component {
  state = {
    contentChoice: '0',
    reRenderTodayTasks: false, //TodayTasks inside useEffect()
    showSyllabusList: false,
    crunk: 'Hootie',
    showLeftOverLessonsFromSyllabus: false,
    showLeftOverTasksForWeek: false,
    syllabusData: null,
    tasksData: null,
    fish: 'blowFish',

    dataRequestDetails: {
      handlerChoice: false,
      dataLocation: null,
      index: null,
      id: null,
      value: null
    }
  };
  contentViewHandler = event => {
    let newViewChoice = event.target.value;
    if (newViewChoice === this.state.contentChoice) {
      return this.setState({ contentChoice: '0' });
    } else {
      this.setState({ contentChoice: newViewChoice });
    }
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

  dataRequestHandler = (event, dataRequestMessage) => {
    alert(` in Store dataRequestHandler-->  typeOfData: ${dataRequestMessage.typeOfData}
    handlerChoice: ${dataRequestMessage.handlerChoice}
    dataLocation: ${dataRequestMessage.dataLocation}
    infoType: ${dataRequestMessage.infoType}
    info: ${dataRequestMessage.info}`);
    let {
      typeOfData,
      handlerChoice,
      dataLocation,
      infoType,
      info
    } = dataRequestMessage;

    let index = null;
    let id = null;
    let value = '';
    let dataRequestDetails = null;
    //let inspection = event.value;
    switch (typeOfData) {
      // case 'UiData':
      //   value = info;
      // alert(`inside Store dataRequest typeOfData: UiData value: ${value}`);
      // dataRequestDetails = {
      //   handlerChoice: handlerChoice,
      //   index: index,
      //   id: id,
      //   value: value,
      //   typeOfData: typeOfData,
      //   dataLocation: dataLocation
      // };
      //   break;
      case 'tasks':
        switch (infoType) {
          case 'index':
            index = info;
            value = event.target.value;

            break;
          case 'id':
            id = info;
            value = event.target.value;

            break;
          case 'pickedDayTasks':
            value = null;
            break;
          case 'howBusy':
            value = null;
            break;

          case 'newTask':
            value = info;
            break;
        }
        //alert('inside typeOfData of tasks ');
        dataRequestDetails = {
          handlerChoice: handlerChoice,
          index: index,
          id: id,
          value: value,
          typeOfData: typeOfData,
          dataLocation: dataLocation
        };
        break;
      case 'events':
        //alert('inside store case events');
        dataRequestDetails = {
          handlerChoice: handlerChoice,
          index: index,
          id: id,
          typeOfData: typeOfData,
          dataLocation: dataLocation,
          value: info
        };
        break;
      case 'syllabus':
        switch (infoType) {
          case 'index':
            index = info;
            //value = event.target.value;
            break;
          case 'id':
            id = info;
            value = event.target.value;
            break;
        }

        dataRequestDetails = {
          handlerChoice: handlerChoice,
          index: index,
          id: id,
          dataLocation: dataLocation,
          typeOfData: typeOfData,
          value: value
        };
        break;

      case 'obj':
        dataRequestDetails = {
          handlerChoice: handlerChoice,
          index: index,
          id: id,
          typeOfData: typeOfData,
          dataLocation: dataLocation,
          value: info
        };
        break;
    }

    //event, index, handlerType
    this.setState({
      dataRequestDetails: dataRequestDetails
    });
  };

  dataReceiverHandler = dataBase => {
    console.log({ ...dataBase });
    switch (dataBase.dataBaseName) {
      case 'syllabus':
        //alert(`Inside of dataReceiverHandler syllabus statement:`);
        this.setState({
          syllabusData: dataBase
        });
        break;

      case 'tasks':
        //alert(`Inside of dataReceiverHandler taskData dataBase: ${dataBase}`);
        // console.log(dataBase);
        this.setState({
          tasksData: dataBase,
          dataLocation: dataBase.dataLocation
        });

        break;
      case 'obj':
        this.setState(
          {
            dataBudget: dataBase,
            dataLocation: dataBase.dataLocation,
            showDataBudget: true //Cockpit: prevent setState() infinite
          }
          //   () => console.log(this.state.dataBudget)
        );

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
    // Layout wrap displayed

    if (this.state.dataBudget) {
    }
    return (
      <Aux>
        <StoreDataContext.Provider
          value={{
            //all dataBases
            dataRequestHandler: this.dataRequestHandler,
            dataRequestDetails: this.state.dataRequestDetails,
            dataReceiverHandler: this.dataReceiverHandler,
            resetHandlerChoice: this.resetHandlerChoice,
            storeData: this.state,
            //calendarData
            everythingCalendar: this.state,

            //syllabusData
            everythingSyllabus: this.state,

            //tasksData
            tasksData: this.state,
            newDataHandler: this.newDataHandler,
            showLeftOverTasksForWeek: this.state.showLeftOverTasksForWeek,

            //UI
            contentViewHandler: this.contentViewHandler,
            contentChoice: this.state.contentChoice,
            //ObjectiveData
            dataBudget: this.state
          }}
        >
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
              <ObjectiveData />

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
                {/* <UiData></UiData> */}
                {/* <Modal>
                  <h3>calTech</h3>
                </Modal> */}
                <TasksDataContext.Provider
                  value={{
                    crunk: this.state.crunk,
                    dataReceiverHandler: this.dataReceiverHandler,
                    dataRequestHandler: this.dataRequestHandler,
                    dataRequestDetails: this.state.dataRequestDetails,
                    tasksData: this.state,
                    resetHandlerChoice: this.resetHandlerChoice,
                    newDataHandler: this.newDataHandler
                  }}
                >
                  <TasksData
                    showLeftOverTasksForWeek={
                      this.state.showLeftOverTasksForWeek
                    }
                    dataRequestDetails={this.state.dataRequestDetails}
                  />
                  <RightCockpit crunk={this.state.crunk}></RightCockpit>
                </TasksDataContext.Provider>
              </SyllabusContext.Provider>
            </CalendarContext.Provider>
          </Layout>
        </StoreDataContext.Provider>
      </Aux>
    );
  }
}

export default Store;
