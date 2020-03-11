import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import App from './App'

import './index.css'

// quando passar o store object no Provider poderemos dar o contexto do redux store para o resto da aplicação
// então podemos despachar ações para o store e/ou puxar valores do store para os nossos components
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
)

