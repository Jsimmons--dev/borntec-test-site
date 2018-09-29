import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class JetConnectPreview extends Component {
    render() {
        return (
            <div className="card" style={{width: '18rem', margin:'10px', display:'inline'}}>
                <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" align="center">Jet Connect</h5>
                    <p className="card-text" align="center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <br />
            </div>
        );
    }
}

export default JetConnectPreview