import React from 'react';
import PropTypes from 'prop-types';

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
};

export default Button;
