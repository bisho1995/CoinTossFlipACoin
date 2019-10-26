import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Card, CardItem, Body, Row, Button} from 'native-base';
import {Tail, Head, View, Text} from '../components';
import colors from '../styles/colors';
import commonStyles from '../styles/common';
import {dimensions} from '../utils/utils';

const {width, height} = dimensions;

const dim = Math.min(width, height) - 30;

const margin = {
  marginTop: 10,
  marginBottom: 10,
};

const styles = StyleSheet.create({
  containerStyle: {
    ...StyleSheet.absoluteFill,
    ...commonStyles.flexColumn,
    backgroundColor: colors.primary,
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
  },
  footerSection: {
    ...commonStyles.flexColumnCentered,
    ...margin,
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 10,
  },
});

const Home = () => {
  const [rand, setRand] = useState(1);

  return (
    <Container>
      <View style={styles.containerStyle}>
        <Row style={{flex: 1}}>
          <View style={styles.margin}>
            <Row style={{display: 'flex', justifyContent: 'space-between'}}>
              <Text width="auto" fontSize={30}>
                Flip A Coin
              </Text>
              <Text width="auto" style={{marginRight: 15, marginTop: 15}}>
                Hamburger
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
                  <Row style={styles.coinsWrapper}>
                    {rand % 2 === 0 ? (
                      <Tail dimension={dim - 40} />
                    ) : (
                      <Head dimension={dim - 40} />
                    )}
                  </Row>
                </Body>
              </CardItem>
              <CardItem style={{backgroundColor: colors.primary}}>
                <Body style={{backgroundColor: colors.primary}}>
                  <Text fontSize={30} textAlign="center">
                    It's a {rand % 2 === 0 ? 'tail' : 'head'}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        </Row>
        <Row style={{flex: 2}}>
          <View style={styles.footerSection}>
            <View style={commonStyles.flexRowCentered}>
              <Button
                style={styles.flipBtn}
                onPress={() => setRand(Math.floor(Math.random() * 10 + 1))}>
                <Text textAlign="center" fontSize={25}>
                  TOSS !
                </Text>
              </Button>
            </View>
            <Text textAlign="center">Themes</Text>
          </View>
        </Row>
      </View>
    </Container>
  );
};
export default Home;
