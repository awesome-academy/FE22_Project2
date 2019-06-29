import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemSubCategory from "./RowItemSubCategory";
import {loadDataSubCate, redirectSubCategory, updateItemSubCategory} from "../../../../redux/actions";

const urlSubCategory = process.env.REACT_APP_SUB_CATEGORIES;

class ItemSubCategory extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        const { data } = this.props;
        fetch(urlSubCategory).then(res => res.json())
            .then(result => {
                data(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    onEdit(subCate) {
        return (event) => {
            const { update, redirect } = this.props;
            update(subCate);
            redirect(2); // Redirect to EditCategory
        }
    }

    render() {
        const { subCategory } = this.props;
        return (
            <ItemRowTable>
                {
                    subCategory.map((item, idx) => <RowItemSubCategory key={idx}
                                                                       nameSub={item.nameSub}
                                                                       idCate={item.idCate}
                                                                       active={item.isActive} subCate={item}
                                                                       onEdit={this.onEdit(item)}/>)
                }
            </ItemRowTable>
        );
    }
}
function mapStateToProps(state) {
    return {
        subCategory: state.subCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataSubCate(list));
        },
        update: (item) => {
            dispatch(updateItemSubCategory(item));
        },
        redirect: (item) => {
            dispatch(redirectSubCategory(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSubCategory);