/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_DRINKS, GET_DRINK, CHANGE_FILTER } from './actionTypes';

export const getDrinks = () => dispatch => {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then(response => {
    const allDrinks = response.data.drinks;
    dispatch({
      type: GET_DRINKS,
      payload: allDrinks,
    });
  }).catch(error => {
    console.log(error.message);
  });
};

export const getDrink = () => async dispatch => {
  try {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    dispatch({
      type: GET_DRINK,
      payload: res.data.drinks,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
