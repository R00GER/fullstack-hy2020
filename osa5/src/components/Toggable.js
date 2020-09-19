import React, { useState } from 'react';

const Toggable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="toggable-container">
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>new blog</button>
      </div>
      <div className="test" style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
};

export default Toggable;
