import React, { Component } from 'react';

class InfoContact extends Component {
    render() {
        return(
            <div class="contact-us mt-4 mb-5">
                <h3 class="text-uppercase mb-3">Liên Hệ</h3>
                <div class="row">
                    <div class="col-lg-6 img-thumbnail">
                        <img class="img-fluid" src={require("../../images/ContactUs/about--map.jpg")} alt="hinh about" />
                    </div>
                    <div class="col-lg-6 form--contact mt-4 mt-lg-0">
                    <h6 class="text-uppercase mb-4">Gữi email cho chúng tôi</h6>
                    <form action="#">
                        <div class="form-group">
                        <label for="name-contact">Tên<span>*</span></label>
                        <input class="form-control" id="name-contact" type="text" />
                        </div>
                        <div class="form-group">
                        <label for="email-contact">Email<span>*</span></label>
                        <input class="form-control" id="email-contact" type="email" />
                        </div>
                        <div class="form-group">
                        <label for="messages">Tin nhắn<span>*</span></label>
                        <input class="form-control" id="messages" type="text" />
                        </div>
                        <div class="wrap-button">
                        <button class="btn btn-dark text-uppercase mt-3">Gữi</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoContact;