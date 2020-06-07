const initialState = {
  deletingVideoId: undefined,
};

const updateDevice = (state = initialState, action) => {
  switch (action.type) {
    case 'deleteVideo': {
      return {
          ...state, 
          deletingVideoId: action.data};
    }
    default:
      return state;
  }
};

export default updateDevice;
