import { GET_DRINKS, GET_DRINK } from '../actions/actionTypes';

const initialState = {
  drinks: [],
  drink: {},
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };

    case GET_DRINK:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default drinksReducer;
