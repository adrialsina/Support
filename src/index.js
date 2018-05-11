import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import Store from './store';


const createStoreWithMiddleware = applyMiddleware()(createStore);

  ReactDOM.render(
      <Provider store={Store}>
        {/* <Router history={browserHistory} routes={routes} /> */}
        <App />
      </Provider>, document.querySelector('#container')
  );
