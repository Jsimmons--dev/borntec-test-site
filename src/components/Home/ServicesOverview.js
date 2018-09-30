import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import MiniProductPreview from './MiniProductPreview'
import SVGProductPreview from './SVGProductPreview'

class ServicesOverview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                <br />
                <br />
                <br />
                <h1 align="center" style={{ flex: 1, color: "DodgerBlue" }}><strong style={{ color: 'White' }}>Trading Technology</strong> Services</h1>
                <br />
                <p align="center"><strong style={{ color: "white" }}> An extremely popular trading tool with extensive customization capabilities. <strong style={{ color: "dodgerblue" }}>Proprietary trading groups, locals</strong> and <strong style={{ color: "dodgerblue" }}>hedge funds</strong> are large users of <strong style={{ color: "dodgerblue" }}>X_Trader</strong>
                </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center'>
                    <SVGProductPreview bgColor="dodgerblue" color="white" name="Hosting" icon="./assets/hosting.svg" size="80px" />                                  
                    <MiniProductPreview bgColor="dodgerblue" name="Low Latency Infrastructure" icon="far fa-clock" />
                    <SVGProductPreview bgColor="dodgerblue" name="Direct Market Access" icon="./assets/direct-market-access.svg" />
                    <MiniProductPreview bgColor="dodgerblue" name="Microwave Connectivity" icon="fas fa-wifi" size="80px" />
                </div>
                <br />
                <br />
                <br />
                <br />
                <hr style={{ width: '100%' }} />
            </div>
        );
    }
}

export default ServicesOverview