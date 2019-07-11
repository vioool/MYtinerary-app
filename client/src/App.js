import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing/router.js';
import store from './store/store'
import { Provider } from 'react-redux'

class App extends Component {

  render() { //Virtual DOM
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routing />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
