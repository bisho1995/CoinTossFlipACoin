import React, {useState, memo, useEffect} from 'react';
import {StyleSheet, StatusBar, ToastAndroid, Vibration} from 'react-native';
import {Container, Row, Button} from 'native-base';
import {View, Text} from '../components';
import commonStyles from '../styles/common';
import {dimensions} from '../utils/utils';
import UseTheme from '../context/UseTheme';
import Loading from '../components/loading';
import CoinAnimation from '../components/CoinAnimation';
import Sound from 'react-native-sound';
import {connect} from 'react-redux';

const {width, height} = dimensions;

const dim = Math.min(Math.min(width, height) - 30 - 40, 300);

const margin = {
  marginTop: 10,
  marginBottom: 10,
};

Sound.setCategory('Playback');

const Home = ({
  colors,
  animationSpeed: {dev: devSpeed, prod: prodSpeed} = {},
  vibrationDuration,
  vibrationEnabled,
  incrementHead,
  incrementTail,
}) => {
  const styles = StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFill,
      ...commonStyles.flexColumn,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'space-around',
    },
    coinsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: dim,
      backgroundColor: colors.backgroundColor,
    },
    margin,
    flipBtn: {
      width: '100%',
      maxWidth: 200,
      backgroundColor: colors.secondary,
      paddingTop: 30,
      paddingBottom: 30,
      borderRadius: 8,
      elevation: 5,
    },
    footerSection: {
      ...margin,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingTop: 10,
    },
    sectionPadding: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  });
  const [rand, setRand] = useState(0);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  const coinFlipAudio = new Sound('coinflip.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
    }
  });

  const handleFlip = () => {
    if (vibrationEnabled) {
      Vibration.vibrate(vibrationDuration);
    }
    if (!isCalculating) {
      setIsCalculating(true);
      let newRand = Math.floor(Math.random() * 10 + 3);
      while (rand === newRand) {
        newRand = Math.floor(Math.random() * 10 + 8);
      }
      coinFlipAudio.play();
      setMessage(null);
      setRand(newRand);
      setTimeout(() => {
        const isHead = newRand % 2 !== 0;
        setMessage(isHead ? 'HEAD' : 'TAIL');
        if (isHead) {
          incrementHead();
        } else {
          incrementTail();
        }
        setIsCalculating(false);
        coinFlipAudio.stop();
      }, newRand * (__DEV__ ? devSpeed : prodSpeed));
    } else {
      ToastAndroid.show('Hold up', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? <Loading /> : null}
      <Container>
        <StatusBar
          backgroundColor={colors.backgroundColor}
          barStyle="light-content"
        />
        <View style={styles.containerStyle}>
          <Row
            style={{
              ...styles.sectionPadding,
              flex: 6,
            }}>
            <View
              style={{
                ...styles.margin,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: dim,
                }}>
                <CoinAnimation
                  key={rand}
                  style={styles.coinsWrapper}
                  dim={dim}
                  turns={rand}
                />
              </View>
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                }}>
                <Text
                  fontSize={30}
                  textAlign="center"
                  color={colors.secondaryText}>
                  {message}
                </Text>
              </View>
            </View>
          </Row>
          <Row
            style={{
              ...styles.sectionPadding,
              flex: 1,
            }}>
            <View style={styles.footerSection}>
              <View style={commonStyles.flexRowCentered}>
                <Button style={styles.flipBtn} onPress={handleFlip}>
                  <Text textAlign="center" fontSize={25} color="#fff">
                    TOSS
                  </Text>
                </Button>
              </View>
            </View>
          </Row>
        </View>
      </Container>
    </>
  );
};

const mapStateToProps = ({AppSettingReducer: {animationSpeed, vibration}}) => {
  return {
    animationSpeed,
    vibration,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementHead: () => dispatch({type: 'HEAD'}),
    incrementTail: () => dispatch({type: 'TAIL'}),
  };
};

const WrappedHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default memo(
  UseTheme(({consumer: {colors: c}, ...props}) => (
    <WrappedHome colors={c} {...props} />
  )),
);
