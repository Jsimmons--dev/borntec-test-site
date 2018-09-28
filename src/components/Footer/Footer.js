import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{display:'flex', justifyContent:'space-around', flexDirection:'column', backgroundImage:'url(./assets/plane.jpg)'}}  >
                <div className="container">
                    <h1 style={{flex:1}}  className="display-4">Footer</h1>
                </div>
            </div>
        );
    }
}