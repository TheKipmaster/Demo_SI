import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {
  ProfileScreen,
  TimelineScreen,
  MyAdsScreen,
  FleaMarketScreen,
  NewEventScreen,
} from './src/screens';

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

const TimelineStack = createStackNavigator(
  {
    TimelineScreen,
    NewEventScreen: {
      screen: NewEventScreen,
      navigationOptions: () => ({
        title: 'Novo Evento',
      }),
    },
  },
  {
    initialRouteName: 'TimelineScreen',
    defaultNavigationOptions: {
      title: 'Linha do Tempo',
    },
  }
);

const MyAdsStack = createStackNavigator(
  {
    MyAdsScreen,
  },
  {
    initialRouteName: 'MyAdsScreen',
    defaultNavigationOptions: {
      title: 'Meus Anúncios',
    },
  }
);

const FleaMarketStack = createStackNavigator(
  {
    FleaMarketScreen,
  },
  {
    initialRouteName: 'FleaMarketScreen',
    defaultNavigationOptions: {
      title: 'Mercado de Pulgas',
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
    Timeline: {
      screen: TimelineStack,
      navigationOptions: () => ({
        title: 'Linha do Tempo',
      }),
    },
    MyAds: {
      screen: MyAdsStack,
      navigationOptions: () => ({
        title: 'Meus Anúncios',
      }),
    },
    FleaMarket: {
      screen: FleaMarketStack,
      navigationOptions: () => ({
        title: 'Mercado de Pulgas',
      }),
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default createAppContainer(navigator);