import React from 'react';

import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase';
import CartIcon from '../Cart-icon/cart-icon';
import Cart from '../Cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../Redux/user/user.selector';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';

import { LogoContainer,HeaderContainer,OptionsContainer,OptionLink } from './header.styles'

const header=( {currentUser,hidden} )=> {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/shop'>Contact</OptionLink>
        {
          currentUser ?
          <OptionLink as='div' onClick={()=>{auth.signOut(); console.log("logged out")}}>SIGN OUT
          </OptionLink>
          :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
        { 
        hidden ? null : <Cart />
        }
    </HeaderContainer>
  )
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})


export default connect(mapStateToProps)(header);