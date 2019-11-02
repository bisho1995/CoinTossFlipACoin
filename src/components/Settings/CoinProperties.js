import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import Heading from '../Heading';
import {StyleSheet} from 'react-native';
import View from '../View';
import {Row} from 'native-base';
import commonStyles from '../../styles/common';
import Slider from '@react-native-community/slider';
import {debounce} from 'lodash';
import Text from '../Text';

const CoinProperties = ({coinSpeed, setCoinSpeed, colors}) => {
  const styles = StyleSheet.create({
    row: {
      ...commonStyles.marginTiny,
      flex: 1,
    },
    text: {fontSize: 12},
  });

  const minimumValue = 50;
  const maximumValue = 500;

  const value = maximumValue - (coinSpeed - minimumValue);

  const handleSliderChange = useCallback(
    debounce(val => {
      setCoinSpeed(minimumValue + maximumValue - val);
    }, 300),
    [],
  );

  return (
    <View
      style={{
        backgroundColor: colors.surfaceColor,
        ...commonStyles.padding,
        ...commonStyles.margin,
      }}>
      <Heading title="Coin Settings" icon={{name: 'rupee', color: '#FFEB3B'}} />
      <View>
        <Row style={styles.row}>
          <View>
            <Text style={styles.text}>Speed</Text>
          </View>
          <Slider
            step={10}
            thumbTintColor={colors.primary}
            minimumTrackTintColor={colors.primaryLight}
            style={{width: 150, height: 40}}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            value={value}
            onValueChange={handleSliderChange}
          />
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
    setCoinSpeed: speed => dispatch({type: 'SET_COIN_SPEED', value: speed}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinProperties);
