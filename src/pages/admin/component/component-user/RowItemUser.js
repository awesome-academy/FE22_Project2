import React, { Component } from 'react';
import { Link } from "react-router-dom";

const urlUsers = process.env.REACT_APP_USERS;

class RowItemUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            toggleCheck: true
        }
    }

    async edtDataUsers(obj) {
        // POST Data Carts
        await fetch(urlUsers+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    onChangeHandler(event) {
        this.setState({
            toggleCheck: !this.state.toggleCheck
        });

        const { user } = this.props;
        let obj = {...user, isActive: !this.state.toggleCheck};
        setTimeout(() => {
            this.edtDataUsers(obj);
        }, 400)
    }

    componentDidMount() {
        let { active } = this.props;
        if (typeof (active) === "undefined") active = true;
        this.setState({
            toggleCheck: active
        });
    }

    render() {
        const { id, show, firstname, lastName, email, roleUser, onEdit } = this.props; // Check if true show Table have Button Edit
        const active = this.state.toggleCheck;

        if (show) {
            return (
                <tr>
                    <td className="text-center">
                        <div className="table--item"><span>{firstname}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{lastName}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{email}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{roleUser}</span></div>
                    </td>
                    <td className="text-center">
                        {
                            id !== 1 &&
                            <div className="table--item">
                                {
                                    active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                                }
                                {
                                    !active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                                }
                            </div>
                        }

                    </td>
                    <td className="text-center">
                        {
                            id !== 1 &&
                            <div className="table--item">
                                <Link to="/admin-users/edit"><button onClick={onEdit} className="mr-2 btn btn-warning">Sửa</button></Link>
                            </div>
                        }
                    </td>
                </tr>
            );
        } else {
            return(
                <tr>
                    <td className="text-center">
                        <div className="table--item"><span>{firstname}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{lastName}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{email}</span></div>
                    </td>
                    <td className="text-center">
                        <div className="table--item"><span>{roleUser}</span></div>
                    </td>
                </tr>
            );
        }

    }
}

export default RowItemUser;