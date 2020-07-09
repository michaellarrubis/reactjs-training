import { combineReducers } from 'redux'

import category from './category/categoryReducer'

const reducer = combineReducers({
  category
});

export default reducer