import React, { useEffect } from 'react';
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css';
import Navbar from './navBar';
import DatePickerPicker from '../../containers/RightCockpit/DatePicker.js';
import FreeTime from './FreeTime';

const Cockpit = props => {
  //can do anything that componentDidUpdate can do
  //can send http request here
  useEffect(() => {
    console.log('I am inside of [Cockpit.js] useffect');

    //getting rid of timer
    // const timer = setTimeout(() => {
    //   alert('Cockpit timer alert');
    // }, 1000);

    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  /*
    setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000);
    return () => { //don't have to have a return statement
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []); 
  */
  //if 2nd argument [props.tasks] it doesn't involve tasks -> it won't run this again
  //[props.tasks]

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd UseEffect');
    };
  });

  //styling the 'Things to Do' using strings for classnames
  const assignedClasses = [];
  let btnClass = '';

  switch (props.tasksLength) {
    case 3:
      assignedClasses.push('bold', 'red');
      break;
    case 2:
      assignedClasses.push('red');
      break;
    case 1:
      assignedClasses.push('orange');
      break;
    default:
      assignedClasses.push('green');
      break;
  }

  //console.log(assignedClasses[0])
  //add multiple classes for <p> w/ strings
  //const classesFinal = classes.join(' ')
  const classesFinal = 'rocky.' + assignedClasses;

  return (
    <React.Fragment>
      <div className="">
        <img
          className={classes.leftCockpitIcon}
          src={require('../../Assets/leftCockpitIcon.png')}
        />

        <h5>Pick Content View!</h5>
        <FreeTime />
        <p
          className={classNames({
            [classes[assignedClasses[0]]]: true,
            [classes[assignedClasses[1]]]: true
          })}
        >
          Things to Do!
        </p>
        <DatePickerPicker />
      </div>
    </React.Fragment>
  );
};
//export default Cockpit;

export default React.memo(Cockpit);

// </div>
/* <React.Fragment>
        <div>

      
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked/> Active
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off"/> Radio
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off"/> Radio
        </label>
      </div>
      </div>
      </React.Fragment>     */

/* Radio Buttons
<React.Fragment>
            <div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked/> Today
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option2" autocomplete="off"/> Week
                        </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off"/> Month
                    </label>
                </div>
            </div>
        </React.Fragment> 
*/

/*original navbar
<Navbar
        todayTasksClicked={props.todayTasksClicked}
        allTasksClicked={props.allTasksClicked}
        tittle={props.title}
        deleteCockpit={props.deleteCockpit}
      />
      */
