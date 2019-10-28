import React from 'react';
import {Row} from 'native-base';
import {connect} from 'react-redux';
import Circle from './Circle';
import {YellowTheme, DarkTheme, PurpleTheme} from '../styles/theme';

const ThemePicker = ({
  style,
  setYellowTheme,
  setDarkTheme,
  setVioletTheme,
  ...props
}) => (
  <Row style={{justifyContent: 'center', marginTop: 80, ...style}} {...props}>
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color={YellowTheme.primary}
      onPress={setYellowTheme}
    />
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color={DarkTheme.primary}
      onPress={setDarkTheme}
    />
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
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
