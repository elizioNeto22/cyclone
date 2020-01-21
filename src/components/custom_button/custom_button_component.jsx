import React from 'react'

import './custom_button_styles.scss'

// Dessa forma fica muito mais fácil de usar o button em outros components
// children é o que é passado entre as tags <button> children </button>
// ...otherProps server para i.e tiver um type ele será passado como props
const CustomButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

export default CustomButton

