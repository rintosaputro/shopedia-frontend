/* eslint-disable no-fallthrough */
const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  product: [],
  productDetail: {},
  myProduct: [],
  updateProduct: null,
  addImage: null,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT': {
      const newState = {
        product: action.payload,
      };
      return { ...state, ...newState };
    }
    case 'GET_PRODUCT_DETAIL': {
      const newState = { productDetail: action.payload };
      return { ...state, ...newState };
    }
    case 'GET_MY_PRODUCT': {
      const newState = {
        myProduct: action.payload,
      };
      return { ...state, ...newState };
    }
    case 'UPDATE_PRODUCT': {
      state.updateProduct = action.payload;
      return { ...state };
    }
    case 'ADD_IMAGE_PRODUCT': {
      state.addImage = action.payload;
    }
    case 'PRODUCT_ERROR': {
      return { ...state, isError: true, errMessage: action.payload.message };
    }
    default: {
      return { ...state };
    }
  }
};

export default product;
