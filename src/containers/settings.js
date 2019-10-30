import React from 'react';
import Text from '../components/Text';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {StyleSheet, ScrollView} from 'react-native';
import commonStyles from '../styles/common';
import {View, Container, Header, Body, Card, CardItem, Row} from 'native-base';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Settings = ({colors}) => {
  changeNavigationBarColor(colors.darkPrimary);

  return (
    <Container>
      <Header style={{backgroundColor: colors.surfaceColor}}>
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
          ...commonStyles.padding,
          backgroundColor: colors.backgroundColor,
        }}>
        <ScrollView alwaysBounceVertical>
          <Card style={{backgroundColor: colors.backgroundColor}}>
            <CardItem
              style={{
                backgroundColor: colors.surfaceColor,
                display: 'flex',
                flexDirection: 'column',
                ...commonStyles.padding,
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
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(Settings);
