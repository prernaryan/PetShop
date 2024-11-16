import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../constants/Constants';
import Tabs from './Tabs';
import {SCREEN_WIDTH} from '../utils/Responsive';
import {Colors} from '../constants';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.WHITE, width: SCREEN_WIDTH - 55},
        drawerType: 'front',
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={Routes.Home}>
      <Drawer.Screen name={Routes.Home} component={Tabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
