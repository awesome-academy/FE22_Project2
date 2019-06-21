import React, { Component } from 'react';

const urlCate = process.env.REACT_APP_CATEGORIES;

class RowItemCategory extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            toggleCheck: true
        }
    }

    async edtDataCategories(obj) {
        // POST Data Carts
        await fetch(urlCate+"/"+obj.id, {
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

        const { cate } = this.props;
        let obj = {...cate, isActive: !this.state.toggleCheck};
        setTimeout(() => {
            this.edtDataCategories(obj);
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
        const { nameCategory } = this.props;
        const active = this.state.toggleCheck;

        return (
            <tr>
                <td className="text-center">
                    <div className="table--item"><span>{nameCategory}</span></div>
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

export default (RowItemCategory);