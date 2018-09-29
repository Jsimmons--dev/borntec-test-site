import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class JetConnectPreview extends Component {
    render() {
        return (
            <div class="card" style={{width: '18rem', margin:'10px'}}>
                <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title" align="center">Jet Connect</h5>
                    <p class="card-text" align="center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Explore</a>
                </div>
                <br />
            </div>
        );
    }
}

export default JetConnectPreview