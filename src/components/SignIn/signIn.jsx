import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import './signIn.scss';
import Costumbutton from '../costumbutton/costumbutton';
import { auth,signInWithGoogle } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";



class signIn extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }
  

  handleSubmmit=async (event)=>{
    event.preventDefault();
    const {email, password}=this.state;
    try {
      await signInWithEmailAndPassword(auth,email,password)
      this.setState({email:'',password:'' })
    } catch (error) {
      console.log(error);
    }
  }
  handleChange=(event)=>{
    const {value,name}= event.target;


    this.setState({[name]:value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmmit}>
          <FormInput 
          type="email" 
          name="email" 
          value={this.state.email} 
          required
          label='email'
          handleChange={this.handleChange} />
          
          <FormInput 
          type="password"
          name="password" 
          value={this.state.password} 
          required
          label='password'
          handleChange={this.handleChange} />
          
          <div className='buttons'>  
          <Costumbutton type="submit" > Sign In </Costumbutton>
          <Costumbutton onClick={ signInWithGoogle } isGoogleSignIn >
              Sign In with Google
          </Costumbutton>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;