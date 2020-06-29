import React from 'react'
import './Person.css'

const person = (props) => {
	return (
		<div className = 'Person' >
		<p onClick = {props.clicked}> This is {props.name} and I have {props.content}! </p>
		<p> {props.children}</p>
		<input type='text' value = {props.name} onChange = {props.changed}/>
		</div>
		);
}

export default person;