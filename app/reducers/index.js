import { combineReducers } from 'redux';
import navReducer from './navReducer';
import rssFeedReducer from './rssFeedReducer';


const rootReducer = combineReducers({
  nav: navReducer,
  rssFeed: rssFeedReducer,
});

export default rootReducer;
