import React, { Component } from 'react';
import {Tab, Tabs} from "react-bootstrap";

import TableCategory from "./component/component-category/TableCategory";
import AddCategory from "./component/component-category/AddCategory";
import LayoutAdmin from "./component/LayoutAdmin";
import AddSubCategory from "./component/component-category/AddSubCategory";
import TableSubCategory from "./component/component-category/TableSubCategory";
import connect from "react-redux/es/connect/connect";
import EditCategory from "./component/component-category/EditCategory";
import EditSubCategory from "./component/component-category/EditSubCategory";

class Categories extends Component {
    render() {
        const { redirectCategory, redirectSubCategory } = this.props;

        return (
            <LayoutAdmin>
                <Tabs defaultActiveKey="categories">
                    <Tab eventKey="categories" title="Loại sản phẩm">
                        {
                            redirectCategory === 1 &&
                            <div>
                                <AddCategory/>
                                <TableCategory/>
                            </div>
                        }
                        {
                            redirectCategory === 2 &&
                                <EditCategory/>
                        }
                    </Tab>
                    <Tab eventKey="supCate" title="Sản phẩm con">
                        {
                            redirectSubCategory === 1 &&
                            <div>
                                <AddSubCategory/>
                                <TableSubCategory/>
                            </div>
                        }
                        {
                            redirectSubCategory === 2 &&
                                <EditSubCategory/>
                        }
                    </Tab>
                </Tabs>
            </LayoutAdmin>
        );
    }
}

function mapStateToProps(state) {
    return {
        redirectCategory: state.redirectCategory,
        redirectSubCategory: state.redirectSubCategory
    }
}

export default connect(mapStateToProps)(Categories);