import React from 'react';
import {Consumer} from '../context/themeContext';
const UseTheme = Component => props => (
  <Consumer>
    {consumer => {
      return <Component {...props} consumer={consumer} />;
    }}
  </Consumer>
);

export default UseTheme;
