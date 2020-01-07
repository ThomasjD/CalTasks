// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// //import moment from 'react-moment';

// import { compareAsc, format } from 'date-fns';

// const DatePickerComp = props => {
//   const [startDate, setStartDate] = useState(new Date());

//   //const [finishTime, setFinishTime] = useState(new Date());
//   //let Sunday = moment(startDate).format('MMMM Do YYYY, h:mm:ss a');

//   //let Sunday = format(startDate, 'MM/dd/yyyy, hh:mm:ss a');
//   //onsole.log(JSON.stringify(Sunday));

//   const startDateTimeHandler = date => {
//     setStartDate(date);
//     //props.startDateTimeHandler();
//     //alert(`startDateTime: ${startDate}`);
//     props.startDateTimeHandler(startDate);

//     alert(`inside startDateTimeHandler --> startDateTime: ${startDate}`);
//   };

//   const handleSubmit = () => {
//     props.finishTimeHandler(startDate);
//   };

//   // const finishTimeHandler = startDate => {
//   //   setFinishTime(startDate, startDate => props.finishTimeHandler(startDate));
//   //   console.log(`finishDateTime: ${finishTime}`);
//   // };

//   //console.log(`finishTime: ${finishTime}`);

//   // {
//   //   "name": "State",
//   //   "value": "Wed Jan 08 2020 19:45:00 GMT-0500 (Colombia Standard Time)",
//   //   "subHooks": []
//   // }

//   const startDateTime = (
//     <React.Fragment>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Select Date: </label>
//           <DatePicker
//             selected={startDate}
//             onChange={date => startDateTimeHandler(date)}
//             name="startDate"
//             dateFormat="MM/dd/yyyy"
//             //locale="pt-BR"
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             timeCaption="Start"
//           />
//         </div>

//         <div className="form-group">
//           <button className="btn btn-success">Add Date</button>
//         </div>
//       </form>
//     </React.Fragment>
//   );
//   let showStartDate = null;
//   if (startDate) {
//     showStartDate = { startDate };
//   }
//   // const endTime = (
//   //   <DatePicker
//   //     selected={startDate}
//   //     onChange={startDate => finishTimeHandler(startDate)}
//   //     showTimeSelect
//   //     timeFormat="HH:mm"
//   //     timeIntervals={15}
//   //     timeCaption="Stop"
//   //     dateFormat="h:mm aa"
//   //   />
//   // );
//   //{startDateTime}
//   // <div>{finishTime ? <div>{finishTime}</div> : null}</div>
//   return (
//     <React.Fragment>
//       <div>{startDateTime}</div>
//     </React.Fragment>
//   );
// };

// // const [startDate, setStartDate] = useState(new Date());
// // return (
// //   <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

// // );
// // };

// export default DatePickerComp;

// import moment from 'moment';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { compareAsc, format } from 'date-fns';

class DatePickerPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //startDate: new Date(),
      showDate1: false,
      showDate2: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    let currenShowDate1 = this.state.showDate1;
    this.setState(
      {
        startDate: date,
        showDate1: !currenShowDate1
      },
      //() => this.props.startDateTimeHandler(this.state.startDate)
      () => console.log(Object.keys(this.state.startDate))
    );
    console.log(JSON.stringify(this.state.startDate));
  }

  handleChange2(date) {
    let currenShowDate2 = this.state.showDate2;
    this.setState(
      {
        startDate2: date,
        showDate2: !currenShowDate2
      },
      () => this.props.finishTimeHandler(this.state.startDate2)
    );
    console.log(`inside handleChange2 datePicker ${this.state.startDate}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    alert(main);
    //console.log(main.format('L'));
  }
  //name="startDate"
  //dateFormat="MM/dd/yyyy"
  //dateFormat="PP"
  //locale="p-BR"
  //timeFormat="p"

  render() {
    if (this.state.showDate1) {
      // showDate1 = <div>showDate1: {this.state.startDate}</div>;
      let currenShowDate1 = this.state.showDate1;

      this.setState({
        showDate1: !currenShowDate1
      });
    }

    if (this.state.showDate2) {
      // showDate2 = <div>showDate2: {this.state.startDate}</div>;

      let currenShowDate2 = this.state.showDate2;

      this.setState({
        showDate2: !currenShowDate2
      });
    }
    //console.log(Object.keys(this.state.startDate));
    //console.dir(this.state.startDate);

    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Select Event Date & Time: </label>

              <DatePicker
                placeholderText="Choose Start Time"
                selected={this.state.startDate}
                onChange={date => this.handleChange(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Start"
                dateFormat="MMMM d, yyyy h:mm aa"
              />

              <DatePicker
                placeholderText="Choose End Time"
                selected={this.state.startDate2}
                onChange={date => this.handleChange2(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="End"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Add Date</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default DatePickerPicker;
