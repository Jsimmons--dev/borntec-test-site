import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import CrossCheckPreview from './CrossCheckPreview/CrossCheckPreview';
import JetConnectPreview from './JetConnectPreview/JetConnectPreview';
import TraCPreview from './TraCPreview/TraCPreview';
import CorePreview from "./CorePreview/CorePreview";

class ServicesOverview extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{ flex: 1 }}><strong style={{color:'red'}}>TRADING RISK MANAGEMENT</strong> SOLUTIONS</h3>
                <br/>
                <br/>
                <br/>
                <br/>  
                <div>
                    <CrossCheckPreview />
                    <JetConnectPreview />
                    <TraCPreview />
                    <CorePreview />
                </div>
                <br />
                <br />
                <br />
                <br />
                <hr style={{width: '100%'}}/>
            </div>
        );
    }
}

export default ServicesOverview