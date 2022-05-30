/* eslint-disable import/prefer-default-export */
import http from '../../helper/http';

export const getWishLlists = async (dispatch) => {
  try {
    dispatch({
      type: 'TOGGLE_LOADING',
    });

    const token = window.localStorage.getItem('token');
    const { data } = await http(token).get('/users/favorite-product');
    dispatch({
      type: 'GET_WISHLISTS',
      payload: data.results,
    });
    dispatch({
      type: 'TOGGLE_LOADING',
    });
  } catch (err) {
    dispatch({
      type: 'GET_WISHLISTS_ERROR',
      payload: err.response.data,
    });
    dispatch({
      type: 'TOGGLE_LOADING',
    });
  }

  // setTimeout(async()=>{
  //     const token = window.localStorage.getItem("token")
  //     const {data} = await http(token).get('/users/favorite-product')
  //     dispatch({
  //       type:'GET_WISHLISTS',
  //       payload : data.results
  //     })
  //     dispatch({
  //       type:'TOGGLE_LOADING'
  //   })
  // },3000)
};
