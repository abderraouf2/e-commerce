import React from 'react';

import { connect } from 'react-redux';
import './header.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase';
import CartIcon from '../Cart-icon/cart-icon';
import Cart from '../Cart-dropdown/cart-dropdown';


const header=( {currentUser,hidden} )=> {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>Shop</Link>
        <Link className="option" to='/shop'>Contact</Link>
        {
          currentUser ?
          <div className="option" onClick={()=>{auth.signOut(); console.log("logged out")}}>SIGN OUT
          </div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
        { 
        hidden ? null : <Cart />
        }
    </div>
  )
}

const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
  currentUser,
  hidden,

})


export default connect(mapStateToProps)(header);