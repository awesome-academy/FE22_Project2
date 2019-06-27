import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";

class ItemTableUser extends Component {
    editUser() {

    }

    onEdit(event) {
        const { show } = this.props;
        if (show) {
            this.editUser();
        }
    }

    render() {
        const { show } = this.props; // Check if true show Table have Button Edit
        return (
            <ItemRowTable>
                <td className="text-center">
                    <div className="table--item"><span>John</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>Doe</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>john@example.com</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>user</span></div>
                </td>
                {
                    show &&
                    <td className="text-center">
                        <div className="table--item">
                            <input type="checkbox"/>
                        </div>
                    </td>
                }
                {
                    show &&
                    <td className="text-center">
                        <div className="table--item">
                            <button className="mr-2 btn btn-warning">Sửa</button>
                        </div>
                    </td>
                }
            </ItemRowTable>
        );
    }
}

export default ItemTableUser;