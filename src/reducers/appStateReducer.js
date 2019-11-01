const initialState = {
  head: 0,
  tail: 0,
};

const appSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEAD':
      return {
        ...state,
        head: state.head + 1,
      };
    case 'TAIL':
      return {
        ...state,
        tail: state.tail + 1,
      };
    case 'RESET_APP_STATE':
      return {
        initialState,
      };
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
