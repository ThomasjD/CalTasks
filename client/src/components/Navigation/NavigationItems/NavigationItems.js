import React, { useContext } from 'react';
import classesCockpit from '../../Cockpit/Cockpit.module.css';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import StoreContext from '../../../context/StoreDataContext';
import calendarObj from '../../Calendar/calendarObj';
const NavigationItems = () => {
  const storeContext = useContext(StoreContext);

  const requestDataHandler = event => {
    let contentchoice = event.target.value;
    let typeOfData = ''; //string: syllabus,tasks,events,objectives
    let handlerChoice = ''; //string: '#' handler inside of database
    let dataLocation = ''; // string: where obj found inside database
    let infoType = ''; //string: index/id/
    let info = ''; //string: actual info
    let today = calendarObj();

    // let value = '';
    let dataRequestMessage = {};
    switch (contentchoice) {
      case '1':
        typeOfData = 'tasks';
        handlerChoice = '1';
        dataLocation = 'unAssignedTasksForWeek';
        infoType = null;
        info = null;
        dataRequestMessage = {
          typeOfData: typeOfData,
          handlerChoice: handlerChoice,
          dataLocation: dataLocation,
          infoType: infoType,
          info: info
        };

        storeContext.dataRequestHandler(event, dataRequestMessage);
        break;
      case '2':
        typeOfData = 'tasks';
        handlerChoice = '2';
        dataLocation = today;
        infoType = null;
        info = null;
        dataRequestMessage = {
          typeOfData: typeOfData,
          handlerChoice: handlerChoice,
          dataLocation: dataLocation,
          infoType: infoType,
          info: info
        };

        storeContext.dataRequestHandler(event, dataRequestMessage);
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6': //load up newSyllabus component -> get data prepared to display maxReactWorkLeft
        typeOfData = 'syllabus';
        handlerChoice = '10';
        dataLocation = 'maxReactWorkLeft';
        infoType = null;
        info = null;
        dataRequestMessage = {
          typeOfData: typeOfData,
          handlerChoice: handlerChoice,
          dataLocation: dataLocation,
          infoType: infoType,
          info: info
        };

        storeContext.dataRequestHandler(event, dataRequestMessage);
        break;
    }

    let contentViewObject = {
      target: {
        value: contentchoice
      }
    };

    storeContext.contentViewHandler(contentViewObject);
  };
  //className={classesCockpit.specialbtn}
  return (
    <React.Fragment>
      <ul className={classes.NavigationItems}>
        <NavigationItem active link="/">
          Today's Tasks
        </NavigationItem>

        <NavigationItem link="/" active>
          Tasks by Day
        </NavigationItem>

        <NavigationItem link="/" active>
          <div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span className="navbar-toggler-icon"></span>
                Tasks
              </button>

              <div className="dropdown-menu">
                <div className={classesCockpit.specialbtnAllTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="1"
                  >
                    All Tasks
                  </button>
                </div>

                <div className={classesCockpit.specialbtnTodayTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="2"
                  >
                    Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </NavigationItem>

        <NavigationItem link="/" active>
          <div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span className="navbar-toggler-icon"></span>
                Syllabus
              </button>

              <div className="dropdown-menu">
                <div className={classesCockpit.specialbtnAllTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="1"
                  >
                    ReactMax
                  </button>
                </div>

                <div className={classesCockpit.specialbtnTodayTasks}>
                  <button
                    className="dropdown-item"
                    onClick={event => requestDataHandler(event)}
                    value="2"
                  >
                    Bootstrap Travesty
                  </button>
                </div>
              </div>
            </div>
          </div>
        </NavigationItem>

        <NavigationItem active link="/">
          Calendar
        </NavigationItem>
      </ul>
    </React.Fragment>
  );
};
export default NavigationItems;
