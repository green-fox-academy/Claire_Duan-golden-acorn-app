import React from 'react';
import PropTypes from 'prop-types';

function ArrowHandler(props) {
  const { callback, children } = props;
  return (
    <div onKeyDown={e => callback(e)} role="presentation">
      { children }
    </div>
  );
}

ArrowHandler.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArrowHandler;
