import $ from 'jquery';
import React, { Component } from 'react';
import { theme } from '../../constants';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: 'rgb(35,35,35)', padding: '0px' }} class="page-footer font-small pt-4">

                <div class="container-fluid text-center text-md-left">

                    <div class="row">
                        <hr class="clearfix w-100 d-md-none pb-3" />

                        <div class="offset-md-1 col-md-2 mb-md-0 mb-2">

                            <ul align='center' class="list-unstyled">
                                <li>
                                    <strong>COMPANY</strong>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    news
                                </li>
                                <li style={{ color: 'grey' }}>
                                    blog
                                </li>
                                <Link to='/contact'>
                                    <li style={{ color: theme.primaryColor2 }}>
                                        contact us
                                </li>
                                </Link>

                            </ul>

                        </div>
                        <div class="col-md-2 mb-md-0 mb-2">

                            <ul align='center' class="list-unstyled">
                                <li>
                                    <strong>ADDRESS</strong>
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
                        <div class="col-md-2 mb-md-0 mb-2">

                            <ul align='center' class="list-unstyled">
                                <li>
                                    <strong>PHONE</strong>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    +1 (312) 977-0123
</li>
                            </ul>

                        </div>

                        <div class="col-md-2 mb-md-0 mb-2">

                            <ul align='center' class="list-unstyled">
                                <li>
                                    <strong>EMAIL</strong>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    sales@borntec.com
</li>
                            </ul>

                        </div>
                        <div class="col-md-2 mb-md-0 mb-2">

                            <div class="list-unstyled" style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <div>
                                    <strong>MEDIA</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent:'space-around'}}>
                                    <div style={{ color: 'grey', padding:'5px' }}>
                                        <a><img src='./assets/icons/In-White-41px-R.png'></img></a>
                                    </div>
                                    <div style={{ color: 'grey', padding:'5px'  }}>
                                        <a><img width='51px' src='./assets/icons/Twitter_Logo_WhiteOnImage.svg'></img></a>
                                    </div>
                                    <div style={{ color: 'grey', padding:'5px'  }}>
                                        <a><img width='41px' src='./assets/icons/lock.svg'></img></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="footer-copyright text-center py-3 text-light"><strong>© 2018 Copyright BornTec <a style={{color:'white'}} href="https://www.borntec.com/wp-login.php" className="fas fa-lock"></a></strong></div>

            </footer>
        );
    }
}