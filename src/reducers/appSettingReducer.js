const initialState = {
  animationSpeed: {
    dev: 2000,
    prod: 100,
  },
  vibrationDuration: 200,
  vibrationEnabled: true,
  volumeEnabled: true,
  volumeLevel: 1, // 0.0 to 1.0
};
const appSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISABLE_VOLUME':
      return {
        ...state,
        volumeEnabled: false,
      };
    case '':
      return {
        ...state,
        vibrationEnabled: false,
      };
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
