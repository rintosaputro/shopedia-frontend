
export const getPaymentMethod = async (dispatch) => {
  try {
    dispatch({
      type: 'TOGGLE_LOADING'
    })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).get('/payment-methods')
    dispatch({
      type: 'GET_PAYMENT_METHOD',
      payload: data.results
    })
    dispatch({
      type: 'TOGGLE_LOADING'
    })
  } catch (err) {
    dispatch({
      type: 'PAYMENT_METHOD_ERROR',
      payload: err.response.data
    })
    dispatch({
      type: 'TOGGLE_LOADING'
    })
  }
}
