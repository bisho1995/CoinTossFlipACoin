import React, {useEffect, memo} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {Row} from 'native-base';
import Head from './Head';
import Tail from './Tails';

const CoinAnimation = ({style, dim, showHead}) => {
  const spinValue = new Animated.Value(0);
  const spinFn = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: __DEV__ ? 2000 : 800,
      easing: Easing.linear,
    }).start(spinFn);
  };

  useEffect(() => {
    spinFn();
  });

  const spinHead = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spinHeadZ = spinValue.interpolate({
    inputRange: [0, 0.24, 0.25, 0.74, 0.75],
    outputRange: [3, 3, 1, 1, 3],
  });

  const spinTail = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '540deg'],
  });

  const commonProps = {
    ...StyleSheet.absoluteFill,
    opacity: 1,
  };

  return (
    <Animated.View style={{width: '100%'}}>
      <Row style={style}>
        <Animated.View
          style={{
            ...commonProps,
            transform: [{rotateY: spinTail}],
            zIndex: 2,
          }}>
          <Tail dimension={dim} />
        </Animated.View>
        <Animated.View
          style={{
            ...commonProps,
            transform: [{rotateY: spinHead}],
            zIndex: spinHeadZ,
          }}>
          <Head dimension={dim} />
        </Animated.View>
      </Row>
    </Animated.View>
  );
};

export default CoinAnimation;
