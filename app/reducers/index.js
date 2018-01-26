import { combineReducers } from 'redux';
import navReducer from './navReducer';
import rssFeedReducer from './rssFeed';


const rootReducer = combineReducers({
  nav: navReducer,
  rssFeed: rssFeedReducer,
});

export default rootReducer;
