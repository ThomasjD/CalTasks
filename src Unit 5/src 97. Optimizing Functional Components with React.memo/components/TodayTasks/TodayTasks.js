import React from 'react'
import TodayTask from './TodayTask/TodayTask'

const todayTasks = (props) => {

//get props from app.js, run through each element in state to feed into <Task>
    //todo,deadline,location,key,click, changed sent to <Task>
return props.monday.map((monday, index) => {
    return (
    <TodayTask 
    id = {monday.id} 
    task = {monday.task}
    key = {monday.id}>
    </TodayTask>
    )
  })
}
export default todayTasks;

/*
click = {() => props.clicked(index)}
    changed = {(event) => props.changed (event, task.id)}>Change Task (below)
*/