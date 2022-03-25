import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import wishlists from './wishlist'
import pages from './pages'
import cart from './cart'

const rootReducer = combineReducers({
  auth,
  user,
  pages,
  wishlists,
  cart
})

export default rootReducer
