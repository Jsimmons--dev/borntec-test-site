import React, { Component } from 'react';
import MiniProductPreview from './MiniProductPreview'
import { theme } from '../../constants'
import { Link } from 'react-router-dom';

class SolutionsOverview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                <br />
                <br />
                <br />
                <h1 align="center" style={{ color: theme.primaryColor1, flex: 1 }}><strong style={{ color: theme.textColor }} >TRADING RISK MANAGEMENT</strong> SOLUTIONS</h1>
                <br />
                <p align="center"><strong > Our software solutions encompass <strong style={{ color: theme.primaryColor1 }}>MiFID II compliance</strong>, including providing realtime <strong style={{ color: theme.primaryColor1 }}>monitoring and alerting</strong> solutions for algorithmic and DEA trading for <strong style={{ color: theme.primaryColor1 }}>RTS 6</strong>, transaction reporting and others </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link style={{ color: theme.textColor }} to='/solutions/#crosscheck'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Cross Check" icon="fas fa-check" size="90px" desc="Compliance and Monitoring System, MiFID II, CFTC and MAR" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#jetconnect'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Jet Connect" icon="fas fa-fighter-jet" size="80px" desc="SaaS Real-Time Trade Flow Distribution" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#trac'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="TraC" icon="fas fa-cogs" size="70px" desc="Real-Time Trade Blotter Across All Vendors/Exchanges" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#core'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="CORE" icon="fas fa-arrow-right" desc="Care Order STP Between Clients and Brokers" />
                    </Link>

                </div>
                <br />
                <br />
                <br />
                <br />
                <hr style={{ width: '100%' }} />
            </div >
        );
    }
}

export default SolutionsOverview