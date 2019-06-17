import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Coba from './components/Coba';
import reducers from '../redux/reducers';
import Coba from './components/Coba';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Coba />
  </Provider>
  , document.querySelector('.container'));
