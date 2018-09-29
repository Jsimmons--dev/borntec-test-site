
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../../Header/Header'

class MainPageHeader extends Component {
    render() {
        return (
            <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap:'wrap', 'alignContent':'center', backgroundImage:'url(./assets/servers.jpg)' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5 text-white">Smarter Together</h1>
                <h4 id="supporting-tag" style={{ flexBasis:'100%', marginLeft:'1.5em', marginRight:'1.5em',  textAlign:'center', color: "coral", fontFamily: 'Maven Pro' }} className="text-white">this should say something nice</h4>
            </div>
        );
    }
}

export default MainPageHeader