const dataWishlist = {
  isLoading : false,
  listWishlist : [],
  isError : false
}

const wishlists = (state = dataWishlist,action)=>{
  switch(action.type){
    case "GET_WISHLISTS" : {
      const newWishlist  = {
        listWishlist : action.payload
      } 
      return{...state,...newWishlist}
    }
    case "GET_WISHLISTS_ERROR" :{
      return { ...state, isError: true, errMessage: action.payload, listWishlist: [] }
    }
    default:{
      return {...state}
    }
  }
}

export default wishlists
