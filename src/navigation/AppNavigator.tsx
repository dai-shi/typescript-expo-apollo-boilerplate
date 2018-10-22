import * as React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});

export default AppNavigator;
