import React, { Component } from 'react';
import logo from '../../../images/HOME/logo.png'
import ImgSearch from '../../../images/HOME/btn-search.png'
import ImgShoppingCart  from '../../../images/HOME/shoppoing-cart.png'


class navHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top">
                {/* Footer*/}
                {/* Navbar-item*/}
                <div className="container">
                    {/* Brand*/}<a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                    {/* Shopping cart and Search*/}
                    <div className="img--tool" id="manager--tool--1">
                        <div className="cart dropdown pr-3 pr-md-1"><a className="mr-lg-3 show-amount-item" href="/"><img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">0</span></a>
                            <div className="dropdown-menu w-100">
                                <div className="cart_item">
                                    <div className="cart_item--sub" />
                                    <hr />
                                    {/* Total price in cart*/}
                                    <div className="total--price" /><a href="shopping-cart.html">
                                        <button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button></a>
                                </div>
                            </div>
                        </div><a href="/"><img src={ImgSearch} alt="" /></a>
                    </div>
                    {/* Toggler/collapsibe Button*/}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/collapsibleNavbar"><i className="fa fa-bars" /></button>
                    {/* Navbar links*/}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item"><a className="nav-link text-uppercase" href="index.html">TRANG CHỦ</a></li>
                            <li className="nav-item"><a className="nav-link text-uppercase" href="about-us.html">GIỚI THIỆU</a></li>
                            <li className="nav-item dropdown"><a className="nav-link text-uppercase" href="product.html">Sản phẩm</a>
                                <div className="dropdown-menu">
                                    <div className="menu_item">
                                        {/* Item 1*/}
                                        <div className="menu_item--sub">
                                            <h6 className="text-dark text-uppercase">Dưỡng Da</h6>
                                            <hr />
                                            <ul className="pl-0">
                                                <li><a href="/">Áo khoác</a></li>
                                                <li><a href="/">Bộ áo liền quần</a></li>
                                                <li><a href="/">Dresses</a></li>
                                                <li><a href="/">Quần /Váy</a></li>
                                                <li><a href="/">Quần short</a></li>
                                                <li><a href="/">Quần jean</a></li>
                                                <li><a href="/">Đồ đan</a></li>
                                                <li><a href="/">Áo nỉ</a></li>
                                            </ul>
                                        </div>
                                        {/* Item 1*/}
                                        <div className="menu_item--sub">
                                            <h6 className="text-dark text-uppercase">Nước Hoa</h6>
                                            <hr />
                                            <ul className="pl-0">
                                                <li><a href="/">Áo cánh /Áo sơ mi</a></li>
                                                <li><a href="/">Túi sách &amp; Balô</a></li>
                                                <li><a href="/">Khăn quàng cổ và Foulards</a></li>
                                                <li><a href="/">Dệt kim Hats &amp; Gloves</a></li>
                                                <li><a href="/">Vớ và Socks</a></li>
                                                <li><a href="/">Jewerly</a></li>
                                                <li><a href="/">Bị bảo vệ</a></li>
                                                <li><a href="/">Gày</a></li>
                                            </ul>
                                        </div>
                                        {/* Item 1*/}
                                        <div className="menu_item--sub">
                                            <h6 className="text-dark text-uppercase">Trang sức</h6>
                                            <hr />
                                            <ul className="pl-0">
                                                <li><a href="/">Áo cánh /Áo sơ mi</a></li>
                                                <li><a href="/">Túi sách &amp; Balô</a></li>
                                                <li><a href="/">Khăn quàng cổ và Foulards</a></li>
                                                <li><a href="/">Dệt kim Hats &amp; Gloves</a></li>
                                                <li><a href="/">Vớ và Socks</a></li>
                                                <li><a href="/">Jewerly</a></li>
                                                <li><a href="/">Bị bảo vệ</a></li>
                                                <li><a href="/">Gày</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><a className="nav-link text-uppercase" href="blog.html">tin tức</a></li>
                            <li className="nav-item"><a className="nav-link text-uppercase" href="contact.html">bản đồ</a></li>
                            <li className="nav-item"><a className="nav-link text-uppercase" href="contact.html">liên hệ</a></li>
                        </ul>
                    </div>
                    {/* Shopping cart and Search*/}
                    <div className="img--tool" id="manager--tool--2">
                        <div className="cart dropdown pr-3 pr-md-1"><a className="mr-lg-3 show-amount-item" href="/"><img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">0</span></a>
                            <div className="dropdown-menu w-100">
                                <div className="cart_item">
                                    <div className="cart_item--sub" />
                                    <hr />
                                    {/* Total price in cart*/}
                                    <div className="total--price" /><a href="shopping-cart.html">
                                        <button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button></a>
                                </div>
                            </div>
                        </div><a href="/"><img src={ImgSearch} alt="" /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default navHome;