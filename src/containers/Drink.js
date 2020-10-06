import React from 'react';
import PropTypes from 'prop-types';

const Drink = ({ drink }) => (
  <div>
    <h1>{drink}</h1>
  </div>
);

Drink.propTypes = {
  drink: PropTypes.string.isRequired,
};

export default Drink;
