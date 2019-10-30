import React from 'react';
import Text from '../components/Text';
import {StyleSheet} from 'react-native';
import commonStyles from '../styles/common';
import {Container, Header, Body, View} from 'native-base';
import {connect} from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Statistics = ({colors, head, tail}) => {
  changeNavigationBarColor(colors.darkPrimary);

  return (
    <Container>
      <Header style={{backgroundColor: colors.surfaceColor}}>
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
            Heads: {head} |{' '}
            {head + tail > 0
              ? parseFloat((head * 100) / (head + tail)).toFixed(2)
              : ''}
            %
          </Text>
          <Text>
            Tails: {tail} |{' '}
            {head + tail > 0
              ? parseFloat((tail * 100) / (head + tail)).toFixed(2)
              : ''}
            %
          </Text>
        </View>
      </View>
    </Container>
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
