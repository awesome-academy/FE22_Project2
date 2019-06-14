import React, { Component } from 'react';
import Listcategory from './listcategory'
import ListPro from './listproductCarosel/list'

class producthot extends Component {
    render() {
        return (
            <div className="container-fluid product--bg">
               <Listcategory></Listcategory> 
               
               <ListPro></ListPro>
            </div>
        );
    }
}

export default producthot;