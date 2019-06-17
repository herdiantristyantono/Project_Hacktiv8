import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home   from './Home';
import dataFilms from './component/Layout2/dataFilms';
import dataCharacters from './component/Layout2/dataCharacters';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   const { dispatch } = this.props;
  //   history.listen((location, action) => {
  //       // clear alert on location change
  //       dispatch(alertActions.clear());
  //   });
  // }

  render(){
    // const { alert } = this.props;
    return(
          // <div className="App">
          //         {alert.message &&
          //           <div className={`alert ${alert.type}`}>{alert.message}</div>
          //         }
          <Provider store={createStoreWithMiddleware(reducers)}>
                    <Router>
                      <div>
                          <Route exact path="/" component={Home} />
                          {/* <Route path="/login" component={LoginPage} />
                          <Route path="/register" component={RegisterPage} /> */}
                          <Route path="/allFilms" component={dataFilms} />
                          <Route path="/allCharacters" component={dataCharacters} />
                      </div>
                    </Router>
          </Provider>
          // </div>
    )
  }
} 

// function mapStateToProps(state) {
//   const { alert } = state;
//   return {
//       alert
//   };
// }

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App }; 

export default App;