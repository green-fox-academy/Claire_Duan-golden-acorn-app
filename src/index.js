// import React from 'react';
// import ReactDOM from 'react-dom';
// import SimpleGoldenAcornApp from './simpleGoldenAcornApp';

// ReactDOM.render(
//   <SimpleGoldenAcornApp />,
//   document.getElementById('root'),
// );
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import App from './components/App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

 
// onKeyDown={(e) => {
//     if (e.keyCode === 38) {
//       document.querySelector('BuyAcorn').click();
//     } else if (e.keyCode === 40) {
//       document.querySelector('BuyAcorn').click();
//     }
//   }}