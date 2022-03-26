import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import wishlists from './wishlist'
import pages from './pages'
import cart from './cart'
import shipping from './shipping'

const rootReducer = combineReducers({
  auth,
  user,
  pages,
  wishlists,
  cart,
  shipping
})

export default rootReducer
