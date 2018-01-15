import { combineReducers } from 'redux';

import navigation from 'reducers/navigationReducer';
import app from 'reducers/appReducer';
import nav from '../routes/navReducer';

const rootReducer = combineReducers({
  app,
  nav,
  navigation,
});

export default rootReducer;
