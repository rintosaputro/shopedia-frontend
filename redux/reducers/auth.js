const initialState = {
  isError: false,
  isLoading: false,
  signup: false,
  message: null,
  token: null,
  forgot: false,
  verify: false,
  errMessage: null,
  dataUser: {},
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      state.token = action.payload
      window.localStorage.setItem('token', action.payload)
      return { ...state }
    }
    case 'AUTH_SIGNUP': {
      state.signup = true;
      return { ...state };
    }
    case 'AUTH_FORGOT': {
      state.forgot = true;
      return { ...state };
    }
    case 'AUTH_VERIFY': {
      state.verify = true;
      return { ...state };
    }
    case 'AUTH_ERROR': {
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'AUTH_CLEAR_STATE': {
      return initialState
    }
    default: {
      return { ...state }
    }
  }
}

export default auth;
