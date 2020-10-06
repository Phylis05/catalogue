import { combineReducers } from 'redux';
import drinksReducer from './catalogue';

const rootReducer = combineReducers({
  drinks: drinksReducer,
});

export default rootReducer;
