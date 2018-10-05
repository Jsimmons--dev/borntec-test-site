import React, { Component } from 'react';
import { theme } from '../../constants'

class IconHeader extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '40px', color: theme.textColor, margin: '7px' }} className={this.props.icon}></span>
                <h5 style={{ color: this.props.color, margin: 0 }}>{this.props.text}</h5>
            </div >
        );
    }
}

export default IconHeader