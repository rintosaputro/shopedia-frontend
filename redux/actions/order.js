import http from "../../helper/http";

export const getListOrder = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token');
      const { data } = await http(token).get(`/transactions/ordered-product?limit=2&page=${page}`)
      dispatch({
        type: 'GET_LIST_ORDER',
        payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch (err) {
      dispatch({
        type: 'ORDER_ERROR',
        payload: err.response.data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}
