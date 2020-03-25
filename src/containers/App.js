import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from  '../components/Person/Person';
import styles from  './App.module.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id:'12', name:'savaj', age:'26' },
      { id:'13', name:'shefali', age:'30' },
      { id:'14', name:'kinjal', age:'32' },
    ],
    showPersons: false
  }
  
  nameChangedHandler = (event, id) => {

  }

  deletePersonHandler = (index) => {

  }
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {
    let persons = null;
    console.log(this.state.showPersons);
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index ) => {
              return <ErrorBoundary key={person.id}>
                <Person
                click={() => this.deletePersonHandler( index )}
                name = {person.name}
                age = {person.age}
                changed = {(event) => this.nameChangedHandler( event, person.id )} /></ErrorBoundary>
            })
          }
        </div>
      );
    }
    return (
      <div className={styles.App}>
        <button onClick={this.togglePersonHandler}>Switchname</button>
        {/* <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {persons}
      </div>
    );
  }
  
}

export default App;
