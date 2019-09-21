import React from 'react'
//import rocky from '../../containers/App.module.css'
import classNames from 'classnames';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    //styling the 'Things to Do' using strings for classnames
    const assignedClasses = [];
    let btnClass = '';

    switch (props.tasks.length) {
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
    
    console.log(assignedClasses[0])
    //add multiple classes for <p> w/ strings
      //const classesFinal = classes.join(' ')
      const classesFinal = 'rocky.' + assignedClasses

    console.log(classesFinal)
    
    console.log(`This is classesFinal ${classesFinal}`)


    return (
        
        <div className = {classes.Cockpit}>
           
                <h1>Medellin</h1>
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


export default cockpit;


// </div>