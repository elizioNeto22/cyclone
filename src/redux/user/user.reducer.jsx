 // porque qdo começa redux não sabe se temos algum state
const INITIAL_STATE = {
  currentUser: null
}

// precisa levar o currentUser value do userReducer para onde é precido (Header ex.)
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer