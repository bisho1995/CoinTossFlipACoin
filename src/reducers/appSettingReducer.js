const initialState = {
  animationSpeed: {
    dev: 2000,
    prod: 200,
  },
};

const appSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
