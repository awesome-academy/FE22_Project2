import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { updateItemCategory, loadDataCate } from '../../../../redux/actions';

import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemCategory from "./RowItemCategory";

const urlCategories = process.env.REACT_APP_CATEGORIES;

class ItemCategory extends Component {
    componentDidMount() {
        const { data } = this.props;
        fetch(urlCategories).then(res => res.json())
            .then(result => {
                data(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { categories } = this.props;
        return (
            <ItemRowTable>
                {
                    categories.map((item, idx) => <RowItemCategory key={idx}
                                                                   nameCategory={item.nameCategory}
                                                                   active={item.isActive} cate={item}/>)
                }
            </ItemRowTable>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        updateCagtegoy: state.updateCagtegoy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataCate(list));
        },
        update: (item) => {
            dispatch(updateItemCategory(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCategory);