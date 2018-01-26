import { NavigationActions } from 'react-navigation';
import { NavigationInVisionTest } from '../components';
import { navTypes } from '../actions';

const initialNavState = NavigationInVisionTest.router.getStateForAction(NavigationInVisionTest.router.getActionForPathAndParams('Home'));

export default (state = initialNavState, action) => {
  switch (action.type) {
    case navTypes.NAVIGATE: {
      const nextState = NavigationInVisionTest.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
        state,
      );
      return nextState;
    }
    case navTypes.BACK: {
      const newState = NavigationInVisionTest.router.getStateForAction(
        NavigationActions.back(),
        state,
      );

      return newState;
    }
    default:
      return state;
  }
};
