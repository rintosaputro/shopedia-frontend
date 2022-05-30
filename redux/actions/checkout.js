/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-shadow */
import http from '../../helper/http';

export const checkoutProcess = (dataSend, transaction, cart) => {
  console.log(cart);
  return async (dispatch) => {
    try {
      console.log('masuk try');
      dispatch({
        type: 'TOGGLE_LOADING',
      });
      const token = window.localStorage.getItem('token');
      const param = new URLSearchParams();
      param.append('name', dataSend.name);
      param.append('address', dataSend.address);
      param.append('paymentMethodId', dataSend.paymentMethod);
      param.append('phone', dataSend.phoneNumber);
      param.append('shippingMethodId', transaction.shipping.id);
      param.append('total', transaction.total);

      const { data } = await http(token).post('/transactions', param);
      try {
        const transactionOrder = await Promise.all(
          cart.map(async (item) => {
            const param = new URLSearchParams();
            param.append('transactionId', data.results.id);
            param.append('productId', item.data.id);
            param.append('qty', item.qty);
            const token = window.localStorage.getItem('token');
            const orderProduct = await http(token).post('/transactions/ordered-product', param);
            return orderProduct.data.results;
          }),
        );

        console.log('dispatch fullfilled');
        // eslint-disable-next-line no-unused-vars
        const result = { transaction: data.results, tranaction_detail: transactionOrder };
        dispatch({
          type: 'CHECKOUT_FULFILLED',
          payload: { data, transactionOrder },
        });

        dispatch({
          type: 'TOGGLE_LOADING',
        });
      } catch (err) {
        var payload = '';
        if (err.response !== null) {
          payload = err.response.data.message;
        } else {
          payload = err.message;
        }
        dispatch({
          type: 'CHECKOUT_ERROR',
          payload,
        });
        dispatch({
          type: 'TOGGLE_LOADING',
        });
      }
    } catch (err) {
      var payload = '';
      if (err.response !== null) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }
      dispatch({
        type: 'CHECKOUT_ERROR',
        payload,
      });
      dispatch({
        type: 'TOGGLE_LOADING',
      });
    }
  };
};

export const checkoutClear = (dispatch) => {
  dispatch({
    type: 'CHECKOUT_CLEAR_STATE',
  });
};

// export const orderProductProcess = (transaction,cart) => {
//   console.log(cart)
//     return async(dispatch)=>{
//       try {
//         dispatch({
//           type: 'TOGGLE_LOADING'
//         })

//         const transactionOrder = Promise.all(
//           cart.map(async(item) => {
//             const param = new URLSearchParams();
//             param.append('transactionId',transaction.id)
//             param.append('productId', item.data.id)
//             param.append('qty',item.qty)
//             const token = window.localStorage.getItem('token')
//             const orderProduct = await http(token).post('/transactions/ordered-product',param)
//             return orderProduct.data.results
//           }))

//           try{
//               const lists = await transactionOrder;
//               const result = {tranaction_detail : lists}
//               dispatch({
//                 type: 'CHECKOUT_ORDER_PRODUCT_FULFILLED',
//                 payload: result
//               })

//               dispatch({
//                 type: 'TOGGLE_LOADING'
//               })
//           }catch(err){
//             var payload = ''
//             if(err.response !==null){

//               payload = err.response.data.message
//             }else{
//               payload = err.message
//             }
//             dispatch({
//               type: 'CHECKOUT_ERROR',
//               payload: payload
//             })
//             dispatch({
//               type: 'TOGGLE_LOADING'
//             })
//           }

//       } catch (err) {
//         var payload = ''
//         if(err.response !==null){

//           payload = err.response.data.message
//         }else{
//           payload = err.message
//         }
//         dispatch({
//           type: 'CHECKOUT_ERROR',
//           payload: payload
//         })
//         dispatch({
//           type: 'TOGGLE_LOADING'
//         })
//       }
//     }
// }
