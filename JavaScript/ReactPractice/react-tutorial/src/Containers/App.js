import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'


class App extends Component{
// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons : [
//     {name : 'Test1' , content : 'Kuch nahi'},
//     {name : 'Sourabh' , content : 'Nothing'},
//     {name : 'Bola toh' , content : 'Dobara nhi bol rha', child : 'Fir aa gya'}
//     ]
//   });

  state = {
    persons : [
    {id:'asfh1', name : 'Test1' , content : 'Kuch nahi'},
    {id:'fajksfhw', name : 'Sourabh' , content : 'Nothing'},
    {id:'asfdjj2', name : 'Bola toh' , content : 'Dobara nhi bol rha'}
    ],
    show_data : false
  };

  stateChangeHandler = () => {
    const currentState = this.state.show_data;
    this.setState({ show_data : !currentState});
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({ persons: persons});
  }
 
 getInputFromFunctionalComp = (event, id) => {
  
  let personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({ persons: persons});
  // this.setState({
  //   persons : [
  //   {name : event.target.value, content : 'Kuch nahi'},
  //   {name : 'Sourabh' , content : 'Nothing', child : 'Fir aa gya'},
  //   {name : this.state.persons[2].name , content : 'Nothing' , child : 'Hua na Chamatkaaar!'}
  //   ]
  // });
 }
 
  render(){

    let persons = null;
      if (this.state.show_data){
            persons = (
              <div>
                <Persons person_data = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.getInputFromFunctionalComp}/>
              </div>
            );
          }

    return (
    <div className="App">
    <Cockpit clicked = {this.stateChangeHandler}/>
          {persons}
     </div>
    );
  }
}

export default App;
