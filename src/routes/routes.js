import {
  StackNavigator,
} from 'react-navigation';
import {
  Splashscreen,
} from './pages';

const navigationOptions = {
  headerMode: 'none',
  initialRouteName: 'Home',
};

const AppNavigator = StackNavigator(
  {
    Splashscreen: {
      screen: Splashscreen,
    },
  },
    navigationOptions,
);

export default AppNavigator;
