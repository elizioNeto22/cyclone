// functions that return objects, cada objeto deve estar no formato correto que o a action espera
// user param. será tanto o user auth ou o user snapshot do firebase utils (no app.js)

// ao invés de usar o this.setState vamos disparar uma action que terá o valor que tinha no 
// setState e chamaremos esse valor de user
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER', // o type que o reducer espera
  payload: user
})


