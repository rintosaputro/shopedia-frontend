import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'
import wishlists from './wishlist'
import pages from './pages'
import cart from './cart'
import shipping from './shipping'
import payment from './payment'
import checkout from './checkout'
import order from './order'

const rootReducer = combineReducers({
  auth,
  user,
  product,
  pages,
  wishlists,
  cart,
  shipping,
  payment,
  checkout,
  order
})

export default rootReducer
