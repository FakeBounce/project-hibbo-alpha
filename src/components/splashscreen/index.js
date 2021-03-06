import { connect } from 'react-redux';
import * as ActionTypes from 'actionTypes/appActionTypes';

import Splashscreen from './components/Splashscreen';

const mapStateToProps = state => {
  return {
    rehydrated: state.app.rehydrated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetErrors: () => {
      dispatch({ type: ActionTypes.RESET_APP_ERRRORS });
    },
    resetApp: () => {
      dispatch({ type: ActionTypes.RESET_APP });
    },
    logout: () => {
      dispatch({ type: ActionTypes.RESET_APP });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
