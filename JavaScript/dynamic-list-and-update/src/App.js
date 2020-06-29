import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'


class App extends Component {

  state ={
    textValue: '',
    textLength : 0,
    minLength : 10,
    characters : []
  }

  changeTextHandler = (event) =>{
    let text = event.target.value;
    let chars = text.split('');
    this.setState({
      textValue : text,
      textLength : text.length,
      characters : chars
    });
  }

  clickHandler = (event,charIndex) =>{
    const chars = [...this.state.characters];
    chars.splice(charIndex,1);
    const text = chars.join('');
    this.setState({
      textValue : text,
      textLength : text.length,
      characters : chars
    });
  }
  render() {
    let charComp = null;
    charComp = (
         <div>
          {this.state.characters.map((char, index) => {
            return <CharComponent key = {index} click = {(event) => this.clickHandler(event,index)}>
            {char}
            </CharComponent>
          })}
        </div>
      );

    return (
      <div className="App">
      <h1>Enter the text in the box. We need to validate it. </h1>
      <textarea onChange = {this.changeTextHandler} value = {this.state.textValue}> </textarea> 
      <p>{this.state.textLength}</p>
      <ValidationComponent length = {this.state.textLength} minLength = {this.state.minLength}/>
      {charComp}
      </div>
    );
  }
}

export default App;
