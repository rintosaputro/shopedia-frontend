import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'
import wishlists from './wishlist'
import pages from './pages'
import cart from './cart'

const rootReducer = combineReducers({
  auth,
  user,
  product,
  pages,
  wishlists,
  cart
})

export default rootReducer
