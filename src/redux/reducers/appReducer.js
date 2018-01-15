import * as ActionTypes from 'actionTypes/appActionTypes';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  rehydrated: false,
  userExist: '',
  ripplePosition: {},
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...action.payload.app,
        rehydrated: !state.rehydrated,
      };
    case ActionTypes.SET_USER_EXIST:
      return {
        ...state,
        userExist: action.payload.exist,
      };
    case ActionTypes.CLEAR_USER_EXIST:
      return {
        ...state,
        userExist: '',
      };
    case ActionTypes.SET_ANDROID_RIPPLE:
      return {
        ...state,
        ripplePosition: action.payload.ripplePosition,
      };
    default:
      return state;
  }
};

export default app;
