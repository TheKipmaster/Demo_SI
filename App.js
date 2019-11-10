import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import reducers from './src/reducers'

import {
  ProfileScreen,
  TimelineScreen,
  MyListingsScreen,
  NewEventScreen,
  NewListingScreen,
} from './src/screens';
import FleaMarketScreen from './src/screens/FleaMarketScreen';
import LoginScreen from './src/screens/LoginScreen';

const ProfileStack = createStackNavigator(
  {
    ProfileScreen,
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
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

const MyListingsStack = createStackNavigator(
  {
    MyListingsScreen,
    NewListingScreen: {
      screen: NewListingScreen,
      navigationOptions: () => ({
        title: 'Novo Anúncio',
      }),
    },
  },
  {
    initialRouteName: 'MyListingsScreen',
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
    MyListings: {
      screen: MyListingsStack,
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

const Navigation = createAppContainer(navigator);
const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}