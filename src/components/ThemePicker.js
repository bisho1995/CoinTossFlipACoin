import React from 'react';
import {Row, View} from 'native-base';
import Circle from './Circle';

const ThemePicker = ({style, ...props}) => (
  <Row style={{justifyContent: 'center', marginTop: 80, ...style}} {...props}>
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color="#FBC02D"
      onPress={() => console.log('set theme yellow')}
    />
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color="#000"
      onPress={() => console.log('set theme dark')}
    />
  </Row>
);

export default ThemePicker;
