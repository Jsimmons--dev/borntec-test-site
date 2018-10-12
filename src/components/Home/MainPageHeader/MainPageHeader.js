
import React, { Component } from 'react';
import { theme } from '../../../constants'
import './MainPageHeader.css'

class MainPageHeader extends Component {
    render() {
        return (
        <div id='main-page-header' className="container-fluid jumbotron-fluid header-sizing main-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center'}}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Smarter Together</h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Delivering <strong>tools</strong> and <strong>technologies</strong> to <strong>accelerate</strong> change in <strong>today's marketplace</strong></h4>
            </div>
        );
    }
}

export default MainPageHeader