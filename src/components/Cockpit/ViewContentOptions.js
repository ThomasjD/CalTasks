import React from 'react';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';

const viewContentOptions = props => {
  //
  let displayOptions = (
    <div>
      <div className="btn-group-toggle d-flex-between" data-toggle="buttons">
        <label className="btn btn-danger m-2 active">
          <button
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            onClick={props.viewContent}
            value="0"
          />{' '}
          Cockpit
        </label>

        <label className="btn btn-primary m-2 active">
          <button
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            onClick={props.viewContent}
            value="1"
          />{' '}
          All Tasks
        </label>

        <label className="btn btn-success m-2 active ">
          <button
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            onClick={props.viewContent}
            value="2"
          />{' '}
          Todays Tasks
        </label>

        <label className="btn btn-warning m-2 ">
          <button
            type="radio"
            name="options"
            id="option3"
            autoComplete="off"
            onClick={props.viewContent}
            value="3"
          />{' '}
          React Syllabus
        </label>
      </div>
    </div>
  );

  return displayOptions;
};

export default viewContentOptions;
