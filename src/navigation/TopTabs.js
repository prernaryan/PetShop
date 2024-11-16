import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from '../constants/Constants';
import OverView from '../screens/OverView';
import Statistics from '../screens/Statistics';

const TopTab = createMaterialTopTabNavigator();
const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, color: 'white'},
        tabBarStyle: {backgroundColor: '#4682b4'},
      }}>
      <TopTab.Screen name={Routes.Overview} component={OverView} />
      <TopTab.Screen name={Routes.Statistics} component={Statistics} />
    </TopTab.Navigator>
  );
};

export default TopTabs;
