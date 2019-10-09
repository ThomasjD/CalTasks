import React from 'react'
//import taskStyle from './Task.module.css'
// import './Task.css'
// import Radium from 'radium';
//import rocky from '../../../containers/App.module.css'
//import wtf from './SpecialBtn.module.css'
const todayTask = (props) => {


    return (
        <div >
        <div >
            <p >Part of Day: {props.id}</p>
            <p  >Task:  {props.task}</p>
           
        </div>
        
        <p>{props.children}</p>

        
        </div>
    )
    }
//export default Radium(task)
export default todayTask


/*
<div className = {taskStyle.Task}>
        <div className = {taskStyle.TaskDeadlineSep}>
            <p className = {taskStyle.TaskDeadline} >Part of Day: {props.id}</p>
            <p className = {taskStyle.TaskDeadline} >Task:  {props.task}</p>
           
        </div>
        
        <p>{props.children}</p>

        
        </div>
        */