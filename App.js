import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from './src/screens/LoginScreen';

const drawer = createDrawerNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const navigator = createStackNavigator(
  {
    drawer,
  },
  {
    initialRouteName: 'drawer',
    defaultNavigationOptions: {
      title: 'Demonstração',
    },
  },
);

export default createAppContainer(navigator);