import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <nav style={{backgroundColor:'rgba(0,0,0,.5)'}} className="navbar navbar-dark navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header container-fluid">
                        <a className="navbar-brand" href="#">
                            <img style={{ display: 'inline' }} className='bigIcon logo' alt="Brand" src="./logo.png" />
                        </a>
                        <h5 style={{ display: 'inline' }} className="header nav-link hidden text-white">BornTec</h5>
                        <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <Link style={{ display: 'inline' }} to='/' className='nav-link text-white'>Home</Link>
                            <Link style={{ display: 'inline' }} to='/solutions' className='nav-link nav-box text-white'>Our Solutions</Link>
                            <Link style={{ display: 'inline' }} to='/services' className='nav-link text-white'>Our Services</Link>
                            <Link style={{ display: 'inline' }} to='/clients' className='nav-link text-white'>Our Clients</Link>
                            <Link style={{ display: 'inline' }} to='/contact' className='nav-link text-white'>Contact Us</Link>
                        </ul>
                    </div>
                </div >
            </nav >
        );
    }
}