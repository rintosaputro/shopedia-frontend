import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'
import wishlists from './wishlist'
import pages from './pages'
import cart from './cart'
import shipping from './shipping'
import order from './order'
import review from './review'
import store from './store'

const rootReducer = combineReducers({
  auth,
  user,
  product,
  pages,
  wishlists,
  cart,
  shipping,
  order,
  review,
  store
})

export default rootReducer
