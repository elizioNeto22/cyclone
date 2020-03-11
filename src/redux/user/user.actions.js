import {UserActionTypes} from './user.types'

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
  // colocar a lógia do app.js aqui no payload e passar dispatch com object apenas
})