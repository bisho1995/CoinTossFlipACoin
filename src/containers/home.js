import React, {useState, memo, useEffect} from 'react';
import {StyleSheet, StatusBar, ToastAndroid, Vibration} from 'react-native';
import {Container, Card, CardItem, Body, Row, Button} from 'native-base';
import {View, Text} from '../components';
import commonStyles from '../styles/common';
import {dimensions} from '../utils/utils';
import UseTheme from '../context/UseTheme';
import ThemePicker from '../components/ThemePicker';
import Loading from '../components/loading';
import CoinAnimation from '../components/CoinAnimation';
import Sound from 'react-native-sound';
import {connect} from 'react-redux';

const {width, height} = dimensions;

const dim = Math.min(width, height) - 30;

const margin = {
  marginTop: 10,
  marginBottom: 10,
};

Sound.setCategory('Playback');

const Home = ({
  colors,
  animationSpeed: {dev: devSpeed, prod: prodSpeed} = {},
  vibration,
  incrementHead,
  incrementTail,
}) => {
  const styles = StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFill,
      ...commonStyles.flexColumn,
      backgroundColor: colors.lightPrimary,
      justifyContent: 'space-around',
    },
    coinsWrapper: {
      justifyContent: 'center',
      width: '100%',
      height: dim,
      backgroundColor: colors.lightPrimary,
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
    Vibration.vibrate(vibration.duration);
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
          backgroundColor={colors.darkPrimary}
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
                maxHeight: 450,
              }}>
              <Body
                style={{
                  backgroundColor: colors.lightPrimary,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <CoinAnimation
                  key={rand}
                  style={styles.coinsWrapper}
                  dim={Math.min(dim - 40, 300)}
                  turns={rand}
                />
              </Body>
              <Body style={{backgroundColor: colors.lightPrimary}}>
                <Text
                  fontSize={30}
                  textAlign="center"
                  color={colors.secondaryText}>
                  {message}
                </Text>
              </Body>
            </View>
          </Row>
          <Row
            style={{
              ...styles.sectionPadding,
              flex: 3,
            }}>
            <View style={styles.footerSection}>
              <View style={commonStyles.flexRowCentered}>
                <Button style={styles.flipBtn} onPress={handleFlip}>
                  <Text textAlign="center" fontSize={25} color="#fff">
                    TOSS
                  </Text>
                </Button>
              </View>
              <ThemePicker />
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
