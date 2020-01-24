import React from 'react'

import './form_input_styles.scss'

const FormInput = ({label, handleChange, ...otherProps}) => (

  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {// aqui é para se o dev quiser passar um label, passa se ñ, td bem
      label ? 
      // sempre vai ter a class form-input-label, mas se o user digitar algo add a class shrink
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </label>)
      : null
    }
  </div>

)

export default FormInput

