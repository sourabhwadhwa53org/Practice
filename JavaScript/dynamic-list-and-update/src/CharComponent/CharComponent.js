import React from 'react'
import './CharComponent.css'

const charComponent = (props) =>{

	return(
		<span className = 'charComponent' onClick = {props.click}> {props.children} </span>
	);
}

export default charComponent;