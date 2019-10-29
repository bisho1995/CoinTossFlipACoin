import React from 'react';
import Text from '../components/Text';

import {StyleSheet, ScrollView} from 'react-native';
import {View, Container, Header, Body, Card, CardItem, Row} from 'native-base';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Settings = ({colors}) => (
  <Container>
    <Header style={{backgroundColor: colors.darkPrimary}}>
      <Body style={styles.body}>
        <View>
          <Text textAlign="center" color={colors.secondaryText} fontSize={20}>
            Settings
          </Text>
        </View>
      </Body>
    </Header>
    <Container
      padder
      style={{
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.darkPrimary,
      }}>
      <ScrollView alwaysBounceVertical>
        <Card style={{backgroundColor: colors.lightPrimary}}>
          <CardItem
            style={{
              backgroundColor: colors.lightPrimary,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, width: '100%'}}>
              <Row style={{flex: 1}}>
                <View style={{flex: 1}}>
                  <Text style={{fontWeight: 'bold'}}>Volume</Text>
                </View>
                <View>
                  <Text>toggle</Text>
                </View>
              </Row>
            </View>
            <View style={{flex: 1, width: '100%'}}>
              <Row>
                <View style={{flex: 1}}>
                  <Text>Theme</Text>
                </View>
                <View>
                  <Text>toggle</Text>
                </View>
              </Row>
            </View>
            <View style={{flex: 1, width: '100%'}}>
              <Row>
                <View style={{flex: 1}}>
                  <Text>Speed</Text>
                </View>
                <View>
                  <Text>toggle</Text>
                </View>
              </Row>
            </View>
          </CardItem>
        </Card>
      </ScrollView>
    </Container>
  </Container>
);

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(Settings);
