import React, { Component } from 'react';

class Buttons extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleClick() {
    console.log('você clicou!!')
  }
  
  handleDoubleClick() {
    console.log('você deu clique duplo!!')
  }
  
  handleMouseOver() {
    console.log('você passou pelo botão!!')
  } 

  render() {
    return (
      <div className="Buttons">
        <button onClick={this.handleClick}>Botão 1</button>
        <button onDoubleClick={this.handleDoubleClick}>Botão 2</button>
        <button onMouseOver={this.handleMouseOver}>Botão 3</button>
      </div>
    );
  }
}

export default Buttons;
