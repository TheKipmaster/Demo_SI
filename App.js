import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ProfileScreen from './src/screens/ProfileScreen';

const ProfileStack = createStackNavigator(
  {
    ProfileScreen,
  },
  {
    initialRouteName: 'ProfileScreen',
    defaultNavigationOptions: {
      title: 'Perfil',
    },
  }
);

const navigator = createDrawerNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        title: 'Perfil',
      }),
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default createAppContainer(navigator);