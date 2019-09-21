import React from 'react'
import taskStyle from './Task.module.css'
// import './Task.css'
// import Radium from 'radium';
import rocky from '../App.module.css'
//import wtf from './SpecialBtn.module.css'
const task = (props) => {

//onmouseenter = 'props.mouseover'
    return (
        <div className = {taskStyle.Task}>
        <div className = {taskStyle.TaskDeadlineSep}>
            <p className = {taskStyle.TaskDeadline} >Task: {props.todo}</p>
            <p className = {taskStyle.TaskDeadline} >Deadline:  {props.deadline}</p>
            <div className = {rocky.showTaskDetails2}> Hover to show Location
            <p className = {rocky.showTaskDetails}>{props.location}</p>
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
