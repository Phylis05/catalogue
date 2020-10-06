import { GET_DRINKS } from '../actions/actionTypes';

const initialState = {
  loading: false,
  drinks: [],
  error: '',
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    default:
      return state;
  }
};

export default drinksReducer;
