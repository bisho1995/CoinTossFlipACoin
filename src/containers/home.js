import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Container, Card, CardItem, Body, Row, Button} from 'native-base';
import {Tail, View, Text} from '../components';
import colors from '../styles/colors';
import commonStyles from '../styles/common';

const {width, height} = Dimensions.get('window');

const dim = Math.min(width, height) - 30;

const styles = StyleSheet.create({
  coinsWrapper: {
    justifyContent: 'center',
    width: '100%',
    height: dim,
    backgroundColor: colors.primary,
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
  },
  flipBtn: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: colors.secondary,
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const Home = () => (
  <Container>
    <View
      style={{
        ...StyleSheet.absoluteFill,
        ...commonStyles.flexColumn,
        backgroundColor: colors.primary,
        justifyContent: 'space-around',
      }}>
      <Row style={{flex: 1}}>
        <View style={styles.margin}>
          <Text textAlign="center" fontSize={40}>
            Flip A Coin
          </Text>
        </View>
      </Row>
      <Row style={{flex: 7}}>
        <View style={{...commonStyles.flexRowCentered, ...styles.margin}}>
          <Card
            style={{
              backgroundColor: colors.primary,
              width: dim,
            }}>
            <CardItem style={{backgroundColor: colors.primary}}>
              <Body style={{backgroundColor: colors.primary}}>
                <Row style={styles.coinsWrapper}>
                  <TouchableOpacity
                    style={styles.coinsWrapper}
                    onPress={() => console.log('pressed')}>
                    <Tail dimension={dim - 40} />
                  </TouchableOpacity>
                </Row>
              </Body>
            </CardItem>
            <CardItem style={{backgroundColor: colors.primary}}>
              <Body style={{backgroundColor: colors.primary}}>
                <Text fontSize={30} textAlign="center">
                  It's a tails
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Row>
      <Row style={{flex: 2}}>
        <View style={{...commonStyles.flexRowCentered, ...styles.margin}}>
          <Button style={styles.flipBtn}>
            <Text textAlign="center" fontSize={25}>
              TOSS !
            </Text>
          </Button>
        </View>
      </Row>
    </View>
  </Container>
);
export default Home;
