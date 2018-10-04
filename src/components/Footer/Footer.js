import $ from 'jquery';
import React, { Component } from 'react';
import { theme } from '../../constants';

export class Footer extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: 'rgb(35,35,35)', padding: '0px' }} class="page-footer font-small pt-4">

                <div class="container-fluid text-center text-md-left">

                    <div class="row">
                        <hr class="clearfix w-100 d-md-none pb-3" />

                        <div class="col-md-3 mb-md-0 mb-3">

                            <ul class="list-unstyled">
                                <li>
                                    <a class='text-light' href="#!"><strong>COMPANY</strong></a>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    news
                                </li>
                                <li style={{ color: 'grey' }}>
                                    blog
                                </li>
                                <li style={{color: theme.primaryColor1}}>
                                    contact us
                                </li>
                            </ul>

                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">

                            <ul class="list-unstyled">
                                <li>
                                    <a class='text-light' href="#!"><strong>ADDRESS</strong></a>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    191 North Wacker
    </li>
                                <li style={{ color: 'grey' }}>
                                    Suite 1775
    </li>
                                <li style={{ color: 'grey' }}>
                                    Chicago, IL 60606
    </li>
                            </ul>

                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">

                            <ul class="list-unstyled">
                                <li>
                                    <a class='text-light' href="#!"><strong>PHONE</strong></a>
                                </li>
                                <li style={{ color: 'grey' }}>
                                +1 (312) 977-0123
</li>
                            </ul>

                        </div>
                    
                        <div class="col-md-3 mb-md-0 mb-3">

                          <ul class="list-unstyled">
                                <li>
                                    <a class='text-light' href="#!"><strong>EMAIL</strong></a>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    sales@borntec.com
</li>
                            </ul>

                        </div>
                    </div>

                </div>

                <div class="footer-copyright text-center py-3 text-light"><strong>© 2018 Copyright BornTec</strong></div>

            </footer>
        );
    }
}