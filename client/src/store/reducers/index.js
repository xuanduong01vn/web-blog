import { combineReducers } from 'redux';
import reducerPosts from './reducerPosts.js';

const rootReducer = combineReducers({
  infoPost: reducerPosts,
})


export default rootReducer;
