import React, { Component } from 'react';
import NavAdmin from "./component/NavAdmin";
import SideBar from "./component/SideBar";
import FooterAdmin from "./component/FooterAdmin";
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