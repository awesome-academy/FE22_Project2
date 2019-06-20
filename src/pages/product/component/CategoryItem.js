import React, { Component } from 'react';

class CategoryItem extends Component {
    render() {
        const { categoryName } = this.props;
        return(
            <div className="tag--item">
                <button className="accordion text-uppercase">{categoryName}</button>
                <div className="panel">
                    <ul>
                        <li>Vòng tay</li>
                        <li>Nhẫn</li>
                        <li>Lắc chân</li>
                        <li>Phụ kiện khác</li>
                        <li>Giày lười Giày mọi</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CategoryItem;