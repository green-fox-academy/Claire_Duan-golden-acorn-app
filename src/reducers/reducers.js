import { combineReducers } from 'redux';
import acorn from './acorns';

const rootReducer = combineReducers({
  amount: acorn,
});

export default rootReducer;
