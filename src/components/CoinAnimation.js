import React from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {Row} from 'native-base';
import Head from './Head';
import Tail from './Tails';

class CoinAnimation extends React.Component {
  spinValue = new Animated.Value(0);
  state = {
    currTurns: 0,
  };

  componentDidMount() {
    if (this.props.turns > 0) {
      this.spinFn();
    }
  }

  spinFn = () => {
    const {turns} = this.props;
    this.setState(({currTurns}) => ({currTurns: currTurns + 1}));
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: __DEV__ ? 1000 : 400,
      easing: Easing.linear,
    }).start(() => {
      if (this.state.currTurns < turns) {
        this.spinFn();
      }
    });
  };

  render() {
    const {currTurns} = this.state;
    const {style, dim} = this.props;
    const spinHead = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    const spinHeadZ = this.spinValue.interpolate({
      inputRange: [0, 0.49, 0.5, 1],
      outputRange: [
        currTurns % 2 === 0 ? 3 : 1,
        currTurns % 2 === 0 ? 3 : 1,
        currTurns % 2 === 0 ? 1 : 3,
        currTurns % 2 === 0 ? 1 : 3,
      ],
    });

    const spinTail = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '360deg'],
    });

    const commonProps = {
      ...StyleSheet.absoluteFill,
      opacity: 1,
    };

    return (
      <Animated.View
        style={{
          width: dim,
          height: dim,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Row
          style={{
            ...style,
            width: '100%',
            flex: 1,
          }}>
          <Animated.View
            style={{
              ...commonProps,
              transform: [{rotateY: spinTail}],
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
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
  }
}

export default CoinAnimation;
