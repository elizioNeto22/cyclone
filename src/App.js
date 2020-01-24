import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Header from './components/header/header_component'
import HomePage from './pages/homepage/homepage_component'
import ShopPage from './pages/shop/shop_component'
import SignInAndSignUpPage from './pages/sign_in-sign_up/sign_in-sign_up_component'
import {auth} from './firebase/firebase.utils'

import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    // para quando fechamos subscriptions (signOut) não continuar aberto, assim evitanto memory leaks
    this.unsubscribeFromAuth()
  }

  NoMatch = () =>(
    <div>
      <h1>Página não Encontrada</h1>
      <Link to='/'>Home</Link>
    </div>)

  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route component={this.NoMatch} />

        </Switch>
  
      </div>
    )
  }
}

export default App