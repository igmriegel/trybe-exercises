import React, { Component } from 'react'

class PersonalFieldset extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Informações pessoais</legend>
        <label>
          Nome:
        <input
            name="name"
            type="text"
            onChange={ handleChange }
          />
        </label>
        <label>
          Email:
        <input
            name="email"
            type="email"
            onChange={ handleChange }
          />
        </label>
        <label>
          Idade:
          <select
            name="age"
            defaultValue=""
            onChange={ handleChange }
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

export default PersonalFieldset;
