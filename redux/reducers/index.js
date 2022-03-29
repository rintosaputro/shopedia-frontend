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
import review from './review'
import store from './store'
import rating from './rating'

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
  order,
  review,
  store,
  rating
})

export default rootReducer
