const dataCart = {
  isLoading : false,
  isAddCart : false,
  listCart : []
}

const cart = (state = dataCart, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      let { isAddCart,listCart } = state
      isAddCart = true
      listCart = JSON.parse(window.localStorage.getItem("cart"))
      return { ...state,isAddCart,listCart}
    }
    default: {
      return { ...state }
    }
  }
}

export default cart;
