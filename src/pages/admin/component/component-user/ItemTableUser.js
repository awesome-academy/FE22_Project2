import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import { loadDataUsers, updateItemUsers, redirect } from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";
import RowItemUser from "./RowItemUser";

const urlUsers = process.env.REACT_APP_USERS;

class ItemTableUser extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        const { data } = this.props;
        fetch(urlUsers).then(res => res.json())
            .then(result => {
                data(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    editUser(user) {
        const { update, redirect } = this.props;
        update(user);

        redirect(3); // Redirect to EditUser
    }

    onEdit(user) {
        return (event) => {
            this.editUser(user);
        };
    }

    render() {
        const { show, users } = this.props;
        return (
            <ItemRowTable>
                {
                    users.map((user, idx) => <RowItemUser key={idx}
                                                          show={show}
                                                          id={user.id}
                                                          firstname={user.firstName}
                                                          lastName={user.lastName}
                                                          email={user.email}
                                                          roleUser={user.role}
                                                          active={user.isActive}
                                                          user={user}
                                                          onEdit={this.onEdit(user)}/>
                    )
                }

            </ItemRowTable>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        },
        update: (item) => {
            dispatch(updateItemUsers(item));
        },
        redirect: (item) => {
            dispatch(redirect(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTableUser);