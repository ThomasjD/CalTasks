import React from 'react'
import taskStyle from './Task.module.css'

// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const task = (props) => {

//onmouseenter = 'props.mouseover'

const rnd = Math.random();

    console.log('[Task] rendering')

    return (
        <div className = {taskStyle.Task}>
        <div className = {taskStyle.TaskDeadlineSep}>
            <p className = {taskStyle.TaskDeadline} >Task: {props.todo}</p>
            <p className = {taskStyle.TaskDeadline} >Deadline:  {props.deadline}</p>
            <div className = {taskStyle.showTaskDetails2}> Hover to show Location
            <p className = {taskStyle.showTaskDetails}>{props.location}</p>
            </div>
            <p className = {taskStyle.delete} onClick = {props.click}>Delete Task</p>   
        </div>
        

        <p>{props.children}</p>

        <input className = {taskStyle.inputStyle} type= 'text' onChange = {props.changed} value={props.todo}/>
        </div>
    )
    }
//export default Radium(task)
export default task

/*
if (rnd > 0.7) {
    throw new Error ('Something went wrong')
}
*/
