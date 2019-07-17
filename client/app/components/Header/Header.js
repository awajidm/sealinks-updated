import React from 'react';
import { } from 'reactstrap';
import "./Header.css";
import img from './Logo.jpg';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <React.Fragment>
            <div className="Header">
                <div className="upperbar">
                    <div className="header_bar container">
                        <a href="https://www.facebook.com/sealinkspk/">
                            <i className="ml-3 fa fa-facebook-f text-white"></i>
                        </a>
                        <i className="ml-3 fa fa-twitter text-white"></i>
                        <i className="ml-3 fa fa-youtube text-white"></i>
                        <i className="ml-3 fa fa-google-plus text-white"></i>
                        <a href="https://instagram.com/sealinks_pk?igshid=p9wa8hw52twu">
                            <i className="ml-3 fa fa-instagram text-white"></i>
                        </a>
                        <div className="float-right btn-log">
                            <Link to="/account" className="btn btn-sm btn-info" >User Account</Link>
                        </div>
                    </div>

                </div>
                <div className="header-b">
                    <div className="container">
                        <div className="site-branding">
                            <Link to="/" className="custom-logo-link" ><img width="230" height="76" src={img} className="custom-logo" alt="Sea Links" itemProp="logo" sizes="(max-width: 96px) 100vw, 96px" /></Link>
                        </div>
                        <div className="right">
                            <span className="phone-label">Call us, we are open 24/7</span>
                            <Link to="/" className="tel-link"><span className="phone">+92-305-9993330</span></Link>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
};
export default Header;