import React, {useRef} from 'react';
import {Animated, View, Text, FlatList} from 'react-native';
import {Alignment, Value} from '../../constants';

import {OnboardingData} from '../../components/DummyData';
import ItemCard from './ItemCard';
import styles from './styles';
import {SCREEN_WIDTH} from '../../utils/Responsive';

import {replace} from '../../services/NavigationService';
import {Routes} from '../../constants/Constants';

const Indicator = () => {
  return <View style={styles.indicator} />;
};

const OnboardingScreen = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollViewRef = useRef(null);
  const translateX = scrollValue.interpolate({
    inputRange: [Value.CONSTANT_VALUE_0, SCREEN_WIDTH],
    outputRange: [Value.CONSTANT_VALUE_0, Value.CONSTANT_VALUE_41],
  });
  const inputRange = [Value.CONSTANT_VALUE_0];
  const scaleOutputRange = [Value.CONSTANT_VALUE_1];
  OnboardingData.forEach(
    (_, i) =>
      i !== 0 &&
      inputRange.push(
        ...[
          (SCREEN_WIDTH *
            (Value.CONSTANT_VALUE_2 * i - Value.CONSTANT_VALUE_1)) /
            Value.CONSTANT_VALUE_2,
          SCREEN_WIDTH * i,
        ],
      ),
  );
  OnboardingData.forEach(
    (_, i) =>
      i !== 0 &&
      scaleOutputRange.push(
        ...[Value.CONSTANT_VALUE_3, Value.CONSTANT_VALUE_1],
      ),
  );
  const scaleX = scrollValue.interpolate({
    inputRange,
    outputRange: scaleOutputRange,
  });

  const onSkip = async () => {
    replace(Routes.Login, {isLogin: true});
  };
  const onNext = () => {
    if (currentIndex === OnboardingData?.length - Value.CONSTANT_VALUE_1) {
      replace(Routes.Login, {isLogin: true});
    } else {
      scrollViewRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };
  const onViewableItemsChanged = ({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        horizontal
        data={OnboardingData}
        ref={scrollViewRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: Value.CONSTANT_VALUE_50,
        }}
        scrollEnabled={false}
        style={{width: SCREEN_WIDTH}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ItemCard key={item.id} id={item.id} item={item} />
        )}
      />
      <Text style={styles.skip} onPress={onSkip}>
        Skip
      </Text>
      <Text style={styles.next} onPress={onNext}>
        {currentIndex === OnboardingData?.length - Value.CONSTANT_VALUE_1
          ? 'Done'
          : 'Next'}
      </Text>
      <View style={styles.indicatorConatiner} pointerEvents="none">
        {OnboardingData.map(x => (
          <Indicator x={x} key={x} />
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              position: Alignment.ABSOLUTE,
              transform: [{translateX}, {scaleX}],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
