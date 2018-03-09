import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheeseList from './components/cheese-list';

class App extends Component {

  render() {
    const cheeses =   [
      "Bath Blue",
      "Barkham Blue",
      "Buxton Blue"
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CheeseList</h1>
        </header>
        <CheeseList cheeseList={cheeses}/>
      </div>
    );
  }
}

export default App;
