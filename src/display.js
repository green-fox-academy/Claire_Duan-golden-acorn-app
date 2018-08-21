import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { children } = props;
  return (
    <p>
      {children}
    </p>
  );
}

Display.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Display;
