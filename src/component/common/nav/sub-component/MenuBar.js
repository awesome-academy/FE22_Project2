import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuBar extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item"><Link className="nav-link text-uppercase" to="/">TRANG CHỦ</Link></li>
                    <li className="nav-item"><Link className="nav-link text-uppercase" to="/about">GIỚI THIỆU</Link></li>
                    <li className="nav-item dropdown"><Link className="nav-link text-uppercase" to="/products">Sản phẩm</Link>
                        <div className="dropdown-menu">
                            <div className="menu_item">
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Dưỡng Da</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><Link to="/products">Áo khoác</Link></li>
                                        <li><Link to="/products">Bộ áo liền quần</Link></li>
                                        <li><Link to="/products">Dresses</Link></li>
                                        <li><Link to="/products">Quần /Váy</Link></li>
                                        <li><Link to="/products">Quần short</Link></li>
                                        <li><Link to="/products">Quần jean</Link></li>
                                        <li><Link to="/products">Đồ đan</Link></li>
                                        <li><Link to="/products">Áo nỉ</Link></li>
                                    </ul>
                                </div>
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Nước Hoa</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><Link to="/products">Áo cánh /Áo sơ mi</Link></li>
                                        <li><Link to="/products">Túi sách &amp; Balô</Link></li>
                                        <li><Link to="/products">Khăn quàng cổ và Foulards</Link></li>
                                        <li><Link to="/products">Dệt kim Hats &amp; Gloves</Link></li>
                                        <li><Link to="/products">Vớ và Socks</Link></li>
                                        <li><Link to="/products">Jewerly</Link></li>
                                        <li><Link to="/products">Bị bảo vệ</Link></li>
                                        <li><Link to="/products">Gày</Link></li>
                                    </ul>
                                </div>
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Trang sức</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><Link to="/products">Áo cánh /Áo sơ mi</Link></li>
                                        <li><Link to="/products">Túi sách &amp; Balô</Link></li>
                                        <li><Link to="/products">Khăn quàng cổ và Foulards</Link></li>
                                        <li><Link to="/products">Dệt kim Hats &amp; Gloves</Link></li>
                                        <li><Link to="/products">Vớ và Socks</Link></li>
                                        <li><Link to="/products">Jewerly</Link></li>
                                        <li><Link to="/products">Bị bảo vệ</Link></li>
                                        <li><Link to="/products">Gày</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link text-uppercase" to="/news">tin tức</Link></li>
                    <li className="nav-item"><Link className="nav-link text-uppercase" to="/map">bản đồ</Link></li>
                </ul>
            </div>
        );
    }
}

export default MenuBar;