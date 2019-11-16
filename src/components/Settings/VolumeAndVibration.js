import React, {useCallback, memo} from 'react';
import Heading from '../Heading';
import PropTypes from 'prop-types';
import View from '../View';
import Text from '../Text';
import {Switch, StyleSheet, Vibration} from 'react-native';
import {Row} from 'native-base';
import commonStyles from '../../styles/common';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  row: {
    ...commonStyles.marginTiny,
    flex: 1,
  },
  text: {
    fontSize: 12,
    minHeight: 44,
    paddingTop: 10,
  },
  switchTouchableArea: {
    maxWidth: 90,
    minHeight: 44,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const VolumeAndVibration = ({
  colors,
  vibrationEnabled,
  volumeEnabled,
  volumeToggle,
  vibrationToggle,
  vibrationDuration,
}) => {
  const volumeChangeHandler = useCallback(enabled => volumeToggle(enabled), [
    volumeToggle,
  ]);

  const vibrationChangeHandler = useCallback(
    enabled =>
      vibrationToggle(enabled) &&
      (enabled && Vibration.vibrate(vibrationDuration)),
    [vibrationDuration, vibrationToggle],
  );

  return (
    <View
      style={{
        backgroundColor: colors.surfaceColor,
        ...commonStyles.padding,
        ...commonStyles.margin,
      }}>
      <Heading
        title="Volume And Vibration"
        icon={{name: 'volume-up', color: '#9c27b0'}}
      />
      <View>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Volume</Text>
          </View>
          <View style={styles.switchTouchableArea}>
            <Switch
              onTintColor={colors.primaryVeryLight}
              trackColor={colors.primaryVeryLight}
              thumbColor={colors.primary}
              value={volumeEnabled}
              onValueChange={volumeChangeHandler}
            />
          </View>
        </Row>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Vibration</Text>
          </View>
          <View style={styles.switchTouchableArea}>
            <Switch
              onTintColor={colors.primaryVeryLight}
              trackColor={colors.primaryVeryLight}
              thumbColor={colors.primary}
              value={vibrationEnabled}
              onValueChange={vibrationChangeHandler}
            />
          </View>
        </Row>
      </View>
    </View>
  );
};

const mapStateToProps = ({
  AppSettingReducer: {vibrationDuration, vibrationEnabled, volumeEnabled},
  ThemeReducer: {theme},
}) => ({colors: theme, vibrationDuration, vibrationEnabled, volumeEnabled});
const mapDispatchToProps = dispatch => {
  return {
    volumeToggle: x => dispatch({type: 'VOLUME_TOGGLE', value: x}),
    vibrationToggle: x => dispatch({type: 'VIBRATION_TOGGLE', value: x}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(VolumeAndVibration));

VolumeAndVibration.propTypes = {
  colors: PropTypes.shape({}),
  vibrationEnabled: PropTypes.bool,
  volumeEnabled: PropTypes.bool,
  volumeToggle: PropTypes.func,
  vibrationToggle: PropTypes.func,
  vibrationDuration: PropTypes.number,
};
VolumeAndVibration.defaultProps = {
  colors: {},
  vibrationEnabled: true,
  volumeEnabled: true,
  volumeToggle: () => {},
  vibrationToggle: () => {},
  vibrationDuration: 200,
};
