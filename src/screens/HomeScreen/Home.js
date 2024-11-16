import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate, openDrawer} from '../../services/NavigationService';
import {Images, Strings} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import LocationContainer from '../../components/LocationContainer';
import {useTheme} from '../../context/ThemeContext';
import {COLORS} from '../../constants/ColorsSchema';
import {Routes} from '../../constants/Constants';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const {theme} = useTheme();
  const colors = COLORS[theme];
  const data = [1, 2, 3];
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 28,
        backgroundColor: colors.BACKGROUND,
      }}>
      <View style={{top: top + 19, flex: 1}}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={Images.DRAWER_LOGO} />
        </TouchableOpacity>
        <Image source={Images.PAW} style={styles.pawImage} />
        <Text style={[styles.headingText, {color: colors.TEXT}]}>
          {Strings.HOME.CHOOSE_LOCATION}
        </Text>
        <CustomTextInput
          search={true}
          placeholder={'Search Location'}
          iconLeft={Images.SEARCH}
          containerStyle={{marginTop: 19, marginBottom: 30}}
        />
        {data.map(item => {
          return <LocationContainer onPress={() => navigate(Routes.Details)} />;
        })}
      </View>
    </View>
  );
};

export default Home;
