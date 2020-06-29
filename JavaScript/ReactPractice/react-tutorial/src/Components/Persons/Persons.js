import React from 'react';
import Person from './Person/Person'

const persons = (props) => 
      	props.person_data.map((p, index) => {
          return <Person name = {p.name} content = {p.content}
          	clicked = {() => props.clicked(index)} 
            key = {p.id}
            changed = {(event) => props.changed(event,p.id)}/>
            });

export default persons;