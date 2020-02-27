// function that gets a state object and an action
// depending on what the type of action is the switch statement will check the type 
// if its equal i want to return this new object out of this reduer function
// if the type(s) don't match the case we return the current state

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        currentUser: action.payload
      }
    default:
      return currentState
  }
}

export default userReducer