import { REHYDRATE } from 'redux-persist/constants';
import { feedTypes } from '../actions';

export default (state = null, action) => {
  if (action.type === REHYDRATE) {
    return action.payload.rssFeed || null;
  }

  if (action.type === feedTypes.INIT_FEED) {
    return { ...action.payload };
  }

  return state;
};
