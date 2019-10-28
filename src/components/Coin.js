import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CoinStyle from '../styles/coin';

const StyledCoin = styled.View`
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  border-radius: ${props => props.dimension / 2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${CoinStyle.background};
  border-color: ${CoinStyle.color};
  border-width: 10;
  font-family: 'Poppins';
`;

const Coin = ({children, ...props}) => (
  <StyledCoin {...props}>{children}</StyledCoin>
);

Coin.propTypes = {
  dimension: PropTypes.number,
  children: PropTypes.node,
};

export default Coin;
