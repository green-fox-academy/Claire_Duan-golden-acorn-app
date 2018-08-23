import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';
import ArrowHAndleDiv from '../containers/ArrowHandleDiv';

function ReduxApp() {
  return (
    <ArrowHAndleDiv>
      <h1>Golden Acorn Application with Redux</h1>
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    </ArrowHAndleDiv>
  );
}

export default ReduxApp;
