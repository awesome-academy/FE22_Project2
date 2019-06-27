import React, { Component } from 'react';
import {Tab, Tabs} from "react-bootstrap";
import TableCategory from "./component/component-category/TableCategory";
import NavAdmin from "./component/NavAdmin";
import SideBar from "./component/SideBar";
import FooterAdmin from "./component/FooterAdmin";
import AddCategory from "./component/component-category/AddCategory";
import AddSubCategory from "./component/component-category/AddSubCategory";
import TableSubCategory from "./component/component-category/TableSubCategory";

class Categories extends Component {
    render() {
        return (
            <div className="category_admin">
                <NavAdmin/>

                <div className="wrap--admin">
                    <SideBar/>

                    <div className="wrap--content">
                        <div className="container-fluid mt-4">
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
                        </div>

                        <FooterAdmin/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;