import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class CrossCheckPreview extends Component {
    render() {
        return (
            <div className="card" style={{width: '18rem', margin:'10px', display:'inline-block'}}>
                <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" align="center">Cross Check</h5>
                    <p className="card-text" align="center">Compliance and Monitoring System, MiFID II, CFTC and MAR</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <br />
            </div>
        );
    }
}

export default CrossCheckPreview