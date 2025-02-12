import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './helpers';
import  App  from './App';

// import { configureFakeBackend } from './helpers';
// configureFakeBackend();

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('App')
// );
