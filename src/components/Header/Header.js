
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" style={{display:'flex', justifyContent:'space-around', flexDirection:'column', backgroundImage:'url(./assets/servers.jpg)'}}  >
                <div class="container">
                    <h1 style={{flex:1}}  class="display-4 text-white">BornTec</h1>
                </div>
            </div>
        );
    }
}