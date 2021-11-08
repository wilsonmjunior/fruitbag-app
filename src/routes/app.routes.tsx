import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { ProductView } from '../screens/ProductView';
import { ShippingBag } from '../screens/ShippingBag';
import { Profile } from '../screens/Profile';
import { Checkout } from '../screens/Checkout';
import { RootStackParamList } from './Screens';

const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductView" component={ProductView} />
      <Stack.Screen name="ShippingBag" component={ShippingBag} />

      <Stack.Group screenOptions={{ presentation: 'modal', gestureEnabled: false }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
