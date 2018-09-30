import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small blue pt-4" style= {{ backgroundColor: "rgb(30, 30, 30)"}}>

                <div class="container-fluid text-center text-md-left">

                    <div class="row">

                        <div class="col-md-6 mt-md-0 mt-3">

                            <h5 style={{color: "dodgerblue"}} class="text-uppercase">Quick Connect</h5>
                            <p style={{color: "white"}}><strong>Phone</strong></p>
                            <p style= {{color: "white"}}>+1 (312) 977-0123</p>

                        </div>

                        <hr class="clearfix w-100 d-md-none pb-3" />

                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Solutions</a>
                                </li>
                                <li>
                                    <a href="#!">Services</a>
                                </li>
                                <li>
                                    <a href="#!">Events</a>
                                </li>
                                <li>
                                    <a href="#!">News</a>
                                </li>
                            </ul>

                        </div>

                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2018 Copyright:
  <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
                </div>

            </footer>
        );
    }
}