import React from 'react';
import {Row} from 'native-base';
import {connect} from 'react-redux';
import Circle from './Circle';
import {YellowTheme, DarkTheme, PurpleTheme} from '../styles/theme';

const margin = 20;
const dimension = 30;

const ThemePicker = ({
  style,
  setYellowTheme,
  setDarkTheme,
  setVioletTheme,
  ...props
}) => (
  <Row style={{justifyContent: 'center', marginTop: 80, ...style}} {...props}>
    <Circle
      dimension={dimension}
      marginLeft={margin}
      marginRight={margin}
      color={YellowTheme.primary}
      onPress={setYellowTheme}
    />
    <Circle
      dimension={dimension}
      marginLeft={margin}
      marginRight={margin}
      color={DarkTheme.primary}
      onPress={setDarkTheme}
    />
    <Circle
      dimension={dimension}
      marginLeft={margin}
      marginRight={margin}
      color={PurpleTheme.primary}
      onPress={setVioletTheme}
    />
  </Row>
);

const mapDispatchToProps = dispatch => {
  return {
    setYellowTheme: () => dispatch({type: 'YELLOW'}),
    setDarkTheme: () => dispatch({type: 'DARK'}),
    setVioletTheme: () => dispatch({type: 'VIOLET'}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ThemePicker);
