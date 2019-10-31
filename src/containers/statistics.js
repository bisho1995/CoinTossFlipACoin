import React from 'react';
import Text from '../components/Text';
import {StyleSheet, StatusBar} from 'react-native';
import commonStyles from '../styles/common';
import {Header, Body, View} from 'native-base';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Statistics = ({colors, head, tail}) => {
  return (
    <View style={{flex: 1}}>
      <Header style={{backgroundColor: colors.surfaceColor}}>
        <StatusBar
          backgroundColor={colors.backgroundColor}
          barStyle="light-content"
        />
        <Body style={styles.body}>
          <View>
            <Text textAlign="center" color={colors.secondaryText} fontSize={20}>
              Statistics
            </Text>
          </View>
        </Body>
      </Header>
      <View
        style={{
          ...commonStyles.padding,
          backgroundColor: colors.backgroundColor,
          flex: 1,
        }}>
        <View
          style={{
            ...commonStyles.padding,
            backgroundColor: colors.surfaceColor,
          }}>
          <Text>
            Heads: {head}
            {head + tail > 0
              ? ' | ' +
                parseFloat((head * 100) / (head + tail)).toFixed(2) +
                '%'
              : ''}
          </Text>
          <Text>
            Tails: {tail}
            {head + tail > 0
              ? ' | ' +
                parseFloat((tail * 100) / (head + tail)).toFixed(2) +
                '%'
              : ''}
          </Text>
        </View>
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

export default connect(mapStateToProps)(Statistics);
