import http from "../../helper/http"


export const checkoutProcess = (dataSend,transaction,cart) => {
  console.log(cart)
    return async(dispatch)=>{
      try {
        console.log("masuk try")
        dispatch({
          type: 'TOGGLE_LOADING'
        })
        const token = window.localStorage.getItem('token')
        const param = new URLSearchParams();
        param.append('name',dataSend.name)
        param.append('address', dataSend.address)
        param.append('paymentMethodId',dataSend.paymentMethod)
        param.append('phone',dataSend.phoneNumber)
        param.append('shippingMethodId',transaction.shipping.id)
        param.append('total',transaction.total)
        
        const { data} = await http(token).post('/transactions',param)
        const orderProduct = await Promise.all(
          cart.map(async(item) => {
            const param = new URLSearchParams();
            param.append('transactionId',data.results.id)
            param.append('productId', item.data.product.id)
            param.append('qty',item.qty)
            const orderProduct = await http(token).post('/transactions/ordered-product',param)
            return orderProduct.data.results
          }))
        
       
        console.log("dispatch fullfilled")
        const result = {transaction:data.results,orderProduct}
        dispatch({
          type: 'CHECKOUT_FULFILLED',
          payload: result
        })

        dispatch({
          type: 'TOGGLE_LOADING'
        })

      } catch (err) {
        dispatch({
          type: 'CHECKOUT_ERROR',
          payload: err.response.data
        })
        dispatch({
          type: 'TOGGLE_LOADING'
        })
      }
    }
}
