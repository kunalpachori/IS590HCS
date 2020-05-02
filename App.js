import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { useScreens } from 'react-native-screens'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import NewRequestScreen from './screens/NewRequestScreen'

const ListStack = createStackNavigator({ 

  'My Request': {
    screen: HomeScreen
  },
  'Request Details': {
    screen: DetailsScreen
  }
  }, { initialRouteName: 'My Request'})

const RootStack = createStackNavigator({ 

  'Requests': {
    screen: ListStack
  },
  'New Request': {
    screen: NewRequestScreen
  }
  }, { initialRouteName: 'Requests',  headerMode: 'none' })

const AppContainer = createAppContainer(RootStack);

export default function App() {
  useScreens();
  return (
    <AppContainer/>
  );
}