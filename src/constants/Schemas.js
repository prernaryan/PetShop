import * as yup from 'yup';
import {Regx, validation} from './Constants';
import {Value} from './FixedValues';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
  password: yup
    .string()
    .required(validation.passwordRequired)
    .min(Value.CONSTANT_VALUE_8, validation.PASSWORD_MIN)
    .matches(Regx.SPECIAL_CHAR, {
      excludeEmptyString: true,
      message: validation.SPECIAL_CHAR,
    })
    .matches(Regx.ALPHA_CAP, {
      excludeEmptyString: true,
      message: validation.CAPSLOCK,
    })
    .matches(Regx.NUM, {
      excludeEmptyString: true,
      message: validation.NUM_PASS,
    })
    .matches(Regx.ALPHA_LOWER, {
      excludeEmptyString: true,
      message: validation.LOWER_CASE,
    }),
});

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
  password: yup
    .string()
    .required(validation.passwordRequired)
    .min(Value.CONSTANT_VALUE_8, validation.PASSWORD_MIN)
    .matches(Regx.SPECIAL_CHAR, {
      excludeEmptyString: true,
      message: validation.SPECIAL_CHAR,
    })
    .matches(Regx.ALPHA_CAP, {
      excludeEmptyString: true,
      message: validation.CAPSLOCK,
    })
    .matches(Regx.NUM, {
      excludeEmptyString: true,
      message: validation.NUM_PASS,
    })
    .matches(Regx.ALPHA_LOWER, {
      excludeEmptyString: true,
      message: validation.LOWER_CASE,
    }),
  confirmPassword: yup
    .string()
    .required(validation.CONFIRM_PASSWORD)
    .oneOf(
      [yup.ref('password'), null],
      'Password and Confirm Password should be same.',
    ),
});

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(
      /[0-9!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one number or special character',
    ),
  setPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm Password must match with password',
    ),
});
export const validationMessages = [
  {
    isValid: 'length',
    message: 'Password must be at least 8 characters long.',
  },
  {
    isValid: 'uppercase',
    message: 'Password must contain at least one uppercase letter.',
  },
  {
    isValid: 'lowercase',
    message: 'Password must contain at least one lowercase letter.',
  },
  {
    isValid: 'numberOrSpecial',
    message: 'Password must contain at least one number or special character.',
  },
];
