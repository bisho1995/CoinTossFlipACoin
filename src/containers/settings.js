import React from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {StyleSheet, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import styled from 'styled-components';
import commonStyles from '../styles/common';
import {View, Container, Header, Body, Row, Switch} from 'native-base';
import {connect} from 'react-redux';
import Text from '../components/Text';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
  },
  marginTiny: {
    marginTop: 5,
    marginBottom: 5,
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
          <View
            style={{
              backgroundColor: colors.backgroundColor,
            }}>
            <View
              style={{
                backgroundColor: colors.surfaceColor,
                ...commonStyles.padding,
                ...styles.margin,
              }}>
              <View>
                <Text>Volume And Vibration</Text>
              </View>
              <View style={{flex: 1, width: '100%'}}>
                <Row style={{...styles.marginTiny, flex: 1}}>
                  <View style={{flex: 1}}>
                    <Text>Volume Enabled</Text>
                  </View>
                  <View>
                    <Switch
                      trackColor={colors.secondaryLight}
                      thumbColor={colors.secondary}
                      value={true}
                    />
                  </View>
                </Row>
                <Row style={{...styles.margin, flex: 1}}>
                  <View style={{flex: 1}}>
                    <Text>Volume</Text>
                  </View>
                  <View>
                    <Slider
                      step={0.1}
                      thumbTintColor={colors.secondary}
                      minimumTrackTintColor={colors.secondaryLight}
                      style={{width: 150, height: 40}}
                    />
                  </View>
                </Row>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(Settings);
