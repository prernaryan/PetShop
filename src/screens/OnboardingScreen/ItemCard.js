import {View, Image} from 'react-native';
import React from 'react';

import styles from './styles';
import {Alignment} from '../../constants';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/Responsive';

const ItemCard = ({item, id}) => {
  return (
    <View style={styles.card} key={id}>
      <Image
        source={item.image}
        style={{
          alignSelf: Alignment.CENTER,
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
        }}
      />
    </View>
  );
};

export default ItemCard;
