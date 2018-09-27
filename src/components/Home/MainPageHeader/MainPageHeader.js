
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../../Header/Header'

class MainPageHeader extends Component {
    render() {
        return (
            <Header src={'url(./assets/servers.jpg)'} text={'BornTec'}/>
        );
    }
}

export default MainPageHeader