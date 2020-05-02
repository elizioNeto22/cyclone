import React from 'react'
import SignIn from '../../components/sign_in/sign_in_component'
import SignUp from '../../components/sign_up/sign_up_component'

import './sign_in-sign_up_styles.scss'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
