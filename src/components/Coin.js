import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCoin = styled.View`
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  border-radius: ${props => props.dimension / 2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e0e0e0;
`;

const Coin = ({children, ...props}) => (
  <StyledCoin {...props}>{children}</StyledCoin>
);

Coin.propTypes = {
  dimension: PropTypes.number,
  children: PropTypes.node,
};

export default Coin;
