import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

function App(props) {
  const { children } = props;
  return (
    <div>
      <NavigationBar />
      { children }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
