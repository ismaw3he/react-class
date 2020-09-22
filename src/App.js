import React, { Component } from 'react';
import './App.css';

import User from "./components/user/User";
import Car from "./components/car/Car";
import Error from "./components/Error";


class App extends Component {



  render() {
    return (
      <div className="App">
        <User />

        <Error>
          <Car />
        </Error>
      </div>
    );
  }
}

export default App;
