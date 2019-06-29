import React, { Component } from 'react';
import {loadDataCate, loadDataSubCate, redirectSubCategory} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlCategories = process.env.REACT_APP_CATEGORIES;
const urlSubCategories = process.env.REACT_APP_SUB_CATEGORIES;

class EditSubCategory extends Component {
    constructor(props) {
        super(props);
        this.nameSubCategory = React.createRef();
        this.categoryID = React.createRef();

        this.onEditHandling = this.onEditHandling.bind(this);
    }

    componentDidMount() {
        const { dataCategory } = this.props;
        fetch(urlCategories).then(res => res.json())
            .then(result => {
                dataCategory(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    async edtDataSubCategory(obj) {
        // POST Data Carts
        await fetch(urlSubCategories+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    async getDataSubCategory() {
        const { data } = this.props;
        await fetch(urlSubCategories)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    onEditHandling(category) {
        return (event) => {
            const nameSub = this.nameSubCategory.current.value;
            const categoryID = this.categoryID.current.value;
            const { redirect } = this.props;

            if (nameSub) {
                let obj = {id: category.id, nameSub, idCate: parseInt(categoryID), isActive: true};
                this.edtDataSubCategory(obj);
                setTimeout(() => {
                    this.getDataSubCategory();
                }, 300);
                redirect(1) // Redirect to TableCategories
            }
        }
    }

    render() {
        const { updateSubCagtegoy, categories } = this.props;
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên sản phẩm con:</label>
                    <input type="text" className="form-control" ref={this.nameSubCategory}
                           defaultValue={updateSubCagtegoy.nameSub}
                           id="nameCate" placeholder="Enter Name Category Sup"/>
                </div>

                <div className="form-group">
                    <label htmlFor="categoryName">Loại sản phẩm:</label>
                    <select name="category" id="categoryName"
                            className="form-control" defaultValue={updateSubCagtegoy.idCate} ref={this.categoryID}>
                        {
                            categories.map((item, idx) => <option key={idx}
                                                                  value={item.id}>{item.nameCategory}</option>)
                        }
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onEditHandling(updateSubCagtegoy)}>Sửa</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        updateSubCagtegoy: state.updateSubCagtegoy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataCategory: (list) => {
            dispatch(loadDataCate(list));
        },
        data: (list) => {
            dispatch(loadDataSubCate(list));
        },
        redirect: (item) => {
            dispatch(redirectSubCategory(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSubCategory);