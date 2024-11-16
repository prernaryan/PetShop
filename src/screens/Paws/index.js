import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/ColorsSchema';

const Paws = () => {
  const {top} = useSafeAreaInsets();
  const {theme} = useTheme();
  const colors = COLORS[theme];
  return (
    <View style={{backgroundColor: colors.BACKGROUND, flex: 1}}>
      <Text>Paws</Text>
    </View>
  );
};

export default Paws;
