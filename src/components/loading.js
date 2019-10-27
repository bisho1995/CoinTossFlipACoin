import React, {memo, useEffect} from 'react';
import View from './View';
import {Modal, StyleSheet, Animated, Easing} from 'react-native';
import {Row} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const iconSize = 80;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },
  iconWrapper: {
    height: iconSize + 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Loading = () => {
  const spinValue = new Animated.Value(0);

  const spinFn = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
    }).start(spinFn);
  };

  useEffect(() => {
    spinFn();
  });

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  console.log(spin);

  return (
    <Modal animationType="fade" transparent={false} visible={true}>
      <View style={styles.wrapper}>
        <Row style={styles.iconWrapper}>
          <Animated.View
            style={{maxWidth: iconSize, transform: [{rotate: spin}]}}>
            <Icon name="spinner" size={iconSize} color="#e2e2e2" />
          </Animated.View>
        </Row>
      </View>
    </Modal>
  );
};

export default memo(Loading);
