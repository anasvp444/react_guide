import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { name: "Anas0", age: 25 },
      { name: "Anas1", age: 26 },
      { name: "Anas2", age: 27 },
    ],
    otherState: 'some other state'
  }


  swithNameHandler = (Name) => {
    this.setState(
      {
        persons: [
          { name: Name, age: 25 },
          { name: "Anas1", age: 26 },
          { name: "Anas2", age: 271 },
        ]
      }
    )
  }

  changeNameHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: "Anas0", age: 25 },
          { name: "Anas1", age: 26 },
          { name: event.target.value, age: 271 },
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'green'
    };
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.swithNameHandler.bind(this, "asdsa")}
          change={this.changeNameHandler}>
          Testing
        </Person>
        <button style={style} onClick={() => this.swithNameHandler('fff')}>Change Name</button>
      </div >
    );
  }
}

export default App;
