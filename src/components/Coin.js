import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const StyledCoin = styled.View`
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  border-radius: ${props => props.dimension / 2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({background}) => background};
  border-color: ${({highlight}) => highlight};
  border-width: 3;
  font-family: 'Poppins';
`;

const Coin = ({children, colors: {surfaceColor, primary}, ...props}) => (
  <StyledCoin {...props} background={surfaceColor} highlight={primary}>
    {children}
  </StyledCoin>
);

Coin.propTypes = {
  dimension: PropTypes.number,
  children: PropTypes.node,
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({
  colors: theme,
});

export default connect(mapStateToProps)(Coin);
