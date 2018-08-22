import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { amount } = props;
  return (
    <p>
      { amount }
    </p>);
}

Display.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Display;
