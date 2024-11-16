import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors, Images} from '../../constants';

const CustomTextInput = props => {
  const {
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    containerStyle,
    iconLeft,
    iconRight,
    error = '',
    maxLength = 50,
    keyboardType,
    onFocus,
    onBlur,
    multiline,
    search = false,
    ...inputProps
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <View
        style={[
          styles.container,
          containerStyle,
          search && {backgroundColor: '#CA82F8', borderRadius: 14},
        ]}>
        {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
        <TextInput
          style={[
            styles.input,
            iconLeft && styles.inputWithIconLeft,
            iconRight && styles.inputWithIconRight,
            error,
            search && styles.searchInput,
          ]}
          {...inputProps}
          placeholder={placeholder}
          placeholderTextColor={search ? Colors.WHITE : '#A6A6A6'}
          secureTextEntry={secureTextEntry && !showPassword}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={onBlur}
          multiline={multiline}
        />
        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconRightContainer}>
            <Image
              source={showPassword ? Images.EYE_OPEN : Images.PAW}
              style={styles.iconRight}
            />
          </TouchableOpacity>
        ) : (
          iconRight && <Image source={iconRight} style={styles.iconRight} />
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

export default CustomTextInput;
