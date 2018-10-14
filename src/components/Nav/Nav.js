import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <nav style={{}} className="top-down-gradient navbar navbar-dark navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header container-fluid">
                        <a className="navbar-brand" href="#">
                            <img style={{ display: 'inline' }} className='brand-icon logo' alt="Brand" src="./4 black_crop.png" />
                        </a>
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse container-fluid navbar-controller">
                        <ul className="navbar-nav ml-auto list-inline">
                            <Link to='/solutions' className='nav-link nav-box text-white list-inline-item'>Software Solutions</Link>
                            <Link to='/services' className='nav-link text-white list-inline-item'>Colocation</Link>
                            <li className="nav-item dropdown text-white">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="clientServicesDropdown" className='nav-link text-white list-inline-item dropdown-toggle'>Client Services</a>
                                <div className="dropdown-menu bg-dark" aria-labelledby="clientServicesDropdown">
                                    <Link to='/clients/#hedgefunds' className="dropdown-background dropdown-item text-white">Hedge Funds/CTAs</Link>
                                    <Link to='/clients/#banks' className="dropdown-item text-white dropdown-background">Banks, FCMs, & Broker Dealers</Link>
                                    <Link to='/clients/#proptrading' className="dropdown-item text-white dropdown-background">Proprietary Trading Groups</Link>
                                </div>
                            </li>
                            <Link to='/about' className='nav-link text-white list-inline-item'>About Us</Link>
                            <Link to='/contact' className='nav-link text-white list-inline-item'>Contact Us</Link>
                        </ul>
                    </div>
                </div >
            </nav >
        );
    }
}
