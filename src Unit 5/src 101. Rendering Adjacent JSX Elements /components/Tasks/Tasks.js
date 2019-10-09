import React, {PureComponent} from 'react'
import Task from './Task/Task'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'


class Tasks extends PureComponent {

    constructor(props) {
        super(props)
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Tasks] getDerivedStateFromProps')
    //     return state
    // }

    //niche -removed
    // componentWillReceiveProps(props) {
    //    console.log('[Persons.js] componentWillReceiveProps', props); 
    // }

    /*
    shouldComponentUpdate (nextProps, nextState) {
        console.log('[Tasks] shouldComponentUpdate')
        //comparing if props have changed
        if (nextProps.tasks !== this.props.tasks) {
            return true
        } else {
            return false
        }
       
    }
    */
   
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Tasks] getSnapshotBeforeUpdate')
        return {message: 'Snapshot'}
    }

    // componentWillUpdate() {
    //     return 
    // }

    componentDidUpdate(prevProps, prevState, message) {
        console.log('[Tasks] componentDidUpdate')
        console.log(message)
    }

    componentWillUnmount() {
        console.log ('[Tasks.js] componentWillUnmount' )
    }

    render () {
        console.log('[Tasks] rendering...')
        
        return this.props.tasks.map((task, index) => {
            return (<ErrorBoundary key = {task.id}>
            <Task 
            todo = {task.todo} 
            deadline = {task.deadline}
            location = {task.location}
            key = {task.id}
            click = {() => this.props.clicked(index)}
            changed = {(event) => this.props.changed (event, task.id)}>Change Task (below)</Task>
            </ErrorBoundary>
            )
          })
        } 

    }


export default Tasks;







/* original functional component

import React from 'react'
import Task from './Task/Task'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const tasks = (props) => {

    console.log('[Tasks.js] rendering')

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

*/