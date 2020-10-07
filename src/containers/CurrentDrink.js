import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CurrentDrink = ({ drink }) => (
  <div className="card m-2 d-inline-flex text-center drink-card" style={{ width: '20em' }}>
    <img src={drink[0].strDrinkThumb} className="card-img-top" alt="images" />
    <p>
      #
      {drink[0].idDrink}
    </p>
    <h5>{drink[0].strDrink}</h5>
  </div>
);

CurrentDrink.propTypes = {
  drink: PropTypes.array.isRequired,
};

export default CurrentDrink;
