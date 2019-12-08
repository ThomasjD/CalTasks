import React, { Component } from 'react';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
// onSubmit = e => {
// e.preventDefault();

// const [newEvent, setNewEvent] = useState({
//   title: ''
// });

// setNewEvent({
//   [e.target.name]: e.target.value
// });
// let bigEvent = { [e.target.name]: e.target.value };
// props.newestEvent(bigEvent);
// };

class NewEvent extends Component {
  state = {
    eventTitle: '',
    day: '',
    month: '',
    year: '',
    time: ''
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.newestEvent(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={this.state.title}
                onChange={e => this.change(e)}
              />
            </div>

            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={e => this.change(e)}
              />
            </div>

            <button onClick={e => this.onSubmit(e)}>Submit</button>
            <DatePickerPicker />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default NewEvent;

// <div className="form-group">
//             <label for="exampleFormControlTextarea1">Example textarea</label>
//             <textarea
//               value = 'Search on Ebay'
//               className="form-control"
//               rows="3">
//                </textarea>
//           </div>