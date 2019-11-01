import React from 'react';
import PropTypes from 'prop-types';
import {Heading, Text} from '../components';
import {StyleSheet, StatusBar} from 'react-native';
import commonStyles from '../styles/common';
import {Header, Body, View, Button} from 'native-base';
import {connect} from 'react-redux';

const Statistics = ({colors, head, tail, resetAppState}) => {
  let headPercentage =
    head + tail > 0 ? parseFloat((head * 100) / (head + tail)).toFixed(2) : 0;
  let tailPercentage =
    head + tail > 0 ? parseFloat((tail * 100) / (head + tail)).toFixed(2) : 0;

  const styles = StyleSheet.create({
    body: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
      fontSize: 14,
      marginTop: 10,
      marginBottom: 10,
    },
    surface: {
      ...commonStyles.padding,
      ...commonStyles.margin,
      backgroundColor: colors.surfaceColor,
    },
    background: {
      ...commonStyles.padding,
      backgroundColor: colors.backgroundColor,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={{flex: 1}}>
      <Header style={{backgroundColor: colors.backgroundColor}}>
        <StatusBar
          backgroundColor={colors.backgroundColor}
          barStyle="light-content"
        />
        <Body style={styles.body}>
          <View>
            <Text textAlign="center" color={colors.primaryText} fontSize={20}>
              Statistics
            </Text>
          </View>
        </Body>
      </Header>
      <View style={styles.background}>
        <View>
          <View style={styles.surface}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: colors.primary,
              }}>
              Heads: {headPercentage}%
            </Text>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: colors.primary,
              }}>
              Tails: {tailPercentage}%
            </Text>
          </View>

          <View style={styles.surface}>
            <Heading title="All Toss" />
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text width="auto" style={styles.text}>
                Out of a total of{' '}
              </Text>
              <Text width="auto" fontWeight="bold" style={styles.text}>
                {head + tail}
              </Text>
              <Text width="auto" style={styles.text}>
                {' '}
                tosses.
              </Text>
            </View>
            <Text fontWeight="bold" style={styles.text}>
              Heads: {head}
            </Text>
            <Text fontWeight="bold" style={styles.text}>
              Tails: {tail}
            </Text>
          </View>
        </View>
        <Button onPress={resetAppState} block danger title="reset">
          <Text style={{textAlign: 'center', fontSize: 18}}>Reset</Text>
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = ({
  ThemeReducer: {theme},
  AppStateReducer: {head, tail},
}) => ({
  colors: theme,
  head,
  tail,
});

const mapDispatchToProps = dispatch => {
  return {
    resetAppState: () => dispatch({type: 'RESET_APP_STATE'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Statistics);

Statistics.propTypes = {
  colors: PropTypes.shape({}),
  head: PropTypes.number,
  tail: PropTypes.number,
  resetAppState: PropTypes.func,
};
Statistics.defaultProps = {
  color: {},
  head: 0,
  tail: 0,
  resetAppState: () => {},
};
