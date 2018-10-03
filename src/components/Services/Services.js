import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../Header/Header'


export class Services extends Component {
    render() {
        return (
            <div >
                <Header src={'url(./assets/plane.jpg)'} text={'FlightControl Suite'} />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'DodgerBlue'}}>Managed Hosting Services</h1>
                        <h3 class="display-4" style={{color: 'White'}}>Trading Technologies</h3>
                        <p class="lead" style={{color:"white"}}>An extremely popular trading tool with extensive customization capabilities. Proprietary trading groups, locals and hedge funds are large users of X_Trader.
                        </p>
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'OrangeRed'}}>Direct Market Access</h1>
                        <p class="lead" style={{color:"white"}}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'DodgerBlue'}}>Low Latency Trading</h1>
                        <p class="lead" style={{color:"white"}}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead" style={{color:"white"}}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div >
            
            
        );
    }
}
