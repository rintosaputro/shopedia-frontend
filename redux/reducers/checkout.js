const dataCheckout = {
  isLoading: false,
  data: null,
  isError: false,
  errMessage: '',
  isCheckout: false,
};

const checkout = (state = dataCheckout, action) => {
  switch (action.type) {
    case 'CHECKOUT_FULFILLED': {
      let {
        data, isError, isLoading, isCheckout,
      } = state;
      data = action.payload;
      isError = false;
      isLoading = false;
      isCheckout = true;
      return {
        ...state, data, isError, isLoading, isCheckout,
      };
    }
    case 'CHECKOUT_CLEAR_STATE': {
      return dataCheckout;
    }
    case 'CHECKOUT_ERROR': {
      let {
        isError, isLoading, errMessage,
      } = state;
      isError = true;
      isLoading = false;
      errMessage = action.payload;
      return {
        ...state, isError, isLoading, errMessage,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default checkout;
