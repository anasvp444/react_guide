import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { id: "1", name: "Anas0", age: 25 },
      { id: "2", name: "Anas1", age: 26 },
      { id: "3", name: "Anas2", age: 27 },
    ],
    otherState: 'some other state',
    showPerson: false
  }


  changeNameHandler = (event, personId) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    })

    const person = { ...this.state.persons[personIndex] };

    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState(
      { persons }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState(
      { showPerson: !doesShow }
    )
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    console.log(personIndex)
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };


    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deleteHandler(index)}
              change={(event) => this.changeNameHandler(event, person.id)}
              key={person.id} />
          })}

        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }
    if (this.state.persons.length <= 1) {
      classes.push('red');
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Welcome</h1>
        <p className={classes.join(' ')}>testing</p>
        <button style={style} onClick={this.togglePersonHandler}>Change Name</button>
        {person}
      </div >
    );
  }
}

export default App;
