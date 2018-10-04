import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import CrossCheckPreview from './CrossCheckPreview/CrossCheckPreview';
import JetConnectPreview from './JetConnectPreview/JetConnectPreview';
import TraCPreview from './TraCPreview/TraCPreview';
import CorePreview from "./CorePreview/CorePreview";
import MiniProductPreview from './MiniProductPreview'
import { primaryColor1, primaryColor2 } from '../../constants'

//style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}  >

class SolutionsOverview extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <br />
                <br />
                <br />
                <br />
                <h1 align="center" style={{ color: primaryColor1, flex: 1 }}><strong style={{ color: 'white' }}>TRADING RISK MANAGEMENT</strong> SOLUTIONS</h1>
                <br />
                <p align="center"><strong style={{ color: "white" }}> Our software solutions encompass <strong style={{ color: primaryColor1 }}>MiFID II compliance</strong>, including providing realtime <strong style={{ color: primaryColor1 }}>monitoring and alerting</strong> solutions for algorithmic and DEA trading for <strong style={{ color: primaryColor1 }}>RTS 6</strong>, transaction reporting and others </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center'>
                    <MiniProductPreview bgColor={primaryColor1} color="white" name="Cross Check" icon="fas fa-check" size="90px" desc="Compliance and Monitoring System, MiFID II, CFTC and MAR" />
                    <MiniProductPreview bgColor={primaryColor1} color="white" name="Jet Connect" icon="fas fa-fighter-jet" size="80px" desc="SaaS Real-Time Trade Flow Distribution" />
                    <MiniProductPreview bgColor={primaryColor1} color="white" name="TraC" icon="fas fa-cogs" size="70px" desc="Real-Time Trade Blotter Across All Vendors/Exchanges" />
                    <MiniProductPreview bgColor={primaryColor1} color="white" name="CORE" icon="fas fa-arrow-right" desc="Care Order STP Between Clients and Brokers" />
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

export default SolutionsOverview