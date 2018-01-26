import { feedTypes } from '../actions';

export default (state = null, action) => {
  if (action.type === feedTypes.INIT_FEED) {
    return { ...action.payload };
  }

  return state;
};
