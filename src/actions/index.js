/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_DRINKS } from './actionTypes';

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
