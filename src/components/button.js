import React, { PropTypes } from 'react'

const Button = ({ children, handleClick }) => (
  <button
    className='main-button'
    onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired

}

export default Button
