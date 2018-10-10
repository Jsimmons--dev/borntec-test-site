import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                        <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse container-fluid">
                        <ul class="navbar-nav ml-auto list-inline">
                            <Link to='/' className='nav-link text-white'>Home</Link>
                            <Link to='/about' className='nav-link text-white list-inline-item'>About Us</Link>
                            <Link to='/solutions' className='nav-link nav-box text-white list-inline-item'>Our Solutions</Link>
                            <Link to='/services' className='nav-link text-white list-inline-item'>Colocation</Link>
                            <Link to='/clients' className='nav-link text-white list-inline-item'>Client Services</Link>
                            <Link to='/contact' className='nav-link text-white list-inline-item'>Contact Us</Link>
                        </ul>
                    </div>
                </div >
            </nav >
        );
    }
}