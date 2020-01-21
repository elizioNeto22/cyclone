import React from 'react'

import './form_input_styles.scss'

const FormInput = ({label, handleChange, ...otherProps}) => (

  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {// aqui é para se o dev quiser passar um label, passa se ñ, td bem
      label ? 
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </label>)
      : null
    }
  </div>

)

export default FormInput

