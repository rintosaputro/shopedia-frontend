const initialState = {
  isError: false,
  isLoading: false,
  createRating: false,
  message: null,
  errMessage: null,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RATING': {
      state.createRating = true;
      return { ...state };
    }
    case 'CREATE_ERROR': {
      return { ...state, isError: true, errMessage: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}

export default auth;
