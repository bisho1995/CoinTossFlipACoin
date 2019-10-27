import React, {useState, memo} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Container, Card, CardItem, Body, Row, Button, Icon} from 'native-base';
import {Tail, Head, View, Text} from '../components';
import {spacing} from '../styles';
import commonStyles from '../styles/common';
import {dimensions} from '../utils/utils';
import UseTheme from '../context/UseTheme';
import ThemePicker from '../components/ThemePicker';

const {width, height} = dimensions;

const dim = Math.min(width, height) - 30;

const margin = {
  marginTop: 10,
  marginBottom: 10,
};

const Home = ({colors, ...props}) => {
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
  const [rand, setRand] = useState(1);

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.darkPrimary}
        barStyle="light-content"
      />
      <View style={styles.containerStyle}>
        <Row style={{flex: 1}}>
          <View style={styles.margin}>
            <Row style={{display: 'flex', justifyContent: 'space-between'}}>
              <Text width="auto" fontSize={30} marginLeft={spacing.margin}>
                Flip A Coin
              </Text>
              <Text width="auto" marginRight={spacing.margin} marginTop={10}>
                <Icon
                  active
                  name="menu"
                  onPress={() => props.navigation.toggleDrawer()}
                />
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
                  <Text
                    fontSize={30}
                    textAlign="center"
                    color={colors.secondaryText}>
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
  );
};

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: () => <Icon active name="home" />,
};

export default UseTheme(({consumer: {colors: c}, ...props}) => (
  <Home colors={c} {...props} />
));
