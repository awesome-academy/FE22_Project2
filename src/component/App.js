import React, { Component } from 'react';
import Nav from '../pages/home/navHome';
import Banner from '../pages/home/banner'
import Main from '../pages/home/main/main'

class App extends Component {
  render() {
    return (
      <div >
        <Nav></Nav>
        <Banner></Banner>
        <Main></Main>
      </div>
    );
  }
}
export default App;
