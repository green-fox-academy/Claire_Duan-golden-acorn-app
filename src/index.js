import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ReduxApp from './components/ReduxApp';
import rootReducer from './reducers/reducers';
import SimpleGoldenAcornApp from './components/SimpleGoldenAcornApp';

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/simple/states" component={SimpleGoldenAcornApp} />
        <Route path="/simple/redux" component={ReduxApp} />
      </App>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
