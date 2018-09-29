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
                <h1 style={{ flex: 1, color:"coral" }}><strong style={{color:'white'}}>TRADING RISK MANAGEMENT</strong> SOLUTIONS</h1>
                <br/>     
                     <p align="center"><strong style={{color: "white"}}> Our software solutions encompass <strong style={{color: "coral"}}>MiFID II compliance</strong>, including providing realtime <strong style={{color: "coral"}}>monitoring and alerting</strong> solutions for algorithmic and DEA trading for <strong style={{color: "coral"}}>RTS 6</strong>, transaction reporting and others </strong></p>
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