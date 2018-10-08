
import React, { Component } from 'react';
import { theme } from '../../../constants'

class MainPageHeader extends Component {
    render() {
        return (
            <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/servers2.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Smarter Together</h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Delivering <strong style={{color:'dodgerblue'}}>tools</strong> and <strong style={{color:'dodgerblue'}}>technologies</strong> to <strong style={{color:'dodgerblue'}}>accelerate</strong> change in <strong style={{color:'dodgerblue'}}>today's marketplace</strong></h4>
            </div>
        );
    }
}

export default MainPageHeader