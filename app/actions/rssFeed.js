import { getFeedFromCloud } from '../library/network';

export class types {
  static INIT_FEED = 'INIT_FEED';
}

export function getFeed() {
  return (dispatch) => {
    return getFeedFromCloud().then((feed) => {
      return dispatch({
        type: types.INIT_FEED,
        payload: feed,
      });
    });
  };
}
