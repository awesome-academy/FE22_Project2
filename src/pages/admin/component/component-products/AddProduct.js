import React, { Component } from 'react';
import axios from 'axios';
import {loadData, loadDataCate, redirectProducts} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlProducts = process.env.REACT_APP_PRODUCTS;

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            image: ""
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
            image: event.target.files[0].name
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

    async addDataProduct(product) {
        await fetch(urlProducts, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
    }

    addProduct() {
        const productName = this.productName.current.value;
        const price = parseInt(this.price.current.value);
        const decription = this.decription.current.value;
        const IdCategory = parseInt(this.IdCategory.current.value);
        const productNameList = this.productNameList.current.value;
        const decriptionList = this.decriptionList.current.value;
        const discount = parseInt(this.discount.current.value);
        const { products, redirect } = this.props;

        let id = 1;
        if (products) {
            id = parseInt(products[products.length-1].id)+1; // Get next ID in DB
        }

        if (productName && price && decription && IdCategory && productNameList && decriptionList && discount) {
            let product = {id, productName, price,
                image: this.state.image, decription, IdCategory,
                productNameList, decriptionList, discount, isActive: true};

            this.addDataProduct(product);
            setTimeout(() => {
                this.getDataProduct();
            }, 300);
            redirect(1); // Redirect to TableProduct
        }
    }

    onClickHandler(event) {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post("http://localhost:8000/upload", data, {

        }).then(res => { // then print response status
            console.log(res.statusText);
        });

        this.addProduct();
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" ref={this.productName}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giá:</label>
                    <input type="number" className="form-control" ref={this.price}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Mô tả Hiện Dạng Lưới:</label>
                    <textarea className="form-control" ref={this.decription}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Mô tả Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" ref={this.productNameList}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Danh Sách:</label>
                    <textarea className="form-control" ref={this.decriptionList}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giảm giá(%):</label>
                    <input type="number" className="form-control" ref={this.discount}
                           id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Loại sản phẩm:</label>
                    <select className="form-control" name="categoryProduct" ref={this.IdCategory}
                            id="category">
                        {
                            categories.map((item, idx) => <option key={idx}
                                                                  value={item.id}>{item.nameCategory}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imgProduct">Hình hiển thị:</label>
                    <input type="file" className="form-control"
                           id="imgProduct" onChange={this.onChangeHandler}/>
                </div>
                <button className="btn btn-primary" onClick={this.onClickHandler}>Thêm</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataCate(list));
        },
        dataProduct: (list) => {
            dispatch(loadData(list));
        },
        redirect: (item) => {
            dispatch(redirectProducts(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);