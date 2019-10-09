import React, {useEffect} from 'react'
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css'


const Cockpit = (props) => {

    useEffect(() => {
      //can do anything that componentDidUpdate can do
      //can send http request here
      console.log('[Cockpit.js] useffect')
    
    //getting rid of timer
    const timer = setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000)
    
    return () => {
      clearTimeout(timer); 
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  })

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
    return () => {console.log('[Cockpit.js] cleanup work in 2nd UseEffect')}

  })
    
    //styling the 'Things to Do' using strings for classnames
    const assignedClasses = [];
    let btnClass = '';

    switch (props.tasksLength) {
      case (3): 
      assignedClasses.push('bold', 'red')
         break
      case (2): 
      assignedClasses.push('red')
         break
      case (1):
        assignedClasses.push('orange')
         break
      default: 
      assignedClasses.push('green')
       break
    }
    
    //console.log(assignedClasses[0])
    //add multiple classes for <p> w/ strings
      //const classesFinal = classes.join(' ')
      const classesFinal = 'rocky.' + assignedClasses

    //console.log(classesFinal)
    
    //console.log(`This is classesFinal ${classesFinal}`)


    return (
        
        <div className = {classes.Cockpit}>
           
                <h1>{props.title}</h1>
                <p className={classNames({[classes[assignedClasses[0]]]: true, [classes[assignedClasses[1]]]: true})}>Things to Do!</p>
            
        

        <button 
          className = {classes.specialbtn}
          onClick = {props.clicked}>Show Task</button>
        <button
            onClick = {props.todayClicked}>Show Today Schedule
            
        </button>


        
      </div>
    
        
        
    );

}
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