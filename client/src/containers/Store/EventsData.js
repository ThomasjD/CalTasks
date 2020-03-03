import React, { Component } from 'react';
import StoreContext from '../../context/StoreDataContext';

class EventsData extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentMonthEvents: ['hello', 'there'],
    afterCurrentMonthEvents: {}
  };

  static contextType = StoreContext;

  newEventHandler = () => {
    //console.log(this.state.currentMonthEvents[1]);
    console.log(typeof this.state.currentMonthEvents);

    let newEvent = this.context.dataRequestDetails.value;

    //currentMonthEvents kept in array
    if (newEvent.eventStartTimeDate.numDaysFromCurrentDay < 31) {
      let currentMonthEvents = this.state.currentMonthEvents;
      console.log(typeof currentMonthEvents);

      currentMonthEvents.push(newEvent);

      console.log(currentMonthEvents);
      this.setState(
        {
          currentMonthEvents: currentMonthEvents
        },
        () => this.sendToCalendarData(newEvent)
      );
    } else {
      let afterMonthEvents = this.state.afterCurrentMonthEvents;

      let afterCurrentMonthEventsObj = {
        ...afterMonthEvents,
        [newEvent.eventId]: newEvent
      };

      this.setState(
        {
          afterCurrentMonthEvents: afterCurrentMonthEventsObj
        },
        () => this.sendToCalendarData(newEvent)
      );
    }
    //send to calendarData
  };

  //send to calendarData on unblockedTime
  sendToCalendarData = newEvent => {
    let dataRequestMessage = {
      //if task/event scheduled on calendar
      typeOfData: 'CalendarData',
      handlerChoice: '1',
      dataLocation: newEvent.dayObjName,
      infoType: 'newEvent',
      info: newEvent
    };
    let event = null;
    this.context.dataRequestHandler(event, dataRequestMessage);
  };

  render() {
    if (this.context.dataRequestDetails.typeOfData === 'EventsData') {
      switch (this.context.dataRequestDetails.handlerChoice) {
        case '1': //newEvent
          this.context.resetHandlerChoice(this.newEventHandler());

          break;
      }
    }

    return <React.Fragment></React.Fragment>;
  }
}

export default EventsData;

//properties for newEvent
// eventId: '',
// eventTitle: '',
// eventNote: '',
// eventCategory: '',
// eventStartTimeDate: '',
// eventFinishTimeDate: '',
// //later: If one-day event
// eventDuration: '',
// //Later:
// //T -> schedule it on calendarData
// //F--> put into unScheduledEventsList for that day
// blockOffTimeSlot: false,
// showStartTimeDate: false,
// showFinishTimeDate: false,
// eventDeadline: '',
// //later: show multiday non-continous event
// showMultidayNonContinousDate: false
