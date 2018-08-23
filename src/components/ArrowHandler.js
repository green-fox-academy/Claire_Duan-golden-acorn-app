import React from 'react';
import PropTypes from 'prop-types';

function ArrowHandler(props) {
  const { callback, children } = props;
  return (
    <div tabIndex="1" onKeyDown={callback} role="presentation"> {/*eslint-disable-line*/}
      { children }
    </div>
  );
}

ArrowHandler.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArrowHandler;
