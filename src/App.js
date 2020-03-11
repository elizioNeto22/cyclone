import React from 'react'
import {Route, Switch, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './components/header/header_component'
import HomePage from './pages/homepage/homepage_component'
import ShopPage from './pages/shop/shop_component'
import SignInAndSignUpPage from './pages/sign_in-sign_up/sign_in-sign_up_component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'

import './App.css'


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          // não precisa retornar um obj porque o reducer já retorna um obj de state
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  NoMatch = () =>(
    <div>
      <h1>Página não Encontrada</h1>
      <Link to='/'>Home</Link>
    </div>)

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignInAndSignUpPage />)} />
          <Route component={this.NoMatch} />
        </Switch>
  
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  // dispatch é um jeito para redux saber que qlqr coisa que esteja passando será um action object que 
  // irá repassar para todos action reducers
  // setCurrentUser: () => dispatch({type: 'SET_CURRENT_USER'})
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)