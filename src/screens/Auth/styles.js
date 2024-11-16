import {Alignment, Colors, Value} from '../../constants';
import {
  fontPixel,
  FontWithBold,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/Responsive';

export default {
  pawImage: {
    width: widthPixel(Value.CONSTANT_VALUE_68),
    height: heightPixel(Value.CONSTANT_VALUE_50),
    alignSelf: Alignment.CENTER,
  },
  mainContainer: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_97),
    alignSelf: Alignment.CENTER,
    backgroundColor: Colors.WHITE,
    width: SCREEN_WIDTH - Value.CONSTANT_VALUE_76,
    paddingTop: heightPixel(Value.CONSTANT_VALUE_31),
    paddingBottom: heightPixel(Value.CONSTANT_VALUE_24),
    borderRadius: heightPixel(Value.CONSTANT_VALUE_27),
  },
  headingText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_36),
    textAlign: Alignment.CENTER,
  },
  btnContainer: {
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_30),
    backgroundColor: Colors.PURPLE_ONE,
    height: heightPixel(54),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_22),
  },
  btnText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_21),
    color: Colors.WHITE,
  },
  orText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_20),
    textAlign: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_3),
    color: Colors.PINK_PURPLE,
  },
  belowTxt: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    textAlign: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_24),
    color: Colors.BLACK,
  },
  regTxt: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    textAlign: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_3),
    color: Colors.DARK_PURPLE,
  },
  img: {
    width: widthPixel(Value.CONSTANT_VALUE_40),
    height: heightPixel(Value.CONSTANT_VALUE_40),
    marginTop: heightPixel(Value.CONSTANT_VALUE_21),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
  },
  row: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.CENTER,
  },
  gradient: {
    flex: Value.CONSTANT_VALUE_1,
  },
  inputStyle: {marginTop: heightPixel(Value.CONSTANT_VALUE_30)},
  inputPswrd: {marginTop: heightPixel(Value.CONSTANT_VALUE_24)},
};
