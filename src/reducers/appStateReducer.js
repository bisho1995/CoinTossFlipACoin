const initialState = {
  head: 0,
  tail: 0,
  prevResult: null,
  currResult: null,
};

const appSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEAD':
      return {
        ...state,
        prevResult: state.currResult,
        currResult: 'HEAD',
        head: state.head + 1,
      };
    case 'TAIL':
      return {
        ...state,
        prevResult: state.currResult,
        currResult: 'TAIL',
        tail: state.tail + 1,
      };
    case 'RESET_APP_STATE':
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
