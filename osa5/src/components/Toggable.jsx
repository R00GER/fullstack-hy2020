import React, { useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const Toggable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  return (
    <div className="toggable-container">
      <div style={hideWhenVisible}>
        <button type="button" onClick={toggleVisibility}>{props.labelForCreateNew}</button>
      </div>
      <div className="test" style={showWhenVisible}>
        {props.children}
        <button type="button" onClick={toggleVisibility}>{props.labelForCancel}</button>
      </div>
    </div>
  );
});

Toggable.propTypes = {
  labelForCreateNew: PropTypes.string.isRequired,
  labelForCancel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Toggable;
