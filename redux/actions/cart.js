import http from "../../helper/http"

export const addCart = async(dispatch)=>{
  console.log("masuk!!")
  dispatch({
    type:'TOGGLE_LOADING'
  })

  dispatch({
    type : 'ADD_CART',
  })

  dispatch({
      type:'TOGGLE_LOADING'
  })
}

export const checkStock = async(dispatch)=>{
  console.log("masuk check stock!!")
  dispatch({
    type:'TOGGLE_LOADING'
  })

  var listCart = JSON.parse(window.localStorage.getItem("cart"))
  const token = window.localStorage.getItem('token')
  const newError = {}
  listCart.forEach(async(item)=>{
    try{
      const { data } = await http(token).get(`/products/${item.data.id}`)  
    }catch(err){
      
    }
   

    return item
  })

  console.log(listCart)
  const parsed =JSON.stringify(listCart);
  window.localStorage.setItem("cart",parsed)
  const result  = JSON.parse(window.localStorage.getItem("cart"))
  dispatch({
    type : 'UPDATE_CART',
    payload : result
  })

  dispatch({
      type:'TOGGLE_LOADING'
  })
}

export const addTransaction = async(dispatch)=>{
  dispatch({
    type:'TOGGLE_LOADING'
  })

  dispatch({
    type : 'ADD_TRANSACTION'
  })

  dispatch({
      type:'TOGGLE_LOADING'
  })
}

export const checkoutProcess = (dataSend,transaction,cart) => {
  console.log(cart)
    return async(dispatch)=>{
      try {
        console.log("masuk try")
        dispatch({
          type: 'TOGGLE_LOADING'
        })
        
        const { data} = await http(token).get('/products',param)
        const transactionOrder = await Promise.all(
          cart.map(async(item) => {
            const param = new URLSearchParams();
            param.append('transactionId',data.results.id)
            param.append('productId', item.data.product.id)
            param.append('qty',item.qty)
            const token = window.localStorage.getItem('token')
            const orderProduct = await http(token).post('/transactions/ordered-product',param)
            return orderProduct.data.results
          }))
        
       
        console.log("dispatch fullfilled")
        const result = {transaction:data.results,tranaction_detail : transactionOrder}
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

