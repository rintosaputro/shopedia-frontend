const initialState = {
  isLoading: false,
};

const pages = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING': {
      let { isLoading } = state;
      isLoading = !isLoading;
      state.token = null;
      state.errMessage = null;
      return { ...state, isLoading };
    }

    default: {
      return { ...state };
    }
  }
};

export default pages;
