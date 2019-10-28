import React, {useState, memo, useEffect} from 'react';
import {StyleSheet, StatusBar, ToastAndroid} from 'react-native';
import {Container, Card, CardItem, Body, Row, Button} from 'native-base';
import {View, Text} from '../components';
import {spacing} from '../styles';
import commonStyles from '../styles/common';
import {dimensions} from '../utils/utils';
import UseTheme from '../context/UseTheme';
import ThemePicker from '../components/ThemePicker';
import Loading from '../components/loading';
import CoinAnimation from '../components/CoinAnimation';
import Sound from 'react-native-sound';

const {width, height} = dimensions;

const dim = Math.min(width, height) - 30;

const margin = {
  marginTop: 10,
  marginBottom: 10,
};

Sound.setCategory('Playback');

const Home = ({colors}) => {
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
      backgroundColor: colors.primary,
    },
    margin,
    flipBtn: {
      width: '100%',
      maxWidth: 200,
      backgroundColor: colors.secondary,
      paddingTop: 30,
      paddingBottom: 30,
      borderRadius: 8,
    },
    footerSection: {
      ...margin,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingTop: 10,
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
    if (!isCalculating) {
      setIsCalculating(true);
      let newRand = Math.floor(Math.random() * 10 + 1);
      while (rand === newRand) {
        newRand = Math.floor(Math.random() * 10 + 1);
      }
      coinFlipAudio.play();
      setMessage(null);
      setRand(newRand);
      setTimeout(() => {
        setMessage(newRand % 2 !== 0 ? 'HEAD' : 'TAIL');
        setIsCalculating(false);
      }, newRand * (__DEV__ ? 1000 : 400));
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
          <Row style={{flex: 1}}>
            <View style={styles.margin}>
              <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                <Text
                  textAlign="center"
                  fontSize={30}
                  style={{fontWeight: 'bold'}}
                  marginLeft={spacing.margin}>
                  Flip A Coin
                </Text>
              </Row>
            </View>
          </Row>
          <Row style={{flex: 6}}>
            <View style={{...commonStyles.flexRowCentered, ...styles.margin}}>
              <Card
                style={{
                  backgroundColor: colors.primary,
                  width: dim,
                }}>
                <CardItem style={{backgroundColor: colors.primary}}>
                  <Body style={{backgroundColor: colors.primary}}>
                    <CoinAnimation
                      key={rand}
                      style={styles.coinsWrapper}
                      dim={dim - 40}
                      turns={rand}
                    />
                  </Body>
                </CardItem>
                <CardItem style={{backgroundColor: colors.primary}}>
                  <Body style={{backgroundColor: colors.primary}}>
                    <Text
                      fontSize={30}
                      textAlign="center"
                      color={colors.secondaryText}>
                      {message}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </Row>
          <Row style={{flex: 2}}>
            <View style={styles.footerSection}>
              <View style={commonStyles.flexRowCentered}>
                <Button style={styles.flipBtn} onPress={handleFlip}>
                  <Text textAlign="center" fontSize={25} color="#fff">
                    TOSS !
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

export default memo(
  UseTheme(({consumer: {colors: c}, ...props}) => (
    <Home colors={c} {...props} />
  )),
);
