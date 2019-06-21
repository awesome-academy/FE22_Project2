import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemSubCategory from "./RowItemSubCategory";
import { loadDataSubCate, updateItemSubCategory } from "../../../../redux/actions";

const urlSubCategory = process.env.REACT_APP_SUB_CATEGORIES;

class ItemSubCategory extends Component {
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

    render() {
        const { subCategory } = this.props;
        return (
            <ItemRowTable>
                {
                    subCategory.map((item, idx) => <RowItemSubCategory key={idx}
                                                                       nameSub={item.nameSub}
                                                                       idCate={item.idCate}
                                                                       active={item.isActive}
                                                                       subCate={item}/>)
                }
            </ItemRowTable>
        );
    }
}
function mapStateToProps(state) {
    return {
        subCategory: state.subCategory,
        updateSubCagtegoy: state.updateSubCagtegoy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataSubCate(list));
        },
        update: (item) => {
            dispatch(updateItemSubCategory(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSubCategory);