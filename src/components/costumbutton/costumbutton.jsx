import React from 'react';
import './costumbutton.scss'

 const costumbutton=({children, isGoogleSignIn, ...otherProps})=> {
  return (
    <button 
    className={`${ isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
              {...otherProps}>
      {children}
    </button>
  )
}
export default costumbutton