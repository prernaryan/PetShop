import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images, Strings} from '../../constants';
import {useTheme} from '../../context/ThemeContext';
import {COLORS} from '../../constants/ColorsSchema';
import styles from './styles';

const LocationContainer = ({customStyle, onPress}) => {
  const {theme} = useTheme();
  const colors = COLORS[theme];
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: colors.BACKGROUND,
        },
        customStyle,
      ]}
      onPress={onPress}>
      <View style={styles.row}>
        <Image source={Images.SHELTER_ONE} />
        <View style={styles.textContainer}>
          <Text style={[styles.headingtext, {color: colors.TEXT}]}>
            {Strings.HOME.CONTAINER_MAINTEXT}
          </Text>
          <View style={styles.mapRow}>
            <Image source={Images.MAP_ICON} />
            <Text style={[styles.mapText, {color: colors.MAP_GRAY}]}>
              {Strings.HOME.KM}
            </Text>
          </View>
          <View style={styles.innerRow}>
            <Text style={[styles.available, {color: colors.GREEN}]}>
              Available for
            </Text>
            <Image source={Images.SMALL_CAT} style={styles.catImg} />
            <Image source={Images.SMALL_DOG} style={styles.dogImg} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationContainer;
