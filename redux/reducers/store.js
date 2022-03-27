const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  successMsg: "",
  store: false,
  editStore: false
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_STORE': {
      state.store = action.payload.results;
      return { ...state };
    }
    case 'EDIT_STORE': {
      state.editStore = true;
      return { ...state, isError: false, };
    }
    case 'STORE_ERROR': {
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'CREATE_STORE_ERROR': {
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
