import {Alignment, Colors, Value} from '../../constants';

import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/Responsive';

export default {
  container: {
    flex: Value.CONSTANT_VALUE_1,
  },

  indicatorConatiner: {
    alignSelf: Alignment.CENTER,
    position: Alignment.ABSOLUTE,
    bottom: heightPixel(Value.CONSTANT_VALUE_53),
    flexDirection: Alignment.ROW,
  },
  indicator: {
    height: widthPixel(Value.CONSTANT_VALUE_24),
    width: widthPixel(Value.CONSTANT_VALUE_24),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_12),
    backgroundColor: '#D9D9D9',
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_8),
  },
  activeIndicator: {
    height: widthPixel(Value.CONSTANT_VALUE_24),
    width: widthPixel(Value.CONSTANT_VALUE_24),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_12),
    backgroundColor: '#DCB0F8',
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_8),
  },
  skip: {
    alignSelf: Alignment.FLEX_START,
    position: Alignment.ABSOLUTE,
    bottom: heightPixel(Value.CONSTANT_VALUE_50),
    left: widthPixel(Value.CONSTANT_VALUE_48),
    color: Colors.WHITE,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
  },
  next: {
    alignSelf: Alignment.FLEX_START,
    position: Alignment.ABSOLUTE,
    bottom: heightPixel(Value.CONSTANT_VALUE_50),
    right: widthPixel(Value.CONSTANT_VALUE_48),
    color: Colors.WHITE,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
  },
  card: {
    width: SCREEN_WIDTH,
    flex: Value.CONSTANT_VALUE_1,
  },
};
