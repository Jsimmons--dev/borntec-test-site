import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import CrossCheckPreview from './CrossCheckPreview/CrossCheckPreview';
import JetConnectPreview from './JetConnectPreview/JetConnectPreview';
import TraCPreview from './TraCPreview/TraCPreview';
import CorePreview from "./CorePreview/CorePreview";
import MiniProductPreview from './MiniProductPreview'
import { theme } from '../../constants'

//style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}  >

class SolutionsOverview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                <br />
                <br />
                <br />
                <h1 align="center" style={{ color: theme.primaryColor1, flex: 1 }}><strong >TRADING RISK MANAGEMENT</strong> SOLUTIONS</h1>
                <br />
                <p align="center"><strong > Our software solutions encompass <strong style={{ color: theme.primaryColor1 }}>MiFID II compliance</strong>, including providing realtime <strong style={{ color: theme.primaryColor1 }}>monitoring and alerting</strong> solutions for algorithmic and DEA trading for <strong style={{ color: theme.primaryColor1 }}>RTS 6</strong>, transaction reporting and others </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center'>
                    <MiniProductPreview bgColor={theme.primaryColor1} name="Cross Check" icon="fas fa-check" size="90px" desc="Compliance and Monitoring System, MiFID II, CFTC and MAR" />
                    <MiniProductPreview bgColor={theme.primaryColor1} name="Jet Connect" icon="fas fa-fighter-jet" size="80px" desc="SaaS Real-Time Trade Flow Distribution" />
                    <MiniProductPreview bgColor={theme.primaryColor1} name="TraC" icon="fas fa-cogs" size="70px" desc="Real-Time Trade Blotter Across All Vendors/Exchanges" />
                    <MiniProductPreview bgColor={theme.primaryColor1} name="CORE" icon="fas fa-arrow-right" desc="Care Order STP Between Clients and Brokers" />
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