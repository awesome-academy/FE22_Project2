import React, { Component } from 'react';

class InfoItemTag extends Component {
    render() {
        const { path } = this.props;
        return (
            <div className="tab-item--sub">
                <div className="img-thumbnail mb-5 mb-md-0 w-100">
                    <img className="img-fluid"
                         src={require("../../../../images/Detail/"+path+"")} alt="Product 1" /></div>
                <div className="tab_item--info">
                    <h3 className="text-uppercase mb-4 title">The mark of legend</h3>
                    <p>
                        Tự hào được ghi là năm mà Tyffany &amp; Co là thành lập, bộ
                        sựu tập mang tính biểu tượng này cung cấp cho một cái gật đầu
                        với qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                        đường cong và đường nét mượt mà.
                    </p>
                </div>
            </div>
        );
    }
}

export default InfoItemTag;