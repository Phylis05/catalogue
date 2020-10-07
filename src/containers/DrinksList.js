import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDrinks, changeFilter } from '../actions/index';
import Drink from './Drink';
import CategoryFilter from '../components/Filter';

const DrinkList = ({
  getDrinks, drinks, changeFilter, filter,
}) => {
  useEffect(() => {
    getDrinks();
  }, []);

  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredDrinks = () => (filter === 'ALL' ? drinks : drinks.filter(drink => {
    const types = JSON.stringify(drink.strCategory);

    for (let i = 0; i < types.length; i += 1) {
      if (types[i].strCategory === filter) return true;
    }
    return false;
  }));

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      {filteredDrinks().map(drink => (
        <Drink key={drink.idDrink} drink={[drink]} />
      ))}
    </div>
  );
};

DrinkList.propTypes = {
  drinks: PropTypes.array.isRequired,
  getDrinks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  drinks: state.drinks.drinks,
  filter: state.filter,
});

export default connect(mapStateToProps, { getDrinks, changeFilter })(DrinkList);
