import React, { Component } from 'react';

import imgAdv from '../../../images/Grid/adv--product.jpg';

class ProductAdv extends Component {
    render() {
        return (
            <div className="product--adv--sub mt-4"><img className="img-fluid w-100" src={imgAdv} alt="product" /></div>
        );
    }
}

export default ProductAdv;