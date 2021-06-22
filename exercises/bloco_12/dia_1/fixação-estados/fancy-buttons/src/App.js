import React, { Component } from 'react';
import Buttons from './Components/buttons';
import ButtonCount from './Components/buttonCount';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Buttons />
        <ButtonCount />
      </>
    );
  }
}

export default App;
