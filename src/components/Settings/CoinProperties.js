import React from 'react';
import {connect} from 'react-redux';
import Heading from '../Heading';
import {StyleSheet} from 'react-native';
import View from '../View';
import {Row} from 'native-base';
import commonStyles from '../../styles/common';
import {throttle} from 'lodash';
import Slider from '@react-native-community/slider';
import Text from '../Text';

const CoinProperties = ({coinSpeed, setCoinSpeed, colors}) => {
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
            step={0.1}
            thumbTintColor={colors.primary}
            minimumTrackTintColor={colors.primaryLight}
            style={{width: 150, height: 40}}
            //   value={volume}
            //   onValueChange={volumeChangeHandler}
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
    setCoinSpeed: speed => dispatch({type: 'COIN_SPEED', value: speed}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinProperties);
