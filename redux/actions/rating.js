import http from "../../helper/http";

export const postRating = (id, ratings) => {
  return async (dispatch) => {
    try {
      const param = new URLSearchParams();
      param.append('productId', id)
      param.append('rate', ratings)
      const { data } = await http().post('/rates', param)
      dispatch({
        type: 'CREATE_RATING',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'CREATE_ERROR',
        payload: err.response.data.message
      })
    }
  }
}
