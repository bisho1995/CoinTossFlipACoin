import yellowTheme from '../styles/theme/yellow';

// Initial State
const initialState = {
  theme: yellowTheme,
};
// Reducers (Modifies The State And Returns A New State)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Logged In
    case 'YELLOW':
      return {
        theme: yellowTheme,
      };
    case 'DARK':
      return {
        ...state,
        theme: 'DARK',
      };
    case 'VIOLET':
      return {
        ...state,
        theme: 'VIOLET',
      };
    default: {
      return state;
    }
  }
};

export default rootReducer;
