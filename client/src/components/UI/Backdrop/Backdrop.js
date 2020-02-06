import React, { useContext } from 'react';
import StoreDataContext from '../../../context/StoreDataContext';
import classes from './Backdrop.module.css';

const Backdrop = props => {
  const storeDataContext = useContext(StoreDataContext);
  let contentViewObject = {
    target: {
      value: '0'
    }
  };

  if (storeDataContext.contentChoice === '1') {
    return (
      <div
        className={classes.Backdrop}
        onClick={() => storeDataContext.contentViewHandler(contentViewObject)}
      ></div>
    );
  }
  //||storeDataContext.contentChoice === '12'
  // {
  //   storeDataContext.contentChoice === '1' ? (
  //     <div className={classes.Backdrop}></div>
  //   ) : null;
  // }
};

export default Backdrop;
//onClick={props.clicked}
