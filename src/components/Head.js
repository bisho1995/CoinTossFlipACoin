import React, {memo} from 'react';
import Coin from './Coin';
import {View} from 'native-base';
import Text from './Text';
const Heads = props => (
  <Coin {...props}>
    <View>
      <Text textAlign="center">H</Text>
    </View>
  </Coin>
);

export default memo(Heads);
