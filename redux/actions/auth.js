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
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.message
      })
    }
  }
}
