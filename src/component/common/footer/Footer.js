import React, {Component} from 'react';

import imgLogoPay from '../../../images/HOME/logo_pay.png'
import imgMark from '../../../images/HOME/mark.png';
import imgPhone from '../../../images/HOME/telephone.png'
import imgFax from '../../../images/HOME/fax.png'
import imgMail from '../../../images/HOME/mail.png'
import FooterInfo from "./FooterInfo";

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid p-4 pt-5">
                <div className="container">
                    <div className="overview--info">
                        <div className="overview--item pb-4">
                            <h5 className="pb-4">Liên hệ với chúng tôi</h5>
                            <p><img src={ imgMark } alt="mark" /> Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, p.Cống Vị, Q.Ba Đình, Hà Nội</p><span>
                            <img src={imgPhone} alt="phone" /> (04) 6674 2332 &nbsp;-&nbsp;
                            <img src={imgFax} alt="fax" /> (04) 3786 8904</span>
                            <br /><span><img src={imgPhone} alt="phone" /> (08) 6680 9686&nbsp;<span>
                            <img src={imgMail} alt="mail" /><i>&nbsp;Support@bizweb.vn</i></span></span>
                        </div>
                        <FooterInfo/>
                        <FooterInfo/>
                        <FooterInfo/>
                        <FooterInfo/>
                    </div>
                    <div className="further-info pt-4"><span>© Copyright 2008-2014 DKT Technology JSC</span><img className="float-lg-right" src={imgLogoPay} alt="Pay logo" /></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
