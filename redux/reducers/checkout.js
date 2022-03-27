const dataCheckout = {
  isLoading : false,
  data : null,
  isError : false
}

const checkout = (state = dataCheckout, action) => {
  switch (action.type) {
    case 'CHECKOUT_FULFILLED': {
      let {data,isError} = state
      data = action.payload
      isError = false
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
