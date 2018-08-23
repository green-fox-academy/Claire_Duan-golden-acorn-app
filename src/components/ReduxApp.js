import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';
// import ArrowHandler from '../containers/PressKey';

function ReduxApp() {
  return (
    <main>
      <h1>Golden Acorn Application with Redux</h1>
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    </main>
  );
}

export default ReduxApp;
