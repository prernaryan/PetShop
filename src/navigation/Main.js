import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../constants/Constants';
import OnboardingScreen from '../screens/OnboardingScreen';
import Auth from '../screens/Auth';
import DrawerNavigator from './DrawerNavigator';
import Details from '../screens/Detail/Details';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnboardingScreen'}>
      <Stack.Screen
        name={Routes.OnboardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen name={Routes.Login} component={Auth} />
      <Stack.Screen name={Routes.SignUp} component={Auth} />
      <Stack.Screen name={Routes.DrawerNavigator} component={DrawerNavigator} />
      <Stack.Screen name={Routes.Details} component={Details} />
    </Stack.Navigator>
  );
};

export default Main;
