import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

const Circle = styled.View`
  width: ${({dimension}) => dimension};
  height: ${({dimension}) => dimension};
  border-radius: ${({dimension}) => Math.floor(dimension / 2)};
  background-color: ${({color}) => color};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
`;

export default ({dimension, color, marginLeft, marginRight, ...props}) => (
  <TouchableOpacity {...props}>
    <Circle
      dimension={dimension}
      color={color}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  </TouchableOpacity>
);
