import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: 'MindaugasFirstState',
        lastName: 'MindaugasLastState'
      },
      company: 'MiU freelancer state'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, my name is { this.state.name.firstName } { this.state.name.lastName }! I work at { this.state.company }.</p>
          <button onClick={ () => { 
            this.setState( () => { 
              return {
                name: { firstName: 'MindaugasFirstOnClick', lastName: 'MindaugasLastOnClick' },
                company: 'MiU freelancer onClick' }}, 
              () => { console.log(this.state) } 
              ) } }>
              Change Name
          </button>
        </header>
      </div>
    );
  }
}
  

export default App;