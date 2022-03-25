
export const addCart = async(dispatch)=>{
  dispatch({
    type:'TOGGLE_LOADING'
  })

  dispatch({
    type : 'ADD_CART'
  })

  dispatch({
      type:'TOGGLE_LOADING'
  })
}
