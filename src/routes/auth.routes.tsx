import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { ProductView } from '../screens/ProductView';
import { ShippingBag } from '../screens/ShippingBag';
import { RootStackParamList } from './Screens';

const Stack = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ProductView" component={ProductView} />
      <Stack.Screen name="ShippingBag" component={ShippingBag} />
    </Stack.Navigator>
  );
}
