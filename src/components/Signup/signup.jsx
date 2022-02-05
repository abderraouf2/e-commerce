import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import Costumbutton from '../costumbutton/costumbutton';
import { auth, createUserProfilDocument } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './signup.scss';

class signup extends Component {
  constructor(){
    super();
    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  }
  handleSubmit= async event =>{
    event.preventDefault();
    const { displayName ,email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      await createUserProfilDocument(user, {displayName} );
      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
      })

    } catch (error) {
      console.log("error"+ error );
    }
  }
  handleChange =event=>{
    const {name, value}= event.target;
    this.setState({[name]:value})
  }



  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className="title">I don't have an account</h2>
        <span>signUp with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='displayName'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirm Password'
            required
          />
          <Costumbutton type="submit">Sign-up</Costumbutton>
        </form>
      </div>
    );
  }
}

export default signup;
