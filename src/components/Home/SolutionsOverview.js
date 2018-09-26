import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import CrossCheckPreview from './CrossCheckPreview/CrossCheckPreview';
import JetConnectPreview from './JetConnectPreview/JetConnectPreview';
import TraCPreview from './TraCPreview/TraCPreview';
import CorePreview from "./CorePreview/CorePreview";



class SolutionsOverview extends Component {
    render() {
        return (
            <div class="container" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}  >
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{ flex: 1 }}><strong style={{color:'red'}}>TRADING RISK MANAGEMENT</strong> SOLUTIONS</h3>
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

export default SolutionsOverview