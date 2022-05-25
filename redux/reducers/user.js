const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  dataUser: {},
  editProfile: false,
  editStore: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      const token = window.localStorage.getItem('token')
      state.token = token;
      const newState = {
        dataUser: action.payload
      }
      return { ...state, ...newState }
    }
    case 'EDIT_PROFILE': {
      state.editProfile = true;
      return { ...state, isError: false, successMsg: action.payload.message };
    }
    case 'USER_ERROR': {
      state.editProfile = false;
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'STORE_ERROR': {

      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'USER_CLEAR_STATE': {
      return {
        isError: false,
        isLoading: false,
      }
    }
    case 'EDIT_PROFILE_CLEAR': {
      state.editProfile = false;
      return {...state}
    }
    default: {
      return { ...state }
    }
  }
}

export default user;
