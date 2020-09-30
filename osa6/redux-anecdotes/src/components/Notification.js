import React from 'react'
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notificationReducer)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: '1rem'
  }
  return (
    <div style={notification ? style : null}>
      {notification}
    </div>
  )
}

export default Notification