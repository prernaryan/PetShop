import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Alignment, Images, Value} from '../constants';
import {closeDrawer} from '../services/NavigationService';
import {useTheme} from '../context/ThemeContext';
import {COLORS} from '../constants/ColorsSchema';
import {heightPixel, widthPixel} from '../utils/Responsive';

const CustomDrawerList = ({
  isSwitch = false,
  title = '',
  icon = null,
  color = null,
  onPress = () => {},
  isEnabled = false,
  toggleSwitch = () => {},
  colors = null,
}) => {
  const CustomView = isSwitch ? View : TouchableOpacity;
  return (
    <CustomView style={styles.customListContainer} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        {icon && (
          <Image
            source={icon}
            style={styles.icon}
            tintColor={color ?? colors.TEXT}
          />
        )}
        <Text style={[styles.listText, {color: color ?? colors.TEXT}]}>
          {title}
        </Text>
      </View>
      {isSwitch && (
        <Switch
          trackColor={{false: '#C4C4C4', true: '#C4C4C4'}}
          thumbColor={isEnabled ? '#BA68C8' : 'white'}
          ios_backgroundColor="#C4C4C4"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </CustomView>
  );
};

const CustomDrawer = props => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const {theme, toggleTheme} = useTheme();
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  };

  const colors = COLORS[theme];
  return (
    <View style={[styles.container, {backgroundColor: colors.BACKGROUND}]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={[styles.drawerContent]}>
        <TouchableOpacity style={styles.logoContainer} onPress={closeDrawer}>
          <Image source={Images.DRAWER_LOGO} />
        </TouchableOpacity>
        <View style={styles.userContainer}>
          <Image source={Images.USER_IMAGE} />
          <View style={styles.userInfo}>
            <Text style={{color: colors.TEXT}}>Elena Gilbert</Text>
            <View style={styles.verifiedContainer}>
              <Text style={{color: colors.TEXT}}>Verified Profile</Text>
              <Image source={Images.VERIFIED} />
            </View>
          </View>
        </View>
        <CustomDrawerList
          isSwitch={true}
          isEnabled={isEnabled}
          toggleSwitch={toggleSwitch}
          title="Dark Mode"
          icon={Images.SUN}
          colors={colors}
        />
        <CustomDrawerList
          title="Account Information"
          icon={Images.INFO_CIRCLE}
          colors={colors}
        />
        <CustomDrawerList
          title="Password"
          icon={Images.PASSWORD}
          colors={colors}
        />
        <CustomDrawerList
          title="WishList"
          icon={Images.WISHLIST}
          colors={colors}
        />
        <CustomDrawerList
          title="Setting"
          icon={Images.SETTINGS}
          colors={colors}
        />
        <View style={styles.logoutContainer}>
          <CustomDrawerList
            title="Logout"
            icon={Images.LOGOUT}
            color="red"
            colors={colors}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: Value.CONSTANT_VALUE_1,
  },
  drawerContent: {
    zIndex: Value.CONSTANT_VALUE_10,
    flex: Value.CONSTANT_VALUE_1,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_29),
    marginRight: widthPixel(Value.CONSTANT_VALUE_15),
  },
  logoContainer: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_7),
    marginTop: heightPixel(Value.CONSTANT_VALUE_19),
  },
  userContainer: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_58),
    flexDirection: Alignment.ROW,
    marginBottom: heightPixel(Value.CONSTANT_VALUE_12),
  },
  userInfo: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_18),
    marginTop: heightPixel(Value.CONSTANT_VALUE_10),
  },
  verifiedContainer: {
    flexDirection: Alignment.ROW,
    alignItems: Alignment.CENTER,
  },
  customListContainer: {
    flexDirection: Alignment.ROW,
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_12),
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.SPACE_BETWEEN,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_20),
  },
  iconTextContainer: {
    flexDirection: Alignment.ROW,
    alignItems: Alignment.CENTER,
  },
  icon: {
    width: widthPixel(Value.CONSTANT_VALUE_25),
    height: heightPixel(Value.CONSTANT_VALUE_25),
  },
  listText: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_10),
  },
  switch: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
  },
  logoutContainer: {
    position: Alignment.ABSOLUTE,
    bottom: heightPixel(Value.CONSTANT_VALUE_106),
  },
});
