import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined
  SignIn: undefined
  ProductView: undefined
  ShippingBag: undefined
  Profile: undefined
  Checkout: undefined
};

export type ScreenProp = StackNavigationProp<RootStackParamList>;
