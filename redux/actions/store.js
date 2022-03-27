import http from "../../helper/http";

export const createStore = (name, description) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token')
      const param = new FormData()
      param.append('name', name)
      param.append('description', description)
      const { data } = await http(token, true).post('http://localhost:3000/stores', param)
      dispatch({
        type: 'CREATE_STORE',
        payload: data.results
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'STORE_ERROR',
        payload: err.response.data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}

export const getStore = async (dispatch) => {
  dispatch({
    type: 'TOGGLE_LOADING'
  })
  const token = window.localStorage.getItem('token')
  const { data } = await http(token).get('http://localhost:3000/users/profile')
  dispatch({
    type: 'GET_PROFILE',
    payload: data.results
  })
  dispatch({
    type: 'TOGGLE_LOADING'
  })
}

export const editStore = (store, description) => {
  console.log(store, description)
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token')
      const param = new URLSearchParams()
      param.append('name', store)
      param.append('description', description)
      const { data } = await http(token, true).patch('http://localhost:3000/stores', param)
      dispatch({
        type: 'EDIT_STORE',
        payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'STORE_ERROR',
        payload: err.response.data.message
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}

