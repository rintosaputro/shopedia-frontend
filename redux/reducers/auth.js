const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  dataUser: {},
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_PENDING' : {
      state.isError = false;
      state.isLoading = true;
      state.token = null;
      state.errMessage = null;
      return { ...state }
    }
    case 'AUTH_LOGIN_FULFILLED' : {
      const { data } = action.payload
      state.isError = false;
      state.isLoading = false;
      state.errMessage = null;
      state.token = data.results.token
      window.localStorage.setItem('token', data.results.token);
      return { ...state }
    }
    case 'AUTH_LOGIN_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.token = null;
      state.isError = true;
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default auth;
