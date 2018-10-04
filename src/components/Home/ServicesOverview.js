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
                <h1 align="center" style={{ color: theme.primaryColor2, flex: 1 }}><strong style={{ color: theme.textColor }}>GLOBAL INFRASTRUCTURE</strong> SERVICES</h1>
                <br />
                <p align="center"><strong> An extremely popular trading tool with extensive customization capabilities. <strong style={{ color: theme.primaryColor2 }}>Proprietary trading groups, locals</strong> and <strong style={{ color: theme.primaryColor2 }}>hedge funds</strong> are large users of <strong style={{ color: theme.primaryColor2 }}>X_Trader</strong>
                </strong></p>
                <br />
                <br />
                <br />
                <br />
                <div align='center'>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <SVGProductPreview bgColor={theme.primaryColor2} name="Hosting" icon="./assets/hosting.svg" size="80px" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Low Latency Infrastructure" icon="far fa-clock" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <SVGProductPreview bgColor={theme.primaryColor2} name="Direct Market Access" icon="./assets/direct-market-access.svg" />
                    </Link>
                    <Link style={{ color: theme.textColor }} to='/services/#'>
                        <MiniProductPreview bgColor={theme.primaryColor2} name="Microwave Connectivity" icon="fas fa-wifi" size="80px" />
                    </Link>

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

export default ServicesOverview