const dataCheckout = {
  isLoading : false,
  data : null,
  isError : false,
  errMessage: false,
}

const checkout = (state = dataCheckout, action) => {
  switch (action.type) {
    case 'CHECKOUT_FULFILLED': {
      let {data,isError, errMessage} = state
      data = action.payload
      isError = false
      errMessage = null
      return { ...state,data,isError}
    }

    case "CHECKOUT_ERROR" :{
      return { ...state, isError: true, errMessage: action.payload.message }
    }

    default: {
      return { ...state }
    }
  }
}

export default checkout;
