const dataPaymentMethod = {
  isLoading: false,
  listPaymentMethod: [],
};

const payment = (state = dataPaymentMethod, action) => {
  switch (action.type) {
    case 'GET_PAYMENT_METHOD': {
      let { listPaymentMethod } = state;
      listPaymentMethod = action.payload;
      return { ...state, listPaymentMethod };
    }
    case 'GET_PAYMENT_METHOD_ERROR': {
      return { ...state, isError: true, errMessage: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default payment;
