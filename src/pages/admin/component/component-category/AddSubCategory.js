import React, { Component } from 'react';
import {loadDataCate, loadDataSubCate} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlCategories = process.env.REACT_APP_CATEGORIES;
const urlSubCategories = process.env.REACT_APP_SUB_CATEGORIES;

class AddSubCategory extends Component {
    constructor(props) {
        super(props);
        this.nameSubCategory = React.createRef();
        this.categoryID = React.createRef();

        this.onClickAdd = this.onClickAdd.bind(this);
    }

    componentDidMount() {
        this.getDataSubCategory();
    }

    async getDataSubCategory() {
        const { dataSub } = this.props;
        await fetch(urlSubCategories)
            .then(res => res.json())
            .then(
                (result) => {
                    dataSub(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async addSubCategory(subCategory) {
        await fetch(urlSubCategories, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subCategory)
        });
    }

    onClickAdd(event) {
        const nameSub = this.nameSubCategory.current.value;
        const categoryID = this.categoryID.current.value;
        const { subCategory } = this.props;

        let id = 1;
        if (subCategory) {
            id = subCategory[subCategory.length-1].id+1; // Get next ID in DB
        }

        if (nameSub) {
            let subCategory = {id, nameSub, idCate: parseInt(categoryID), isActive: true};
            this.addSubCategory(subCategory);

            this.nameSubCategory.current.value = "";
            setTimeout(() => {
                this.getDataSubCategory();
            }, 300)
        }
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên sản phẩm con:</label>
                    <input type="text" className="form-control" ref={this.nameSubCategory}
                           id="nameCate" placeholder="Enter Name Category Sup"/>
                </div>

                <div className="form-group">
                    <label htmlFor="categoryName">Loại sản phẩm:</label>
                    <select name="category" id="categoryName" ref={this.categoryID}
                            className="form-control">
                        {
                            categories.map((item, idx) => <option key={idx}
                                                                  value={item.id}>{item.nameCategory}</option>)
                        }
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onClickAdd}>Add</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        subCategory: state.subCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataSub: (list) => {
            dispatch(loadDataSubCate(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCategory);