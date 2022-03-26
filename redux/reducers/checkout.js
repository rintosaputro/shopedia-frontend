const dataCheckout = {
  isLoading : false,
  data : null
}

const checkout = (state = dataCheckout, action) => {
  switch (action.type) {
    case 'CHECKOUT_FULFILLED': {
      let {data} = state
      data = action.payload
      return { ...state,data}
    }

    case "CHECKOUT_ERROR" :{
      return { ...state, isError: true, errMessage: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}

export default checkout;
