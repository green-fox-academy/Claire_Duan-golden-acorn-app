import React from 'react';
import PropTypes from 'prop-types';

// Push Test
function Button(props) {
  const { name, callback } = props;
  return (
    <button type="button" onClick={callback}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
//   keyHandler: PropTypes.func.isRequired,
};

export default Button;
