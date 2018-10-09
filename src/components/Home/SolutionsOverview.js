import React, { Component } from 'react';
import MiniProductPreview from './MiniProductPreview'
import { theme } from '../../constants'
import { Link } from 'react-router-dom';

class SolutionsOverview extends Component {

    componentDidMount() {
    }


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
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Risk & Compliance" icon="fas fa-check" size="90px" desc="Cross Check" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#jetconnect'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Trade Flow" icon="fas fa-fighter-jet" size="80px" desc="JetConnect" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#trac'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Trade Blotter" icon="fas fa-cogs" size="70px" desc="TraC" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#core'>
                        <MiniProductPreview bgColor={theme.primaryColor1} name="Care Orders" icon="fas fa-arrow-right" desc="CORE" />
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