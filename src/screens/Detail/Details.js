import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {Images, Strings, Value} from '../../constants';
import {useTheme} from '../../context/ThemeContext';
import {COLORS, IMAGES} from '../../constants/ColorsSchema';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Details = () => {
  const {top} = useSafeAreaInsets();
  const {theme} = useTheme();
  const colors = COLORS[theme];
  const backgroundImage = IMAGES[theme].BACKGROUND;
  const AboutSection = React.useCallback(() => {
    return (
      <View style={styles.row}>
        <View style={styles.innercontainer}>
          <Text style={[styles.about, {color: colors.TEXT}]}>
            {Strings.DETAIL.ABOUT}
          </Text>
          <Text style={[styles.abtDetail, {color: colors.TEXT}]}>
            {Strings.DETAIL.ABOUT_DETAIL}
          </Text>
        </View>
        <View style={styles.donatecontainer}>
          <Image source={Images.DONATE} />
          <Text style={[styles.donate, {color: colors.TEXT}]}>
            {Strings.DETAIL.DONATE}
          </Text>
        </View>
      </View>
    );
  }, []);
  const LocationSection = React.useCallback(() => {
    return (
      <View style={styles.innerRow}>
        <Image source={Images.GREEN_LOCATION} />
        <Text style={[styles.locationTxt, {color: colors.TEXT}]}>
          {Strings.DETAIL.LOCATION}
        </Text>
      </View>
    );
  }, []);
  const petData = [
    {
      title: 'Dog',
      color: '#E0CDFF',
    },
    {title: 'Cat', color: '#F5C0C6'},
  ];
  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        flex: 1,
        backgroundColor: colors.BACKGROUND,
      }}>
      <View style={{top: top, flex: 1}}>
        <Image source={Images.BACK_ICON} style={{marginLeft: 17}} />
        <Text style={[styles.heading, {color: colors.TEXT}]}>
          {Strings.DETAIL.HEADING}
        </Text>
        <View style={styles.mainView}>
          <Image source={Images.SHELTER} style={styles.shelterImg} />
          <AboutSection />
          <LocationSection />
          <Text style={[styles.petTitle, {color: colors.TEXT}]}>Pets</Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            {petData.map((item, index) => {
              return (
                <View
                  style={[
                    styles.petContainer,
                    index === 0 && {
                      marginRight: 9,
                      marginLeft: 0,
                    },
                    {
                      backgroundColor: item.color,
                      marginHorizontal: 9,
                    },
                  ]}>
                  <Text style={[styles.petTxt, {color: colors.TEXT}]}>
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              width: 163,
              backgroundColor: 'white',
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              shadowColor: '#ACA3A3',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.3,
              shadowRadius: Value.CONSTANT_VALUE_4,
              elevation: Value.CONSTANT_VALUE_8,
            }}>
            <Image
              source={Images.SHELTER}
              style={{
                width: 163,
                height: 119,
                paddingBottom: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 156,
              shadowColor: '#ACA3A3',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.3,
              shadowRadius: Value.CONSTANT_VALUE_4,
              elevation: Value.CONSTANT_VALUE_8,
            }}>
            <View style={styles.row}>
              <Text style={[styles.itemText, {color: colors.TEXT}]}>GRay</Text>
              <Text style={[styles.itemText, {color: colors.TEXT}]}>3Yrs</Text>
            </View>
            <Text style={[styles.itemSubTitle, {color: colors.TEXT}]}>
              {Strings.DETAIL.HEADING}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Details;
