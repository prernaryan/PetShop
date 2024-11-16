import {Alignment, Colors, Value} from '../../constants';
import {
  fontPixel,
  FontWithBold,
  heightPixel,
  widthPixel,
} from '../../utils/Responsive';

export default {
  container: {
    marginVertical: heightPixel(Value.CONSTANT_VALUE_6),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_20),
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_20),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_14),
    shadowColor: '#ACA3A3',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: Value.CONSTANT_VALUE_4,
    elevation: Value.CONSTANT_VALUE_8,
  },
  headingtext: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_13),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {marginLeft: 19},
  mapRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  mapText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
  },
  innerRow: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
  },
  available: {
    ...FontWithBold.Bold_600,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
    marginTop: 6,
  },
  catImg: {
    marginLeft: 100,
  },
  dogImg: {marginLeft: 8},
};
