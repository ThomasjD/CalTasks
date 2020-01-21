import React, { usteState } from 'react';
import { PropTypes } from 'prop-types';
//import moment from 'moment'
//import 'moment/locale/zh-cn';
// import 'antd/lib/style/index.less';     //Add this code for locally example
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT,
  DemoData
} from '../../Template/index';
import Nav from './Nav';
import Tips from './Tips';
import ViewSrcCode from './ViewSrcCode';
import withDragDropContext from './withDnDContext';

// class Basic extends Component {
//   constructor(props) {
//     super(props);
const Basic = () => {
  let schedulerData = new SchedulerData(
    new moment('2017-12-18').format(DATE_FORMAT),
    ViewTypes.Week
  );
  const [viewModelState, setViewModel] = useState({ viewModel: '' });
  let schedulerData = new SchedulerData('2017-12-18', ViewTypes.Week);
  schedulerData.localeMoment.locale('en');
  schedulerData.setResources(DemoData.resources);
  schedulerData.setEvents(DemoData.events);
  setViewModel({
    viewModel: schedulerData
  });
  // }

  //render() {
  //const { viewModel } = this.state;

  //}

  const prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  const nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  const onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  const onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  const eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  const ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  const ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  const newEvent = (
    schedulerData,
    slotId,
    slotName,
    start,
    end,
    type,
    item
  ) => {
    if (
      window.confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach(item => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: 'New event you just created',
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: 'purple'
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  const updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  const updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  const moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      window.confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  const onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  const onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  const onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollTop');
  };

  const onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollBottom');
  };

  const toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  };

  return (
    <div>
      <Nav />
      <div>
        <h3 style={{ textAlign: 'center' }}>
          Basic example
          <ViewSrcCode srcCodeUrl="https://github.com/StephenChou1017/react-big-scheduler/blob/master/example/Basic.js" />
        </h3>
        <Scheduler
          schedulerData={viewModel}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          eventItemClick={this.eventClicked}
          viewEventClick={this.ops1}
          viewEventText="Ops 1"
          viewEvent2Text="Ops 2"
          viewEvent2Click={this.ops2}
          updateEventStart={this.updateEventStart}
          updateEventEnd={this.updateEventEnd}
          moveEvent={this.moveEvent}
          newEvent={this.newEvent}
          onScrollLeft={this.onScrollLeft}
          onScrollRight={this.onScrollRight}
          onScrollTop={this.onScrollTop}
          onScrollBottom={this.onScrollBottom}
          toggleExpandFunc={this.toggleExpandFunc}
        />
      </div>
      <Tips />
    </div>
  );
};

export default withDragDropContext(Basic);
