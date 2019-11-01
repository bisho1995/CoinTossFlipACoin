import React from 'react';
import commonStyles from '../../styles/common';
import {connect} from 'react-redux';
import Heading from '../Heading';
import Text from '../Text';
import View from '../View';
import {Row, Button} from 'native-base';
import {StyleSheet} from 'react-native';

const ResetApp = ({colors, resetSettings, resetApp}) => {
  const styles = StyleSheet.create({
    row: {
      ...commonStyles.marginTiny,
      flex: 1,
    },
    text: {fontSize: 12},
  });
  return (
    <View
      style={{
        backgroundColor: colors.error,
        ...commonStyles.padding,
        ...commonStyles.margin,
      }}>
      <Heading
        title="Reset"
        icon={{name: 'exclamation-triangle', color: '#D50000'}}
      />
      <View>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Reset Settings</Text>
          </View>
          <Button
            onPress={resetSettings}
            small
            style={{maxWidth: 100, backgroundColor: colors.primaryDark}}>
            <Text textAlign="center">Reset Settings</Text>
          </Button>
        </Row>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Reset App</Text>
          </View>

          <Button
            onPress={resetApp}
            small
            style={{maxWidth: 100, backgroundColor: colors.primaryDark}}>
            <Text textAlign="center">Reset App</Text>
          </Button>
        </Row>
      </View>
    </View>
  );
};

const mapStateToProps = ({
  ThemeReducer: {theme},
  AppSettingReducer: {coinSpeed},
}) => ({
  coinSpeed,
  colors: theme,
});

const mapDispatchToProps = dispatch => {
  return {
    setCoinSpeed: speed => dispatch({type: 'COIN_SPEED', value: speed}),
    resetSettings: () => dispatch({type: 'RESET_APP_SETTINGS'}),
    resetApp: () => {
      dispatch({type: 'RESET_APP_SETTINGS'});
      dispatch({type: 'RESET_APP_STATE'});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetApp);
