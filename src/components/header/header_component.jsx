import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'

import './header_styles.scss'

const Header = ({currentUser}) => (
  <div className="header-container">
    <Link className="logo-container" to='/'>
      <Logo className="logo" /> 
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>SHOP</Link> 
      <Link className="option" to='/shop'>CONTACT</Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </div>
)

// Header estava pegando o valor de currentUser do App.js <Header currentUser={this.state.currentUser}/>
// assim ele irá puxar do reducer


/* 
High Order Components são funções que recebem componentes como argument e retorna um novo super component
connect é um high order component que nos permite modificar nosso component
 para ter acesso a coisas ao redux */


const mapStateToProps = (state) => ({
  // esse state é o rootReducer
  /* tá assim:   
    • (state)rootReducer // objeto com reducers
    • (user)userReducer // objeto {currentUser: null} ou {...state, currentUser: action.payload}
  */
  currentUser: state.user.currentUser
})

const mapDispatchToProps = {

}

/* 
const mapState = ... return state.user.login, não precisa
const mapDispatch = {login}
• SignIn comp({login})
<button onClick={login}>LOG IN</button>
connect(null, mapDispatch)(SignIN)
*/


// o 1º arg do connect será mapStateToProps function que nos dar acesso ao store que nos retorna o rootReducer.   É chamado sempre que o store muda 

// O 2 arg do connect 
export default connect(mapStateToProps)(Header)