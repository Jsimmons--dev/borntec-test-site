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
                <h1 align='center' style={{ flex: 1, color:"DodgerBlue"  }}><strong style={{color:'White'}}>TRADING TECHNOLOGY</strong> SERVICES</h1>
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