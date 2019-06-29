import React, { Component } from 'react';
import {loadDataCate, redirectCategory} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlCategories = process.env.REACT_APP_CATEGORIES;

class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.nameCategory = React.createRef();

        this.onEditHandling = this.onEditHandling.bind(this);
    }

    async edtDataCategory(obj) {
        // POST Data Carts
        await fetch(urlCategories+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
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

    onEditHandling(category) {
        return (event) => {
            const nameCategory = this.nameCategory.current.value;
            const { redirect } = this.props;

            if (nameCategory) {
                let obj = {id: category.id, nameCategory, isActive: true};
                this.edtDataCategory(obj);
                setTimeout(() => {
                    this.getDataCategory();
                }, 300);
                redirect(1) // Redirect to TableCategories
            }
        }
    }

    render() {
        const { updateCagtegoy } = this.props;
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Name Category:</label>
                    <input type="text" className="form-control" ref={this.nameCategory}
                           defaultValue={updateCagtegoy.nameCategory}
                           id="nameCate" placeholder="Enter Name Category"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onEditHandling(updateCagtegoy)}>Sửa</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updateCagtegoy: state.updateCagtegoy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataCate(list));
        },
        redirect: (item) => {
            dispatch(redirectCategory(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);