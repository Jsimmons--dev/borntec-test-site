import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class CrossCheckPreview extends Component {
    render() {
        return (
            <div className="card" style={{ backgroundColor: 'rgb(30, 30, 30)', width: '18rem', margin: '10px', display: 'inline-block' }}>
                <div className='bg-dark' style={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'25px', height:'120px', width:'120px', borderRadius:'50%'}}>
                    <i style={{ fontSize: '100px', color: 'coral' }} class="fas fa-arrow-right"></i>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-light" align="center">Cross Check</h5>
                    <p className="card-text text-light" align="center">Compliance and Monitoring System, MiFID II, CFTC and MAR</p>
                </div>
                <br />
            </div >
        );
    }
}

export default CrossCheckPreview