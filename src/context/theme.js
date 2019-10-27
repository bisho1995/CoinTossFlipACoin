import React from 'react';
import {colors} from '../styles/';
import {Provider} from './themeContext';
const currTheme = 'yellow';

const Theme = (Component, theme = currTheme) => {
  let color = {};
  switch (theme) {
    case 'yellow':
      color = colors;
      break;
    default:
      break;
  }

  return (
    <Provider colors={color}>
      <Component />
    </Provider>
  );
};

export default Theme;
