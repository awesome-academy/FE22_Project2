import React, { Component } from 'react'

class MenuBar extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item"><a className="nav-link text-uppercase" href="#">TRANG CHỦ</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="#">GIỚI THIỆU</a></li>
                    <li className="nav-item dropdown"><a className="nav-link text-uppercase" href="#">Sản phẩm</a>
                        <div className="dropdown-menu">
                            <div className="menu_item">
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Dưỡng Da</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><a href="#">Áo khoác</a></li>
                                        <li><a href="#">Bộ áo liền quần</a></li>
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Quần /Váy</a></li>
                                        <li><a href="#">Quần short</a></li>
                                        <li><a href="#">Quần jean</a></li>
                                        <li><a href="#">Đồ đan</a></li>
                                        <li><a href="#">Áo nỉ</a></li>
                                    </ul>
                                </div>
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Nước Hoa</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><a href="#">Áo cánh /Áo sơ mi</a></li>
                                        <li><a href="#">Túi sách &amp; Balô</a></li>
                                        <li><a href="#">Khăn quàng cổ và Foulards</a></li>
                                        <li><a href="#">Dệt kim Hats &amp; Gloves</a></li>
                                        <li><a href="#">Vớ và Socks</a></li>
                                        <li><a href="#">Jewerly</a></li>
                                        <li><a href="#">Bị bảo vệ</a></li>
                                        <li><a href="#">Gày</a></li>
                                    </ul>
                                </div>
                                <div className="menu_item--sub">
                                    <h6 className="text-dark text-uppercase">Trang sức</h6>
                                    <hr />
                                    <ul className="pl-0">
                                        <li><a href="#">Áo cánh /Áo sơ mi</a></li>
                                        <li><a href="#">Túi sách &amp; Balô</a></li>
                                        <li><a href="#">Khăn quàng cổ và Foulards</a></li>
                                        <li><a href="#">Dệt kim Hats &amp; Gloves</a></li>
                                        <li><a href="#">Vớ và Socks</a></li>
                                        <li><a href="#">Jewerly</a></li>
                                        <li><a href="#">Bị bảo vệ</a></li>
                                        <li><a href="#">Gày</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="#">tin tức</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="#">bản đồ</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="#">liên hệ</a></li>
                </ul>
            </div>
        );
    }
}

export default MenuBar;