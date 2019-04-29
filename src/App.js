import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    var a = 'abcd';
    return (
      <div className="App">
          안녕하세요.
          {a}
      </div>
    );
  }
}

export default App;

