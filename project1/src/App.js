import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';

import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 20, id: 'saa'},
      {name: 'sasa', age: 230, id: 'saasa'},
      {name: 'sadfs', age: 10, id: 'ssa'},
    ],
    showState: false

  };

  nameChangedHendler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons,
    })
  };
  switchHandler = (newName) => {
    console.log(this.state);
    this.setState({
      persons: [
        {name: newName, age: 10},
        {name: 'aa', age: 20},
        {name: 'sadfffs', age: 10},
      ]
    });
    console.log(this.state)
  };
  showHendler = (event) => {
    const state = this.state.showState;
    this.setState({
      showState: !state
    })
  };
  removeHendler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  };

  render() {
    const style = {
      backgroundColor: '#eee',
      border: '1px solid #ddd',
      padding: '20px',
      width: '200px'
    };
    let persons = null;
    if (this.state.showState) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
          return <Person
          name={item.name}
          age={item.age}
          changeName={(event) => this.nameChangedHendler(event, item.id)}
          click={this.removeHendler.bind(this, index)}
          key={item.id}
          />
        })}

        </div>

      );
    }
    return (
      <div className="App">
        <h1>hi im ammar</h1>
        <button style={style} onClick={this.showHendler}>switch</button>
        {persons}
      </div>
    );
  }


}

export default App;
