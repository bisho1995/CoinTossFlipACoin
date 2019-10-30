const initialState = {
  animationSpeed: {
    dev: 2000,
    prod: 200,
  },
  vibration: {
    duration: 200,
    enabled: true,
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
