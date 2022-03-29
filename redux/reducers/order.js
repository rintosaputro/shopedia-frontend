const initialState = {
  isLoading: false,
  isError: false,
  errMessage: null,
  pageInfo: {},
  listOrder: []
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_ORDER': {
      state.listOrder = []
     state.listOrder.push(...action.payload.results);
     state.pageInfo = action.payload.pageInfo
     return { ...state };
    }
    case 'GET_LIST_ORDER_FILTER': {
      state.listOrder = action.payload.results;
      state.pageInfo = action.payload.pageInfo
      return { ...state };
     }
    case 'LIST_ORDER_ERROR': {
      state.isError = true;
      state.errMessage = action.payload.message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

export default order
