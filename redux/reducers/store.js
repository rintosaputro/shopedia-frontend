const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  successMsg: "",
  store: false,
  editStore: false,
  createStore: false
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_STORE': {
      state.createStore = true;
      state.store = action.payload.results;
      return { ...state, isError: false, errMessage: null };
    }
    case 'EDIT_STORE': {
      state.editStore = true;
      return { ...state, isError: false, };
    }
    case 'STORE_ERROR': {
      state.createStore = false;
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'CREATE_STORE_ERROR': {
      state.createStore = false;
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
