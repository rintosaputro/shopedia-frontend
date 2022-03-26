import http from "../../helper/http";

export const getListReview = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token')
      const { data } = await http(token).get(`/products/review/${id}`)
      dispatch({
        type: 'GET_LIST_REVIEW',
        payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}

export const addReview = (productId, comment, parentId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token')
      const param = new URLSearchParams();
      param.append('productId', productId)
      param.append('comment', comment)
      if (parentId) {
        param.append('parentId', parentId)
      }
      const { data } = await http(token).post('/products/review', param)
      dispatch({
        type: 'ADD_REVIEW',
        payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}
