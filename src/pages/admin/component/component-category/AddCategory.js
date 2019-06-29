import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import { loadDataCate } from "../../../../redux/actions";

const urlCategories = process.env.REACT_APP_CATEGORIES;

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.nameCategory = React.createRef();

        this.onClickAdd = this.onClickAdd.bind(this);
    }

    componentDidMount() {
        this.getDataCategory();
    }

    async getDataCategory() {
        const { data } = this.props;
        await fetch(urlCategories)
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

    async addCategory(category) {
        await fetch(urlCategories, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)
        });
    }

    onClickAdd(event) {
        const nameCategory = this.nameCategory.current.value;
        const { categories } = this.props;

        let id = 1;
        if (categories) {
            id = categories[categories.length-1].id+1; // Get next ID in DB
        }

        if (nameCategory) {
            let category = {id, nameCategory, isActive: true};
            this.addCategory(category);

            this.nameCategory.current.value = "";
            setTimeout(() => {
                this.getDataCategory();
            }, 300)
        }
    }


    render() {
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Name Category:</label>
                    <input type="text" className="form-control" ref={this.nameCategory}
                           id="nameCate" placeholder="Enter Name Category"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onClickAdd}>Thêm</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataCate(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);