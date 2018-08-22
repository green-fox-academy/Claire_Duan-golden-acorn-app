import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';
// import ArrowHandler from '../containers/PressKey';

const App = props => (
  <main>
    {/* <ArrowHandler> */}
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    {/* </ArrowHandler> */}
  </main>
);

export default App;
