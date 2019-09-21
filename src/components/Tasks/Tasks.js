import React from 'react'
import Task from './Task/Task'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
const tasks = (props) => {

//get props from app.js, run through each element in state to feed into <Task>
    //todo,deadline,location,key,click, changed sent to <Task>
return props.tasks.map((task, index) => {
    return (<ErrorBoundary key = {task.id}>
    <Task 
    todo = {task.todo} 
    deadline = {task.deadline}
    location = {task.location}
    key = {task.id}
    click = {() => props.clicked(index)}
    changed = {(event) => props.changed (event, task.id)}>Change Task (below)</Task>
    </ErrorBoundary>
    )
  })
}
export default tasks;

