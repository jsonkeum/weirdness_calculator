import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, title, buttonText, url }) => {
  const button = buttonText ? <button className="gif-button" onClick={onClick}>{buttonText}</button> : null;

  return (
    <div className="gif-wrapper">
      <p className="text-center">{title}</p>
      <div className="gif">
        <img src={url} alt={title}/>
        {button}
      </div>
    </div>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Todo