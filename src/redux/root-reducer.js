import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import mainContainerReducer from './main-container/main-container.reducer'

const persistConfig = {
  key: 'root',
  storage,
  // user is already being handled by firebase auth so we just need to persist the cart
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  homepage: mainContainerReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
