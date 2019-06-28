import React, { Component } from 'react';
import {Tab, Tabs} from "react-bootstrap";

import TableCategory from "./component/component-category/TableCategory";
import AddCategory from "./component/component-category/AddCategory";
import LayoutAdmin from "./component/LayoutAdmin";
import AddSubCategory from "./component/component-category/AddSubCategory";
import TableSubCategory from "./component/component-category/TableSubCategory";

class Categories extends Component {
    render() {
        return (
            <LayoutAdmin>
                <Tabs defaultActiveKey="categories">
                    <Tab eventKey="categories" title="Loại sản phẩm">
                        <AddCategory/>
                        <TableCategory/>
                    </Tab>
                    <Tab eventKey="supCate" title="Sản phẩm con">
                        <AddSubCategory/>
                        <TableSubCategory/>
                    </Tab>
                </Tabs>
            </LayoutAdmin>
        );
    }
}

export default Categories;