import http from "../../helper/http";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'AUTH_CLEAR_STATE'
      })

      const param = new URLSearchParams();
      param.append('email', email)
      param.append('password', password)

      const { data } = await http().post('/auth/login', param) 
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token
      })
    } catch(err) {
      const payload = err.response.data.message
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.message
      })
    }
  }
}

export const signup = (email, password, role) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      dispatch({
        type: 'AUTH_CLEAR_STATE'
      })
      const param = new URLSearchParams();
      param.append('email', email)
      param.append('password', password)
      param.append('roleId', role)

      const { data } = await http().post('/auth/register', param) 
      dispatch({
        type: 'AUTH_SIGNUP',
        payload: data.results
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch(err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.message
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      dispatch({
        type: 'AUTH_CLEAR_STATE'
      })
      
      const param = new URLSearchParams();
      param.append('email', email)
      param.append('isReset', 1)

      const { data } = await http().post('/auth/reset-verify?callbackUrl=http://localhost:3001/forgot-password', param)

      dispatch({
        type: 'AUTH_FORGOT',
        // payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.message
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}
