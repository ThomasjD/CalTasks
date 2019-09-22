import React, { Component } from 'react'
import App from '../../containers/App'
class MaxReact extends Component {
    constructor() {
        //super(props)props
    }
    state = {
     
        maxReact: [
            {id: 'xvl2il', lesson: '93. Controlling the useEffect()', completion: false },
            {id: 'bbb3kk', lesson: '94. Cleaning Lifecycle Hooks', completion: false },
            {id: 'kjh4k2', lesson: '95. Cleanup Work with useEffect()', completion: false }   
          ]
    }
render() {

    return (
        <App 
        maxReact = {this.state.maxReact}
        />
    ) 

}

}


export default MaxReact;