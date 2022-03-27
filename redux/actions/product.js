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

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      // const token = window.localStorage.getItem('token')
      const { data } = await http().get(`/products/${id}`)
      dispatch({
        type: 'GET_PRODUCT_DETAIL',
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
}

export const getMyProduct = async (dispatch) => {
  try {
    dispatch({
      type: 'TOGGLE_LOADING'
    })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).get('/stores/my-store?page=1&limit=3')
    dispatch({
      type: 'GET_MY_PRODUCT',
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


export const updateProduct = (id, data) => {
  const {name, description, price, stock} = data
  return async (dispatch) => {
    try {
      dispatch({
        type: 'TOGGLE_LOADING'
      })
      const token = window.localStorage.getItem('token')
      const param = new URLSearchParams()
      if (name) {
        param.append('name', name)
      }
      if (description) {
        param.append('description', description)
      }
      if (price) {
        param.append('price', price)
      }
      if (stock) {
        param.append('stock', stock)
      }
      const { data } = await http(token).patch(`products/${id}`)
      dispatch({
        type: 'UPDATE_PRODUCT',
        payload: data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    } catch(err) {
      dispatch({
        type: 'PRODUCT_ERROR',
        payload: err.response.data
      })
      dispatch({
        type: 'TOGGLE_LOADING'
      })
    }
  }
}

export const addImages = (image, productId) => {
  try {

  } catch (err) {

  }
}
