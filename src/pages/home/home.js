import React, { Component } from 'react';
import Nav from './component/navHome'
import Banner from './component/banner'
import Main from './component/main'
import ListHotProduct from './component/listhotproduct/producthot'
class home extends Component {
    render() {
        return (
            <div className="">
                <Nav></Nav>
                <Banner></Banner>
                <Main></Main>
                <ListHotProduct></ListHotProduct>
            </div>
        );
    }
}

export default home;