const COLOR_SCHEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

const COLORS_LIGHT = {
  BACKGROUND: '#FFFFFF',
  TEXT: '#070707',
  PRIMARY: '#D58CE5',
  SECONDARY: '#D78CDE',
  ACCENT: '#9A39D7',
  ERROR: '#EB0E0E',
  WARNING: '#FFDB58',
  INPUT_BG: '#F0F0F0',
  INPUT_TEXT: '#333',
  BORDER: '#E0E0E0',
  TILE: '#FFFFFF',
  GREEN: '#64D2A4',
  MAP_GRAY: '#ACA3A3',
};

const COLORS_DARK = {
  BACKGROUND: '#0D0D0D',
  TEXT: '#FFFFFF',
  PRIMARY: '#D58CE5',
  SECONDARY: '#D78CDE',
  ACCENT: '#9A39D7',
  ERROR: '#EB0E0E',
  WARNING: '#FFDB58',
  INPUT_BG: '#333',
  INPUT_TEXT: '#FFFFFF',
  BORDER: '#3F3E3F',
  TILE: 'black',
  GREEN: '#64D2A4',
  MAP_GRAY: '#ACA3A3',
};

const IMAGES_LIGHT = {
  BACKGROUND: require('../assets/Images/lightBg/lightBg.png'),
};

const IMAGES_DARK = {
  BACKGROUND: require('../assets/Images/darkBg/darkBg.png'),
};

export const IMAGES = {
  [COLOR_SCHEME.LIGHT]: IMAGES_LIGHT,
  [COLOR_SCHEME.DARK]: IMAGES_DARK,
};

export const COLORS = {
  [COLOR_SCHEME.LIGHT]: COLORS_LIGHT,
  [COLOR_SCHEME.DARK]: COLORS_DARK,
};

export {COLOR_SCHEME};
