import React, {Component} from 'react'
import taskStyle from './Task.module.css'
import Aux from '../../../hoc/Aux'

class Task extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        console.log('[Task] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Task] getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('[Task] componentDidUpdate')
    }
    
    
  

    render() {
        console.log('[Task.js] rendering...')


        return (
            <Aux>
            
                <div className = {taskStyle.Task}>
                <div key='1a' className = {taskStyle.TaskDeadlineSep}>
                <p key='1b' className = {taskStyle.TaskDeadline} >Task: {this.props.todo}</p>

                <p key='1c' className = {taskStyle.TaskDeadline} >Deadline:  {this.props.deadline}</p>

                <div key='1d'  className = {taskStyle.showTaskDetails2}> Hover to show Location
                <p className = {taskStyle.showTaskDetails}>{this.props.location}</p>
                </div>
                <p className = {taskStyle.delete} onClick = {this.props.click}>Delete Task</p>
                </div>   
            
            
    
            <p key='1e' >{this.props.children}</p>
            
    
            <input className = {taskStyle.inputStyle} type= 'text' onChange = {this.props.changed} value={this.props.todo}/>
            </div>
        
            </Aux>
        )
            
    }
    
}


export default Task;


































/*
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
*/





/*
if (rnd > 0.7) {
    throw new Error ('Something went wrong')
}
*/
