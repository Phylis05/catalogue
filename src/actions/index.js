import axios from 'axios';
import { GET_DRINKS } from './actionTypes';
// import { FETCH_DRINKS_REQUEST, FETCH_DRINKS_SUCCESS, FETCH_DRINKS_FAILURE } from './actionTypes';

const getDrinks = () => async dispatch => {

};

export default getDrinks;
// export const fetchDrinksRequest = () => ({
//   type: FETCH_DRINKS_REQUEST,
// });

// export const fetchDrinksSuccess = drinks => ({
//   type: FETCH_DRINKS_SUCCESS,
//   payload: drinks,
// });

// export const fetchDrinksFailure = error => ({
//   type: FETCH_DRINKS_FAILURE,
//   payload: error,
// });

// export const fetchDrinks = () => async dispatch => {
//   dispatch(fetchDrinksRequest);
//   try {
//     const allDrinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
//     const drinkData = await Promise.all(allDrinks.data.results.map(async drink => {
//       const drinkRecord = await axios.get(drink.url);
//       return drinkRecord.data;
//     }));
//     dispatch(fetchDrinksSuccess(drinkData));
//   } catch (err) {
//     const errorMsg = err.message;
//     dispatch(fetchDrinksFailure(errorMsg));
//   }
// };
