import React, { Component } from 'react';
import TableListOrder from "./component/component-order/TableListOrder";
import LayoutAdmin from "./component/LayoutAdmin";

class ListOrder extends Component {
    render() {
        const checkLoginAdmin = JSON.parse(localStorage.getItem("admin"));
        let check = false;
        if (!checkLoginAdmin) check = false;
        else check = true;

        if(check) {
            return (
                <LayoutAdmin>
                    <TableListOrder/>
                </LayoutAdmin>
            );
        } else {
            window.location.href = "/admin";
        }        
    }
}

export default ListOrder;