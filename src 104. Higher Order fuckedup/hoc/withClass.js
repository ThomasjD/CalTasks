import React from 'react';





const withClass = (WrappedComponent, className) => {
    return props => (
        <div className = {className}></div>
    )

}


export default withClass


/*
const withClass = props => (

    <div className = {props.passClass}>{props.children}</div>
)
*/
