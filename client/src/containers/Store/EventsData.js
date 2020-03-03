import React, { Component } from 'react';
import StoreContext from '../../context/StoreDataContext';

class EventsData extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentMonthEvents: ['hello', 'there']
  };

  static contextType = StoreContext;
  newEventHandler = () => {
    console.log(this.state.currentMonthEvents[1]);
    console.log(typeof this.state.currentMonthEvents);

    let newEvent = this.context.dataRequestDetails.value;
    console.dir(newEvent);

    if (newEvent.eventStartTimeDate.numDaysFromCurrentDay < 31) {
      let currentMonthEvents = this.state.currentMonthEvents;
      console.log(typeof currentMonthEvents);

      currentMonthEvents.push(newEvent);

      console.log(currentMonthEvents);
      this.setState(
        {
          currentMonthEvents: currentMonthEvents
        },
        () => {
          let eventTitleObj = { ...this.state.currentMonthEvents };
          console.log(this.state.currentMonthEvents[2]);
        }
      );
    }
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
