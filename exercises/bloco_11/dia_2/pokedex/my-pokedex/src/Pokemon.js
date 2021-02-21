import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return <section className="pokemon-card">
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
      <img src={image} alt={`${name} sprite`}/>
    </section>
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  })
}

export default Pokemon
