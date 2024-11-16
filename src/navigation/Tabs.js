import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../constants/Constants';
import Profile from '../screens/Profile';
import {View, Image} from 'react-native';
import {Images} from '../constants';
import Paws from '../screens/Paws';
import Like from '../screens/Like';
import Home from '../screens/HomeScreen/Home';
import {useTheme} from '../context/ThemeContext';
import {COLORS} from '../constants/ColorsSchema';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {theme} = useTheme();
  const colors = COLORS[theme];
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = Images.HOME;
          } else if (route.name === 'Paws') {
            iconSource = Images.PAW_TAB;
          } else if (route.name === 'Like') {
            iconSource = Images.LIKE;
          } else if (route.name === 'Profile') {
            iconSource = Images.PROFILE;
          }
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#BA68C8' : '#C4C4C4',
                }}
                resizeMode="contain"
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    backgroundColor: '#BA68C8',
                    width: 12,
                    marginTop: 4,
                  }}
                />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#BA68C8',
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: {
          height: 76,
          paddingBottom: 10,
          borderRadius: 45,
          backgroundColor: colors.BACKGROUND,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Paws} component={Paws} />
      <Tab.Screen name={Routes.Like} component={Like} />
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
