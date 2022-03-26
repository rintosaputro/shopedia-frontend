const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  store: false
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_STORE': {
      state.store = true;
      return { ...state };
    }
    case 'sTORE_ERROR': {
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'STORE_CLEAR_STATE': {
      return {
        isError: false,
        isLoading: false,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default store;
