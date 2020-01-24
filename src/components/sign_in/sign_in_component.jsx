// sign_in_component
import React from 'react'
import FormInput from '../form_input/form_input_component'
import CustomButton from '../custom_button/custom_button_component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign_in_styles.scss'

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({email: '', password: ''})
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with you email and password.</p>
        <form action="#" onSubmit={this.handleSubmit}>

          <FormInput 
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            required
            handleChange={this.handleChange}
          />   
          
          <FormInput 
            name='password'
            type='password'
            value={this.state.password}
            label='password'
            required
            handleChange={this.handleChange}
          />   
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
          </div>
        </form>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
      </div>
    )
  }
}

export default SignIn