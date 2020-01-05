import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'react-moment';
import { compareAsc, format } from 'date-fns';

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  //let Sunday = moment(startDate).format('MMMM Do YYYY, h:mm:ss a');

  let Sunday = format(startDate, 'MM/dd/yyyy, hh:mm:ss a');
  console.log(JSON.stringify(Sunday));

  // {
  //   "name": "State",
  //   "value": "Wed Jan 08 2020 19:45:00 GMT-0500 (Colombia Standard Time)",
  //   "subHooks": []
  // }
  return (
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
};

// const [startDate, setStartDate] = useState(new Date());
// return (
//   <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

// );
// };

export default DatePickerComp;

// import moment from 'moment';
// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class DatePickerPicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: moment()
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let main = this.state.startDate;
//     console.log(main.format('L'));
//   }

//   render() {
//     return (
//       <div className="container">
//         <h3>React Datepicker Example</h3>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label>Select Date: </label>
//             <DatePicker
//               selected={this.state.startDate}
//               onChange={this.handleChange}
//               name="startDate"
//               dateFormat="MM/DD/YYYY"
//             />
//           </div>
//           <div className="form-group">
//             <button className="btn btn-success">Add Date</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default DatePickerPicker;
