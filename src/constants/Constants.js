// import {BASE_URL_DEV, BASE_URL_QA, BASE_URL_STAGE, BASE_URL_PROD} from '@env';

// const env = 'dev';
// const environment = {
//   dev: {
//     BASE_URL: BASE_URL_DEV,
//   },
//   qa: {
//     BASE_URL: BASE_URL_QA,
//   },
//   stage: {
//     BASE_URL: BASE_URL_STAGE,
//   },
//   prod: {
//     BASE_URL: BASE_URL_PROD,
//   },
// };

// export const {BASE_URL} = environment[env];

export const Routes = {
  Splash: 'Splash',
  Login: 'Login',
  SignUp: 'Signup',
  Home: 'Home',
  Profile: 'Profile',
  Settings: 'Settings',
  Tabs: 'Tabs',
  DrawerNavigator: 'DrawerNavigator',
  Details: 'Details',
  Overview: 'Overview',
  Statistics: 'Statistics',
  OnboardingScreen: 'OnboardingScreen',
  Paws: 'Paws',
  Like: 'Like',
  Password: 'Password',
};
export const Regx = {
  MOBILE_REGEX: /^(0)?[1-9]\d{7,14}$/,
  SPECIAL_CHAR: /[|#\\/~^:,;?!&%$@*+]/,
  ALPHA: /[a-zA-Z]/,
  ALPHA_START: /^[A-Z]/i,
  ALPHA_LOWER: /[a-z]/,
  ALPHA_CAP: /[A-Z]/,
  NUM: /[0-9]/,
  OTP: /[0-9]{6,}$/,
  FIRST_NAME: /^[a-zA-Z.]+( [A-Za-z]+)*$/,
  EMAILORPHONE: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
  DATE2: /^\d{2}\/\d{2}\/\d{4}$/,
};
export const DATE_MASK = [
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const Fonts = {
  ManropeBold: 'Manrope-Bold',
  ManropeExtraBold: 'Manrope-ExtraBold',
  ManropeSemiBold: 'Manrope-SemiBold',
  ManropeExtraLight: 'Manrope-ExtraLight',
  ManropeLight: 'Manrope-Light',
  ManropeMedium: 'Manrope-Medium',
  ManropeRegular: 'Manrope-Regular',
};

export const HttpStatus = {
  UNAUTHORISED: 401,
  SUCCESS_REQUEST: 200,
  SUCCESS_CODE_202: 202,
  SUCCESS_CODE_201: 201,
  SUCCESS_CODE_204: 204,
  UNAUTHORISED_400: 400,
  SUCCESS_CODE_205: 205,
};

export const STORAGE_KEYS = {
  isLoggedIn: 'isLoggedIn',
  ONBOARDING_COMPLETED_KEY: 'onboarding_completed',
  BATCH_NO: 'BATCH_NO',
  FCM_TOKEN: 'FCM_TOKEN',
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};

export const validation = {
  emailInvalid: 'Please enter a valid email address.',
  emailRequired: 'Email is required',
  passwordRequired: 'Password is required',
  passwordRequiredConfirm: 'Please enter a confirm password.',
  PASSWORD_MIN: 'Your password must be at least 8 characters long',
  PASSWORD_INVALID: 'Please enter strong password.',
  invalid_phone: 'Please enter a valid phone number.',
  max_char: 'Maximum 30 characters.',
  first_name: 'First name is required.',
  member_name: 'Member name is required.',
  INVALID_FIRST_NAME: 'Please enter a valid first name.',
  INVALID_LAST_NAME: 'Please enter a valid last name.',
  only_alpha: 'Please enter alphabets only.',
  phone: 'Phone number is required.',
  invalid_date: 'Please enter a valid date of birth.',
  LOWER_CASE: 'Your password must contain at least 1 lower case character',
  ALPHA_NUM: 'Your password must start with an alphabet.',
  CAPSLOCK: 'Your password must contain at least 1 uppercase character.',
  NUM_PASS: 'Your password must contain at least 1 numeric character.',
  SPECIAL_CHAR: 'Your password must contain at least 1 special character.',
  CONFIRM_PASSWORD: 'Please re-enter your password to confirm',
  confirm_not_match: 'Your passwords do not match.',
  GENDER_REQUIRED: 'Gender is required.',
  DOB_REQUIRED: 'Date of birth is required.',
  INVALID_DATE: 'Please enter a valid date of birth.',
  ALPHA_NUM_VAL: 'ALPHA_NUM',
  SPECIAL: 'SPECIAL',
  CAPSLOCK_VAL: 'CAPSLOCK',
  NO_INTERNET_CONNECTION: 'Please Check Your Internet Connection',
};
