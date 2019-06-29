import React, { Component } from 'react';
import axios from 'axios';
import {loadData, redirectProducts} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlProducts = process.env.REACT_APP_PRODUCTS;

class EditProduct extends Component {
    constructor(props) {
        super(props);

        const { updateProduct } = this.props;
        this.state = {
            selectedFile: null,
            image: updateProduct.image,
            check: false
        };

        this.productName = React.createRef();
        this.price = React.createRef();
        this.decription = React.createRef();
        this.IdCategory = React.createRef();
        this.productNameList = React.createRef();
        this.decriptionList = React.createRef();
        this.discount = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            image: event.target.files[0].name,
            check: true
        })
    }

    async getDataProduct() {
        const { dataProduct } = this.props;
        await fetch(urlProducts)
            .then(res => res.json())
            .then(
                (result) => {
                    dataProduct(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async editDataProduct(product) {
        await fetch(urlProducts+"/"+product.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
    }

    editProduct() {
        const productName = this.productName.current.value;
        const price = parseInt(this.price.current.value);
        const decription = this.decription.current.value;
        const IdCategory = parseInt(this.IdCategory.current.value);
        const productNameList = this.productNameList.current.value;
        const decriptionList = this.decriptionList.current.value;
        const discount = parseInt(this.discount.current.value);
        const { updateProduct, redirect } = this.props;

        if (productName && price && decription && IdCategory && productNameList && decriptionList && discount) {
            let product = {id: updateProduct.id, productName, price,
                image: this.state.image, decription, IdCategory,
                productNameList, decriptionList, discount, isActive: true};

            this.editDataProduct(product);
            setTimeout(() => {
                this.getDataProduct();
            }, 300);
            redirect(1); // Redirect to TableProduct
        }
    }

    onClickHandler(event) {
        if (this.state.check) {
            const data = new FormData();
            data.append('file', this.state.selectedFile);
            axios.post("http://localhost:8000/upload", data, {

            }).then(res => { // then print response status
                console.log(res.statusText);
            });
        }

        this.editProduct();
    }

    render() {
        const { updateProduct, categories } = this.props;
        console.log(updateProduct);
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" defaultValue={updateProduct.productName}
                           ref={this.productName}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giá:</label>
                    <input type="number" className="form-control" defaultValue={updateProduct.price}
                           ref={this.price}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Mô tả Hiện Dạng Lưới:</label>
                    <textarea className="form-control" defaultValue={updateProduct.decription}
                           ref={this.decription}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Mô tả Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" defaultValue={updateProduct.productNameList}
                           ref={this.productNameList}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Danh Sách:</label>
                    <textarea className="form-control" defaultValue={updateProduct.decriptionList}
                           ref={this.decriptionList}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giảm giá(%):</label>
                    <input type="number" className="form-control" defaultValue={updateProduct.discount}
                           ref={this.discount}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Loại sản phẩm:</label>
                    <select className="form-control" name="categoryProduct" defaultValue={updateProduct.IdCategory}
                            ref={this.IdCategory}
                            id="category">
                        {
                            categories.map((item, idx) => <option key={idx}
                                                                  value={item.id}>{item.nameCategory}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imgProduct">Hình hiển thị:</label>
                    <img src={require(`../../../../images/HOME/${updateProduct.image}`)} alt=""/>
                    <input type="file" className="form-control"
                           id="imgProduct" onChange={this.onChangeHandler}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Sửa</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updateProduct: state.updateProduct,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataProduct: (list) => {
            dispatch(loadData(list));
        },
        redirect: (item) => {
            dispatch(redirectProducts(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);