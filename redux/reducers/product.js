const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  product: [],
  productDetail: {},
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT': {
      const newState = {
        product: action.payload
      }
      return { ...state, ...newState }
    }
    case 'GET_PRODUCT_DETAIL': {
      const newState = { productDetail: action.payload }
      return { ...state, ...newState }
    }
    case 'PRODUCT_ERROR': {
      return { ...state, isError: true, errMessage: action.payload.message }
    }
    default: {
      return { ...state }
    }
  }
}

export default product;
