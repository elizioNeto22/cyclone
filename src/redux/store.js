import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
// mimddleware are pretty much just functions that receive ACTIONS IN and then do something 
// and then DO something with them and then pass them out to the root reducer

// set up our middlewares

const middlewares = [logger]

// function that gets both a rootReducer and the return of applayMiddlewares
// o applayMiddleware desa forma se quisermos adicionar mais middlewares é só add no middlewares
// poderia ser aplayMiddlewares(logger) e não ter o const midd
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store