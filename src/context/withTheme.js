import React from 'react';
import {Provider} from './themeContext';

const WithTheme = (Component, colors) => props => (
  <Provider value={{colors}}>
    <Component {...props} />
  </Provider>
);

export default WithTheme;
