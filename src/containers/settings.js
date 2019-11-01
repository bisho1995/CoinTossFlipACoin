import React from 'react';
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import commonStyles from '../styles/common';
import {View, Container, Header, Body} from 'native-base';
import {connect} from 'react-redux';
import Text from '../components/Text';
import {VolumeAndVibration, CoinProperties} from '../components/Settings';

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
  return (
    <Container>
      <Header style={{backgroundColor: colors.surfaceColor}}>
        <StatusBar
          backgroundColor={colors.backgroundColor}
          barStyle="light-content"
        />
        <Body style={styles.body}>
          <View>
            <Text textAlign="center" color={colors.primaryText} fontSize={20}>
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
            <VolumeAndVibration />
            <CoinProperties />
          </View>
        </ScrollView>
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(Settings);
