import React from 'react'

const Button = (props) => {
  console.log(props);

  return (
  <button onClick={() => {props.onClick(props.country)}}>{props.text}</button>
  )
}

export default Button