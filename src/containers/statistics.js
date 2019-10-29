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

const Statistics = ({colors}) => (
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
  </Container>
);

const mapStateToProps = ({theme}) => ({colors: theme});

export default connect(mapStateToProps)(Statistics);
