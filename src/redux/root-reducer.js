// base reduce that represents all of the state in our application 
// will be the actual code that combines all of our other state together

import {combineReducers} from 'redux'
import userReducer from './user/user-reducer'


export default combineReducers({
  user: userReducer
})