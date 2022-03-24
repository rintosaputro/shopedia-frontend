const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  dataUser: {},
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      const newState = {
        dataUser: action.payload
      }
      return { ...state, ...newState }

    }
    default: {
      return { ...state }
    }
  }
}

export default auth;
