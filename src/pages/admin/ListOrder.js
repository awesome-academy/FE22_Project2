import React, { Component } from 'react';
import TableListOrder from "./component/component-order/TableListOrder";
import LayoutAdmin from "./component/LayoutAdmin";

class ListOrder extends Component {
    render() {
        return (
            <LayoutAdmin>
                <TableListOrder/>
            </LayoutAdmin>
        );
    }
}

export default ListOrder;