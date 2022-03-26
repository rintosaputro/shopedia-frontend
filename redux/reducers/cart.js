const dataCart = {
  isLoading : false,
  isAddCart : false,
  listCart : [],
  dataTransaction : null
}

const cart = (state = dataCart, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const newCart = {
        isAddCart : true
      }
      return { ...state,...newCart}
    }
    
    case 'ADD_TRANSACTION': {
      let { isAddCart,dataTransaction} = state
      isAddCart = true
      dataTransaction = JSON.parse(window.localStorage.getItem("transaction"))
      return { ...state,isAddCart,dataTransaction}
    }

    default: {
      return { ...state }
    }
  }
}

export default cart;

