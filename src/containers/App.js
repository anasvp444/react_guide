import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    let person = null;
    if (this.state.showPerson) {
      person = <Persons
        persons={this.state.persons}
        clicked={this.deleteHandler}
        changed={this.changeNameHandler}
      />
    }
    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          toggle={this.togglePersonHandler}
          showPerson={this.state.showPerson}
          title={this.props.title}
        />
        {person}
      </div >
    );
  }
}

export default App;
