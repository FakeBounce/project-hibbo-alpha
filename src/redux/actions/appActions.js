import * as ActionTypes from 'actionTypes/appActionTypes';

/* ***** *****  Toggle background selector view  ***** ***** */

export const setAndroidRipple = ripplePosition => {
  return {
    type: ActionTypes.SET_ANDROID_RIPPLE,
    payload: {
      ripplePosition,
    },
  };
};

/* ***** *****  Check user exist  ***** ***** */

export const checkUserExist = url => {
  return {
    type: ActionTypes.CHECK_USER_EXIST,
    payload: {
      url,
    },
  };
};

export const setUserExist = ({ exist }) => {
  return {
    type: ActionTypes.SET_USER_EXIST,
    payload: {
      exist,
    },
  };
};

export const clearUserExist = () => {
  return {
    type: ActionTypes.CLEAR_USER_EXIST,
  };
};
