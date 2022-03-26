const initialState = {
  isError: false,
  isLoading: false,
  results: [],
  addReview: false,
}

const review = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_REVIEW': {
      state.results = action.payload.results
      return { ...state }
    }
    case 'ADD_REVIEW': {
      state.addReview = true;
      return { ...state }
    }
    case 'REVIEW_ERROR': {
      state.isError = true
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default review
