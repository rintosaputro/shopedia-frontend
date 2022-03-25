import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'

const rootReducer = combineReducers({
  auth,
  user,
  product
})

export default rootReducer
