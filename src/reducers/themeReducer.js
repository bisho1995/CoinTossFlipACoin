import {YellowTheme, DarkTheme, PurpleTheme} from '../styles/theme';

const initialState = {
  theme: YellowTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'YELLOW':
      return {
        ...state,
        theme: YellowTheme,
      };
    case 'DARK':
      return {
        ...state,
        theme: DarkTheme,
      };
    case 'VIOLET':
      return {
        ...state,
        theme: PurpleTheme,
      };
    default: {
      return state;
    }
  }
};

export default themeReducer;
