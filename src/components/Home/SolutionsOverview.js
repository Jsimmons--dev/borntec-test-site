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
                <h2 align="center" className='headers-mobile' style={{ color: theme.primaryColor2, flex: 1 }}><strong style={{ color: theme.textColor }} >TRADING RISK MANAGEMENT</strong> SOLUTIONS</h2>
                <br />
                <p align="center" className='desc-text'><strong >CrossCheck™ is our flagship <strong style={{color:'dodgerblue'}}>Compliance and Monitoring system</strong> for MiFID II RTS 6, CFTC and MAR, providing realtime <strong style={{color:'dodgerblue'}}>monitoring and alerting</strong> for algorithmic and DEA trading, transaction reporting and more</strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link style={{ color: theme.textColor }} to='/solutions/#crosscheck'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Risk & Compliance" icon="fas fa-check" size="90px" desc="CrossCheck™" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#jetconnect'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Trade Flow" icon="fas fa-fighter-jet" size="80px" desc="JetConnect™" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#trac'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Global Order Book" icon="fas fa-cogs" size="70px" desc="TraC™" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/solutions/#core'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Care Orders" icon="fas fa-arrow-right" desc="CORE™" />
                    </Link>

                </div>
                <br />
                <br />
            </div >
        );
    }
}

export default SolutionsOverview