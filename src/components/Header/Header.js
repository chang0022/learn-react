import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.css';


class Header extends React.Component {
    render() {
        return(
            <div className="page__hd">
                <h1 className="page__title">
                    <img src={logo} alt="WeUI" height="21px" />
                </h1>
                <p className="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
            </div>
        );
    }
}

export default Header;