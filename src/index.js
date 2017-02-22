import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import routes from './routes';
import reducers from './reducers';

import App from './components/App/App';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
