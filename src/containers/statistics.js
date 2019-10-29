import React from 'react';
import Text from '../components/Text';
import View from '../components/View';
import {StyleSheet} from 'react-native';
import {Container, Header, Body} from 'native-base';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Statistics = ({colors, head, tail}) => (
  <Container>
    <Header style={{backgroundColor: colors.darkPrimary}}>
      <Body style={styles.body}>
        <View>
          <Text textAlign="center" color={colors.secondaryText} fontSize={20}>
            Statistics
          </Text>
        </View>
      </Body>
    </Header>
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text color="black">
        Heads: {head} |{' '}
        {head + tail > 0
          ? parseFloat((head * 100) / (head + tail)).toFixed(2)
          : ''}
        %
      </Text>
      <Text color="black">
        Tails: {tail} |{' '}
        {head + tail > 0
          ? parseFloat((tail * 100) / (head + tail)).toFixed(2)
          : ''}
        %
      </Text>
    </View>
  </Container>
);

const mapStateToProps = ({
  ThemeReducer: {theme},
  AppStateReducer: {head, tail},
}) => ({
  colors: theme,
  head,
  tail,
});

export default connect(mapStateToProps)(Statistics);
