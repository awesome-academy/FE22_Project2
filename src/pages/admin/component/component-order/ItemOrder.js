import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemOrder from "./RowItemOrder";
import { loadDataCarts } from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlCarts = process.env.REACT_APP_CARTS;

class ItemOrder extends Component {
    componentDidMount() {
        const { data } = this.props;
        fetch(urlCarts).then(res => res.json())
            .then(result => {
                data(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { carts } = this.props;
        return (
            <ItemRowTable>
                {
                    carts.map((item, idx) => <RowItemOrder key={idx} 
                                                            id={item.id} 
                                                            idUser={item.idUser} 
                                                            item={item}/>)
                }
            </ItemRowTable>
        );
    }
}

function mapStateToProps(state) {
    return {
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataCarts(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOrder);