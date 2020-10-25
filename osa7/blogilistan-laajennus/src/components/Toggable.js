import React, { useState, useImperativeHandle } from 'react';
import { Container, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const Toggable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const containerStyles = {
    marginBottom: '1rem',
  };

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  return (
    <Container className="toggable-container" style={containerStyles}>
      <div style={hideWhenVisible}>
        <Button variant="contained" type="button" onClick={toggleVisibility}>{props.labelForCreateNew}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button variant="contained" type="button" onClick={toggleVisibility}>{props.labelForCancel}</Button>
      </div>
    </Container>
  );
});

Toggable.propTypes = {
  labelForCreateNew: PropTypes.string.isRequired,
  labelForCancel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Toggable;
