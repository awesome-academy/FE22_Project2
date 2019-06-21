import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import React, { Component } from 'react';

import Layout from "./component/app/Layout";

const store = configureStore();

class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <Layout/>
              </div>
          </Provider>
      );
  }
}
export default App;
