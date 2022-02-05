import React from 'react';
import './formInput.scss'

const  formInput=({handleChange, label,type, ...otherProps})=> {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} type={type} />
      {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
         </label>) 
        :
        null
      }
    </div>
  )
}

export default formInput;
