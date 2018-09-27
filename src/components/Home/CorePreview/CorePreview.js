import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class CorePreview extends Component {
    render() {
        return (
            <div class="card" style={{width: '18rem', margin:'10px'}}>
                <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title" align="center">Core</h5>
                    <p class="card-text" align="center">Care Order STP Between Clients and Brokers</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <br />
            </div>
        );
    }
}

export default CorePreview