import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDrink } from '../actions/index';
import CurrentDrink from '../containers/CurrentDrink';

const ShowDrink = ({ getDrink, drinks }) => {
  useEffect(() => {
    getDrink();
  });

  console.log(drinks);
  return (
    <div>
      {drinks.map(drink => (
        <CurrentDrink key={drink.idDrink} drink={[drink]} />
        // JSON.stringify(drink)
      ))}
    </div>
  );
};

ShowDrink.propTypes = {
  drinks: PropTypes.array.isRequired,
  getDrink: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  drinks: state.drinks.drinks,
});

export default connect(mapStateToProps, { getDrink })(ShowDrink);