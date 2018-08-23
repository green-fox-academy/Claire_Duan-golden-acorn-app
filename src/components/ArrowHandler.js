import React from 'react';
import PropTypes from 'prop-types';

function ArrowHandler(props) {
  const { callback, children } = props;
  return (
    <main onKeyDown={e => callback(e)} role="presentation">
      { children }
    </main>
  );
}

ArrowHandler.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArrowHandler;
