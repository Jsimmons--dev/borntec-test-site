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
            <div class="container" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}  >
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 style={{ flex: 1, color:"DodgerBlue"  }}><strong style={{color:'White'}}>Trading Technology</strong> Services</h1>
                <br/>
                <br/>
                <br/>
                <br/>  
                <div style={{ display:'flex' }}>
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