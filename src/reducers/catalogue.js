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

// const drinksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DRINKS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_DRINKS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         drinks: action.payload,
//         error: '',
//       };
//     case FETCH_DRINKS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         drinks: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default drinksReducer;
