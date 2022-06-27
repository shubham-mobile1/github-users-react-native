import {combineReducers} from 'redux';
import bookmark from './bookmark/bookmarkReducer';

const rootReducer = combineReducers({
  bookmark,
});

export default rootReducer;
