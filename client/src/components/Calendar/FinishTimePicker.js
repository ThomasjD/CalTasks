import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'react-moment';
import { compareAsc, format } from 'date-fns';

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  //let Sunday = moment(startDate).format('MMMM Do YYYY, h:mm:ss a');

  let Sunday = format(startDate, 'MM/dd/yyyy, hh:mm:ss a');

  console.log(JSON.stringify(Sunday));

  // {
  //   "name": "State",
  //   "value": "Wed Jan 08 2020 19:45:00 GMT-0500 (Colombia Standard Time)",
  //   "subHooks": []
  // }

  const startDateTime = (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
    />
  );
  const endTime = (
    <DatePicker
      selected={startDate}
      onChange={date => setEndTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );

  return (
    <div>
      {startDateTime}
      {endTime}
    </div>
  );
};

// const [startDate, setStartDate] = useState(new Date());
// return (
//   <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

// );
// };

export default DatePickerComp;
