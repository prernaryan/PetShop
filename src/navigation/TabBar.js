import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../utils/Responsive';

const TabBar = ({state, descriptors, navigation}) => {
  console.log('====================================');
  console.log('====================================');
  console.log(state?.routes);
  console.log('====================================');
  console.log('====================================');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        height: 70,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        width: SCREEN_WIDTH - 40,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {state?.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Pressable onPress={onPress}>
            <Text>{route.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
