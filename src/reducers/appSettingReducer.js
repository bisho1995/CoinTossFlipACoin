const initialState = {
  vibrationDuration: 200,
  vibrationEnabled: true,
  volumeEnabled: true,
  coinSpeed: 100,
};
const appSettingReducer = (state = initialState, {type, value} = {}) => {
  switch (type) {
    case 'VOLUME_TOGGLE':
      return {
        ...state,
        volumeEnabled: value,
      };
    case 'VIBRATION_TOGGLE':
      return {
        ...state,
        vibrationEnabled: value,
      };
    case 'SET_COIN_SPEED':
      return {
        ...state,
        coinSpeed: value,
      };
    case 'RESET_APP_SETTINGS':
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};

export default appSettingReducer;
