import React, { useContext } from 'react';
import StoreDataContext from '../../../context/StoreDataContext';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
//import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  const storeDataContext = useContext(StoreDataContext);
  // let displayModal = null;
  // if (storeDataContext.contentChoice === '12') {
  //   displayModal = (
  //     <Aux>
  //       <div
  //         className={classes.Modal}
  //         //bind style here to something dynamic, needs to be js object
  //         //If props.show = true
  //         // -transform to translateY(0)
  //         // -which is the position defined in css,

  //         style={{
  //           //set transform property -> vh = viewport (slide it outside of the screen)
  //           transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
  //           opacity: props.show ? '1' : '0' //is show true = opacity 100% if not then 0%
  //         }}
  //       >
  //         {props.children}
  //       </div>
  //     </Aux>
  //   );
  // }
  return (
    <Aux>
      <div>{storeDataContext.contentChoice}</div>
      <div
        className={classes.Modal}
        //bind style here to something dynamic, needs to be js object
        //If props.show = true
        // -transform to translateY(0)
        // -which is the position defined in css,
        //set transform property -> vh = viewport (slide it outside of the screen)
        //is show true = opacity 100% if not then 0%
        style={{
          transform:
            storeDataContext.contentChoice === '1'
              ? 'translateY(0)'
              : 'translateY(-100vh)',
          opacity: storeDataContext.contentChoice === '1' ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;

{
  /* <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux> */
}
