import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title="Track Covid Cases" font="italic" />
      </div>
        
    );
  }
}

export default App;
