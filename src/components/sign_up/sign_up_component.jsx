import React from 'react'

import FormInput from '../form_input/form_input_component'
import CustomButton from '../custom_button/custom_button_component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign_up_styles.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state

    if(password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      // qdo successful o user é atribuído a aplicação pelo authentication e retorna um objeto que tem a key user onde encontramos
      // nosso userAuth object 
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})
      // se der certo resetamos o state
      this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''})

    } catch (error) {
      console.error(error)
      
    }
  } 

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render(){
    const {displayName, email, password, confirmPassword} = this.state
    return(
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton> 

        </form>
      </div>
    )
  }
}

export default SignUp