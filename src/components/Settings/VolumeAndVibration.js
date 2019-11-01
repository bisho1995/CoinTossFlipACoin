import React, {useState, useCallback} from 'react';
import Heading from '../Heading';
import View from '../View';
import Text from '../Text';
import {Switch, StyleSheet, Vibration} from 'react-native';
import {Row} from 'native-base';
import commonStyles from '../../styles/common';
import {connect} from 'react-redux';

const VolumeAndVibration = ({
  colors,
  enableVolume,
  disableVolume,
  enableVibration,
  disableVibration,
  vibrationDuration,
}) => {
  const styles = StyleSheet.create({
    row: {
      ...commonStyles.marginTiny,
      flex: 1,
    },
    text: {fontSize: 12},
  });

  const [volumeEnabled, setVolumeEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  const volumeEnabledHandler = useCallback(
    enabled => {
      setVolumeEnabled(enabled);
      return enabled ? enableVolume() : disableVolume();
    },
    [disableVolume, enableVolume],
  );

  const vibrationEnabledHandler = useCallback(
    enabled => {
      setVibrationEnabled(enabled);
      return enabled
        ? enableVibration() && Vibration.vibrate(vibrationDuration)
        : disableVibration();
    },
    [disableVibration, enableVibration, vibrationDuration],
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
          <View>
            <Switch
              trackColor={colors.primaryLight}
              thumbColor={colors.primary}
              value={volumeEnabled}
              onValueChange={volumeEnabledHandler}
            />
          </View>
        </Row>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Vibration</Text>
          </View>
          <View>
            <Switch
              trackColor={colors.primaryLight}
              thumbColor={colors.primary}
              value={vibrationEnabled}
              onValueChange={vibrationEnabledHandler}
            />
          </View>
        </Row>
      </View>
    </View>
  );
};

const mapStateToProps = ({
  AppSettingReducer: {vibrationDuration},
  ThemeReducer: {theme},
}) => ({colors: theme, vibrationDuration});
const mapDispatchToProps = dispatch => {
  return {
    enableVolume: () => dispatch({type: 'ENABLE_VOLUME'}),
    disableVolume: () => dispatch({type: 'DISABLE_VOLUME'}),
    enableVibration: () => dispatch({type: 'ENABLE_VIBRATION'}),
    disableVibration: () => dispatch({type: 'DISABLE_VIBRATION'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VolumeAndVibration);
