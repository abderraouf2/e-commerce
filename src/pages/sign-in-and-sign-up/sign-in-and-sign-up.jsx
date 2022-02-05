import React from 'react';
import SignIn from '../../components/SignIn/signIn';
import Signup from '../../components/Signup/signup';
import './signin-signup.scss';

 const signInAndSignUp=()=> {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Signup />
    </div>
  )
}

export default signInAndSignUp;