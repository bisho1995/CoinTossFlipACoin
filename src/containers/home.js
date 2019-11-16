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
const sectionPadding = {
  paddingTop: 20,
  paddingBottom: 20,
};

const Home = ({
  colors,
  coinSpeed,
  vibrationDuration,
  vibrationEnabled,
  incrementHead,
  incrementTail,
  volumeEnabled,
  prevResult = null,
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
      maxWidth: 170,
      minHeight: 65,
      backgroundColor: colors.primary,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 10,
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
    sectionPadding: sectionPadding,
    coinContainer: {
      ...sectionPadding,
      flex: 6,
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
      if (volumeEnabled) {
        coinFlipAudio.play();
      }
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
      }, newRand * coinSpeed);
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
          <Row style={styles.coinContainer}>
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
                  color={colors.primaryText}>
                  {message}
                </Text>
                {prevResult && !isCalculating ? (
                  <Text
                    fontSize={12}
                    textAlign="center"
                    color={colors.primaryText}>
                    The previous result was {prevResult}
                  </Text>
                ) : null}
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
                  <Text textAlign="center" fontSize={20} color="#fff">
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

const mapStateToProps = ({
  AppSettingReducer: {
    coinSpeed,
    vibrationDuration,
    vibrationEnabled,
    volumeEnabled,
  },
  AppStateReducer: {prevResult},
}) => {
  return {
    coinSpeed,
    vibrationDuration,
    vibrationEnabled,
    volumeEnabled,
    prevResult,
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
