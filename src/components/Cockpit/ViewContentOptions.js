import React from 'react';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';

const viewContentOptions = props => {
  let displayOptions = (
    <div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-danger m-1 active">
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

        <label className="btn btn-primary m-1 active">
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

        <label className="btn btn-success m-1 active ">
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

        <label className="btn btn-warning m-1 ">
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
