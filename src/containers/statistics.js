import React from 'react';
import {Text, Heading} from '../components';
import {StyleSheet, StatusBar} from 'react-native';
import commonStyles from '../styles/common';
import {Header, Body, View} from 'native-base';
import {connect} from 'react-redux';

const Statistics = ({colors, head, tail}) => {
  const headPercentage = parseFloat((head * 100) / (head + tail)).toFixed(2);
  const tailPercentage = parseFloat((tail * 100) / (head + tail)).toFixed(2);

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
    },
  });

  return (
    <View style={{flex: 1}}>
      <Header style={{backgroundColor: colors.surfaceColor}}>
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
        <View style={styles.surface}>
          <Text
            style={{fontSize: 30, textAlign: 'center', color: colors.primary}}>
            Heads: {headPercentage}%
          </Text>
          <Text
            style={{fontSize: 30, textAlign: 'center', color: colors.primary}}>
            Tails: {tailPercentage}%
          </Text>
        </View>

        <View style={styles.surface}>
          <Heading title="All Toss" />
          <Text style={styles.text}>Heads: {head}</Text>
          <Text style={styles.text}>Tails: {tail}</Text>
        </View>

        {/* <View style={styles.surface}>
          <Heading title="Last 7 days" />
          <Text style={styles.text}>Heads: {head}</Text>
          <Text style={styles.text}>Tails: {tail}</Text>
        </View> */}
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
