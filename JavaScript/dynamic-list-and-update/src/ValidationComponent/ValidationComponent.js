import React from 'react'

const validationComponent = props =>{
	
	let len = props.length;
	const messeges = ['Text too short', 'Text long enough'];
	let messege = messeges[1];
	if(len < props.minLength){
		messege = messeges[0];
	}
	return(
		<p> {messege} </p>
	);
}

export default validationComponent;