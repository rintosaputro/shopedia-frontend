import http from "../../helper/http";

export const getProduct = async (dispatch) => {
  try {
    dispatch({
      type: 'TOGGLE_LOADING'
    })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).get('http://localhost:3000/products?sort=DESC&orderBy=id')
    dispatch({
      type: 'GET_PRODUCT',
      payload: data.results
    })
    dispatch({
      type: 'TOGGLE_LOADING'
    })
  } catch (err) {
    dispatch({
      type: 'PRODUCT_ERROR',
      payload: err.response.data
    })
    dispatch({
      type: 'TOGGLE_LOADING'
    })
  }
}