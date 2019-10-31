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
    case 'ENABLE_VOLUME':
      return {
        ...state,
        volumeEnabled: true,
      };
    case 'DISABLE_VIBRATION':
      return {
        ...state,
        vibrationEnabled: false,
      };
    case 'ENABLE_VIBRATION':
      return {
        ...state,
        vibrationEnabled: true,
      };
    case 'VOLUME_LEVEL':
      return {
        ...state,
        volumeLevel: action.value,
      };
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
