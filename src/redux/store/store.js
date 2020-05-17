import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

import persistedReducer from '../root-reducer'

const middlewares = [logger]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { persistor, store }
