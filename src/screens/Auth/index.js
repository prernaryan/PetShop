import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Images, Strings, Value} from '../../constants';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './styles';
import {navigate} from '../../services/NavigationService';
import {Routes} from '../../constants/Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {heightPixel} from '../../utils/Responsive';
import {useForm, Controller} from 'react-hook-form';
import {loginSchema, signupSchema} from '../../constants/Schemas';
import {yupResolver} from '@hookform/resolvers/yup';

const Auth = ({route}) => {
  const {isLogin} = route.params || {};
  const {top} = useSafeAreaInsets();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : signupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    navigate(isLogin ? Routes.DrawerNavigator : Routes.Login);
  };
  return (
    <LinearGradient
      colors={['#CE8BF8', '#F28F8F']}
      start={{x: 1.5, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      {!isLogin && (
        <Text
          onPress={() => {
            navigate(Routes.Login, {isLogin: true});
          }}
          style={{left: 20, top: 4 + top, position: 'absolute'}}>
          back
        </Text>
      )}
      <Image
        source={Images.PAW}
        style={[
          styles.pawImage,
          {
            marginTop: heightPixel(Value.CONSTANT_VALUE_31 + top),
          },
        ]}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>
          {isLogin ? Strings.LOGIN.LOGIN : Strings.LOGIN.SIGNUP}
        </Text>
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomTextInput
              placeholder={Strings.LOGIN.ENTER_EMAIL}
              iconLeft={Images.MAIL}
              containerStyle={styles.inputStyle}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={errors?.email && errors.email.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomTextInput
              placeholder={Strings.LOGIN.ENTER_PSWRD}
              secureTextEntry
              iconLeft={Images.LOCK}
              containerStyle={styles.inputPswrd}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={errors?.password && errors.password.message}
            />
          )}
        />
        {!isLogin && (
          <Controller
            name="confirmPassword"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder={Strings.LOGIN.ENTER_PSWRD}
                secureTextEntry
                iconLeft={Images.LOCK}
                containerStyle={styles.inputPswrd}
                value={value}
                onChangeText={onChange}
                error={
                  errors?.confirmPassword && errors.confirmPassword.message
                }
              />
            )}
          />
        )}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnText}>
            {isLogin ? Strings.LOGIN.LOGIN : Strings.LOGIN.SIGNUP}
          </Text>
        </TouchableOpacity>
        <Text style={styles.orText}>{Strings.LOGIN.OR}</Text>
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={Images.GOOGLE} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.FACEBOOK} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
      {isLogin && (
        <>
          <Text style={styles.belowTxt}>{Strings.LOGIN.ACCOUNT}</Text>
          <Text
            style={styles.regTxt}
            onPress={() => {
              navigate(Routes.SignUp);
            }}>
            {Strings.LOGIN.REGISTER}
          </Text>
        </>
      )}
    </LinearGradient>
  );
};

export default Auth;
