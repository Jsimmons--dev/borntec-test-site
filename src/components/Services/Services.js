import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { CrossCheck } from '../../components/CrossCheck/CrossCheck';


export class Services extends Component {
    render() {
        return (
            <div class="container" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}  >
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{ flex: 1 }}><strong style={{color:'blue'}}>TRADING RISK MANAGEMENT</strong> SOLUTIONS</h3>
                <br />
                <br/>
                <br/>
                <br/>  
                <hr />
                <div style={{ display:'flex' }}>
                    <CrossCheck />
                    <CrossCheck />
                    <CrossCheck />
                    <CrossCheck />
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
