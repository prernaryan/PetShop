import {Alignment, Colors, Value} from '../../constants';
import {
  fontPixel,
  FontWithBold,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/Responsive';

export default {
  heading: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_22),
    textAlign: Alignment.CENTER,
  },
  mainView: {
    marginLeft: 27,
    marginRight: 22,
  },
  shelterImg: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_10),
    marginBottom: heightPixel(Value.CONSTANT_VALUE_20),
  },
  row: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
  },
  innercontainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'rgba(70, 73, 80, 0.5)',
    borderRadius: 25,
  },
  about: {
    ...FontWithBold.Bold_700,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
  },
  donate: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    marginTop: heightPixel(Value.CONSTANT_VALUE_9),
  },
  abtDetail: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
  },
  donatecontainer: {alignSelf: 'flex-end'},
  innerRow: {
    flexDirection: Alignment.ROW,
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 22,
  },
  locationTxt: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    marginLeft: 27,
  },
  petTitle: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_20),
  },
  petContainer: {
    paddingHorizontal: 18,
    paddingVertical: 3,
    borderRadius: 15,
    marginTop: 24,
  },
  petTxt: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
  },
  itemText: {
    ...FontWithBold.Bold_800,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
  },
  itemSubTitle: {
    ...FontWithBold.Bold_600,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
  },
};
