import React, {memo} from 'react';
import Coin from './Coin';
import {View} from 'native-base';
import Text from './Text';
import CoinStyle from '../styles/coin';

const Heads = props => (
  <Coin {...props}>
    <View>
      <Text
        textAlign="center"
        fontSize={Math.floor(props.dimension) / 2}
        color={CoinStyle.color}>
        H
      </Text>
    </View>
  </Coin>
);

export default memo(Heads);
