import {YellowTheme, DarkTheme, PurpleTheme} from '../styles/theme';

const initialState = {
  theme: YellowTheme,
};
// Reducers (Modifies The State And Returns A New State)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Logged In
    case 'YELLOW':
      return {
        theme: YellowTheme,
      };
    case 'DARK':
      return {
        theme: DarkTheme,
      };
    case 'VIOLET':
      return {
        theme: PurpleTheme,
      };
    case 'REHYDRATE':
      console.log('Rehydrating the redux state with ', action.value);
      return {
        ...action.value,
      };
    default: {
      return state;
    }
  }
};

export default rootReducer;
