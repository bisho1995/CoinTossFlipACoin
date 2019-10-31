import React, {useState, useCallback} from 'react';
import Heading from './Shared/Heading';
import View from '../View';
import Text from '../Text';
import {Switch, StyleSheet, Vibration} from 'react-native';
import {Row} from 'native-base';
import Slider from '@react-native-community/slider';
import commonStyles from '../../styles/common';
import {connect} from 'react-redux';

const VolumeAndVibration = ({
  colors,
  enableVolume,
  disableVolume,
  volumeLevel,
  enableVibration,
  disableVibration,
}) => {
  const styles = StyleSheet.create({
    row: {
      ...commonStyles.marginTiny,
      flex: 1,
      paddingBottom: 6,
      paddingTop: 6,
      borderBottomColor: colors.divider,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderWidth: 1,
    },
    text: {fontSize: 12},
  });

  const [volumeEnabled, setVolumeEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [volume, setVolume] = useState(1);

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
        ? enableVibration() && Vibration.vibrate(200)
        : disableVibration();
    },
    [disableVibration, enableVibration],
  );

  const volumeChangeHandler = useCallback(
    v => {
      setVolume(v);

      volumeLevel(v);
    },
    [volumeLevel],
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
              trackColor={colors.secondaryLight}
              thumbColor={colors.secondary}
              value={volumeEnabled}
              onValueChange={volumeEnabledHandler}
            />
          </View>
        </Row>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Volume</Text>
          </View>
          <Slider
            step={0.1}
            thumbTintColor={colors.secondary}
            minimumTrackTintColor={colors.secondaryLight}
            style={{width: 150, height: 40}}
            value={volume}
            onValueChange={volumeChangeHandler}
          />
        </Row>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Vibration</Text>
          </View>
          <View>
            <Switch
              trackColor={colors.secondaryLight}
              thumbColor={colors.secondary}
              value={vibrationEnabled}
              onValueChange={vibrationEnabledHandler}
            />
          </View>
        </Row>
      </View>
    </View>
  );
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});
const mapDispatchToProps = dispatch => {
  return {
    enableVolume: () => dispatch({type: 'ENABLE_VOLUME'}),
    disableVolume: () => dispatch({type: 'DISABLE_VOLUME'}),
    enableVibration: () => dispatch({type: 'ENABLE_VIBRATION'}),
    disableVibration: () => dispatch({type: 'DISABLE_VIBRATION'}),
    volumeLevel: value => dispatch({type: 'VOLUME_LEVEL', value}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VolumeAndVibration);
