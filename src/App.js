import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import React, { Component } from 'react';

import Layout from "./component/app/Layout";
import Footer from "./component/common/footer/Footer";

const store = configureStore();

class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <Layout/>
                  <Footer/>
              </div>
          </Provider>
      );
  }
}
export default App;
