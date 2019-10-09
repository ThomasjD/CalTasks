import React from 'react';


const withClass = props => (

    <div className = {props.passClass}>{props.children}</div>


)



export default withClass;


