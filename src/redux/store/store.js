import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistedReducer } from '../root-reducer'

const middlewares = [logger]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor }
