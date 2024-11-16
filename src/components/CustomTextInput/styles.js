import {Alignment, Colors, Value} from '../../constants';
import {
  fontPixel,
  FontWithBold,
  heightPixel,
  widthPixel,
} from '../../utils/Responsive';

export default {
  container: {
    flexDirection: Alignment.ROW,
    alignItems: Alignment.CENTER,
    alignSelf: Alignment.CENTER,
    backgroundColor: '#EDEDED',
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_20),
    height: heightPixel(Value.CONSTANT_VALUE_54),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_22),
  },
  input: {
    flex: Value.CONSTANT_VALUE_1,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    color: Colors.GRAY_INPUT,
  },
  searchInput: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_15),
    color: Colors.WHITE,
  },
  inputWithIconLeft: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_10),
  },
  inputWithIconRight: {
    marginRight: widthPixel(Value.CONSTANT_VALUE_10),
  },
  iconLeft: {
    width: widthPixel(Value.CONSTANT_VALUE_24),
    height: heightPixel(Value.CONSTANT_VALUE_24),
    marginRight: widthPixel(Value.CONSTANT_VALUE_10),
  },
  iconRight: {
    width: widthPixel(Value.CONSTANT_VALUE_24),
    height: heightPixel(Value.CONSTANT_VALUE_24),
  },
  iconRightContainer: {
    padding: Value.CONSTANT_VALUE_5,
  },
  errorText: {
    color: Colors.RED,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
    marginTop: heightPixel(Value.CONSTANT_VALUE_4),
    marginLeft: widthPixel(Value.CONSTANT_VALUE_23),
  },
};
