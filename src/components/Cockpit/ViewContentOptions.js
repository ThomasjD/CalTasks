import React from 'react';
import classNames from 'classnames';
import classes from './Cockpit.module.css';
// //import rocky from '../../containers/App.module.css'
// import classNames from 'classnames';
// import classes from './Cockpit.module.css';
// import Navbar from './navBar';

const viewContentOptions = props => {
  //
  let displayOptions = (
    <React.Fragment>
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
              onClick={props.contentViewHandler}
              value="1"
            />{' '}
            Tasks For Week
          </label>

          <label className="btn btn-success m-2 active ">
            <button
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={props.contentViewHandler}
              value="2"
            />{' '}
            Tasks by Day
          </label>

          <label className="btn btn-warning m-2 active">
            <button
              type="radio"
              name="options"
              id="option3"
              autoComplete="off"
              onClick={props.contentViewHandler}
              value="3"
            />{' '}
            React Syllabus
          </label>

          <label className="btn  dropdown m-2 active">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tasks by Day
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                className="dropdown-item"
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.contentViewHandler}
                value="0"
              >
                {' '}
                Mon
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Tue
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Wed
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Thur
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Fri
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Sat
              </button>
              <button
                className="dropdown-item"
                type="button"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={props.viewContent}
                value="0"
              >
                {' '}
                Sun
              </button>
            </div>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
  //<div class=" "></div></div>

  return displayOptions;
};

export default viewContentOptions;
/*
<label className="btn btn-success m-2 active ">
            <button
              type="button"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={props.viewContent}
              value="2"
            />{' '}
            Tasks by Day
          </label>
*/
