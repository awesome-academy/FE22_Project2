import React, { Component } from 'react';
import ItemShow from "../sub-component/ItemShow";
import {redirect} from "../../../../redux/actions";
import connect from "react-redux/es/connect/connect";

class TableUsers extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);

    }

    onClickAdd(event) {
        const { redirect } = this.props;
        redirect(2); // Redirect to AddUser
    }

    render() {
        return (
            <div className="card mb-3 mt-4">
                <button className="btn btn-primary text-uppercase" onClick={this.onClickAdd}>Thêm</button>
                <ItemShow accept={false}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirect: (item) => {
            dispatch(redirect(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);