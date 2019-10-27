import React from 'react';
import {Row} from 'native-base';
import {connect} from 'react-redux';
import Circle from './Circle';

const ThemePicker = ({style, setYellowTheme, setDarkTheme, ...props}) => (
  <Row style={{justifyContent: 'center', marginTop: 80, ...style}} {...props}>
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color="#FBC02D"
      onPress={setYellowTheme}
    />
    <Circle
      dimension={20}
      marginLeft={10}
      marginRight={10}
      color="#000"
      onPress={setDarkTheme}
    />
  </Row>
);

const mapDispatchToProps = dispatch => {
  return {
    setYellowTheme: () => dispatch({type: 'YELLOW'}),
    setDarkTheme: () => dispatch({type: 'DARK'}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ThemePicker);
