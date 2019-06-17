import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home   from './Home';
import dataFilms from './component/Layout2/dataFilms';
import dataCharacters from './component/Layout2/dataCharacters';

class App extends Component {

  render(){
    return(
            <Router>
                <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/allFilms" component={dataFilms} />
                  <Route path="/allCharacters" component={dataCharacters} />
                </div>
            </Router>
    )
  }
} 

export default App;