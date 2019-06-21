import React, { Component } from 'react';

const urlSubCategory = process.env.REACT_APP_SUB_CATEGORIES;

class RowItemSubCategory extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            toggleCheck: true
        }
    }

    async edtDataSubCategories(obj) {
        // POST Data Carts
        await fetch(urlSubCategory+"/"+obj.id, {
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

        const { subCate } = this.props;
        let obj = {...subCate, isActive: !this.state.toggleCheck};
        setTimeout(() => {
            this.edtDataSubCategories(obj);
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
        const { nameSub, idCate } = this.props;
        const active = this.state.toggleCheck;

        return (
            <tr>
                <td className="text-center">
                    <div className="table--item"><span>{nameSub}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{idCate}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        {
                            active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                        }
                        {
                            !active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                        }
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="mr-2 btn btn-warning">Sửa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default (RowItemSubCategory);