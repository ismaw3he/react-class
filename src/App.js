import React, { Component } from 'react';
import './App.css';

import User from "./components/user/User";
import Car from "./components/car/Car";


class App extends Component {
  

  render() {


    return (
      <div className="App">
        <User />

        <Car />
      </div>
    );
  }
}

export default App;
