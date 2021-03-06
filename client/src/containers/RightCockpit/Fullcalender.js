import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

//import './main.scss'; // webpack must be configured to do this

import '~@fullcalendar/core/main.css';
import '~@fullcalendar/daygrid/main.css';

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
    );
  }
}
