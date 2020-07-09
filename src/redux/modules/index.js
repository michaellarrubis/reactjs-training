import { combineReducers } from 'redux';

import category from './category/categoryReducer';
import joke from './joke/jokeReducer';

const reducer = combineReducers({
  category,
  joke
});

export default reducer;