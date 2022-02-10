import React from 'react';
import './costumbutton.scss'

 const costumbutton=({children, isGoogleSignIn,inverted, ...otherProps})=> {
  return (
    <button 
    className={`${ inverted ? 'inverted' : ''} ${ isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
              {...otherProps}>
      {children}
    </button>
  )
}
export default costumbutton