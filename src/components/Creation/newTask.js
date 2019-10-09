import React from 'react';
import NavBar from '../Cockpit/navBar';

const newTask = props => {
  return (
    <React.Fragment>
      <div class="container">
        <form>
          <div className="form-group">
            <label for="newTask">Task</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="newTask"
              placeholder="Enter new task."
            />
          </div>

          <div className="form-group">
            <label for="category">Category</label>
            <select className="form-control" id="category">
              <option>Errand</option>
              <option>Apointment</option>
              <option>Preparation</option>
            </select>
          </div>

          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default newTask;
