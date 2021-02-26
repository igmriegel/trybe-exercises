import React, { Component } from 'react';

class ButtonCount extends Component {
  constructor() {
    super()
    this.state = {numDeCliques: 0};
  }

  handleClick = () => {
    this.setState((prevState, _props) => ({
      numDeCliques: prevState.numDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>Clicked {this.state.numDeCliques} times</button>
  }
}

export default ButtonCount;
