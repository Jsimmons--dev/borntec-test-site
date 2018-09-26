import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-default fixed-top">
                <div class="container-fluid" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div class="navbar-header" style={{ display: 'flex', alignItems:'center' }}>
                        <a class="navbar-brand" href="#">
                            <img class='bigIcon logo' alt="Brand" src="./logo.png" />
                        </a>
                        <h5 className="header nav-link hidden">BornTec</h5>
                    </div>
                    <div style={{ width: '700px', display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/' className='nav-link text-white'>Home</Link>
                        <Link to='/solutions' className='nav-link nav-box text-white'>Our Solutions</Link>
                        <Link to='/services' className='nav-link text-white'>Our Services</Link>
                        <Link to='/clients' className='nav-link text-white'>Our Clients</Link>
                        <Link to='/contact' className='nav-link text-white'>Contact Us</Link>
                    </div>
                </div>
            </nav>
        );
    }
}