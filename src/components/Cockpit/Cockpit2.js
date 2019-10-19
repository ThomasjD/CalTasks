import React, { useEffect } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
//import Navbar from './navBar';

const Cockpit2 = props => {
  //can do anything that componentDidUpdate can do
  //can send http request here
  useEffect(() => {
    // setTimeout(() => {
    //   alert('FUck yea alert');
    // }, 1000);
    console.log('I am inside of [Cockpit2.js] useffect');

    return () => {
      console.log('[Cockpit2.js] cleanup work in useEffect');
    };
    //getting rid of timer

    //const timer =
    // return () => {
    //   //clearTimeout(timer);
    //   console.log('[Cockpit2.js] cleanup work in useEffect');
    // };
  });

  //{classes.Cockpit}
  // {cockpitBootstrap}
  return (
    <React.Fragment>
      <p>hey there buddy</p>
      <button
        className="btn btn-primary"
        type="button"
        onClick={props.deleteCockpit2}
      >
        Delete Cockpit
      </button>
    </React.Fragment>
  );
};
//export default Cockpit;

export default React.memo(Cockpit2);
