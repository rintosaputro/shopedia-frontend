/* eslint-disable import/prefer-default-export */
import http from '../../helper/http';

export const getListShipping = async (dispatch) => {
  try {
    dispatch({
      type: 'TOGGLE_LOADING',
    });

    const token = window.localStorage.getItem('token');
    const { data } = await http(token).get('/shipping-methods');
    dispatch({
      type: 'GET_SHIPPING_METHOD',
      payload: data.results,
    });
    dispatch({
      type: 'TOGGLE_LOADING',
    });
  } catch (err) {
    dispatch({
      type: 'SHIPPING_METHOD_ERROR',
      payload: err.response.data,
    });
    dispatch({
      type: 'TOGGLE_LOADING',
    });
  }
};
