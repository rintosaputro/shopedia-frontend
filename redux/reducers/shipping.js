const dataShipping = {
  isLoading : false,
  listShipping : []
}

const shipping = (state = dataShipping, action) => {
  switch (action.type) {
    case 'GET_SHIPPING_METHOD': {
      let {listShipping} = state
      listShipping = action.payload
      return { ...state,listShipping}
    }
    case "GET_SHIPPING_METHOD_ERROR" :{
      return { ...state, isError: true, errMessage: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}

export default shipping;
