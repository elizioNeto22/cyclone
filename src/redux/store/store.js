import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from '../root-reducer'


const middlewares = [logger]

// fazendo com spread no applyMid, caso queira adicioar mais midd é só add no array middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store 