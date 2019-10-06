import React, { Component } from 'react';
import classes from './App.css';
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


    let person = null;
    let btnClass = '';

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
      btnClass = classes.Red;
    }

    const changeClasses = []
    if (this.state.persons.length <= 2) {
      changeClasses.push(classes.bold);
    }
    if (this.state.persons.length <= 1) {
      changeClasses.push(classes.red);
    }
    return (
      <div className={classes.App}>
        <h1 className={changeClasses.join(' ')}>Welcome</h1>
        <p className={changeClasses.join(' ')}>testing</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Change Name</button>
        {person}
      </div >
    );
  }
}

export default App;
