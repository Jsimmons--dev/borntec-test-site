import React, { Component } from 'react';
import MiniProductPreview from './MiniProductPreview'
import SVGProductPreview from './SVGProductPreview'
import { theme } from '../../constants'
import { Link } from 'react-router-dom';

class ServicesOverview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                <br />
                <br />
                <br />
                <h2 align="center" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>GLOBAL INFRASTRUCTURE</strong> SERVICES</h2>
                <br />
                <p align="center" className='desc-text'><strong> An extremely popular trading tool with extensive customization capabilities. <strong style={{ color: theme.primaryColor2 }}>Proprietary trading groups, locals</strong> and <strong style={{ color: theme.primaryColor2 }}>hedge funds</strong> are large users of <strong style={{ color: theme.primaryColor2 }}>X_Trader</strong>
                </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} align='center'>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview color={theme.primaryColor2} bgColor={'white'} name="Low Latency Infrastructure" icon="icon-hosting" size="80px" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview color={theme.primaryColor2} bgColor={'white'} name="Low Latency Infrastructure" icon="far fa-clock" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview color={theme.primaryColor2} bgColor={'white'} name="Direct Market Access" icon="icon-direct-market-access" size="80px" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview color={theme.primaryColor2} bgColor={'white'} name="Microwave Connectivity" icon="fas fa-wifi" size="80px" />
                    </Link>

                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default ServicesOverview