import React, { Component } from 'react';
import { theme } from '../../constants';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: 'rgb(35,35,35)', padding: '0px' }} className="page-footer font-small pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">
                        <div className="offset-md-1 col-md-2 mb-md-0 mb-2">

                            <ul align='center' className="list-unstyled">
                                <li>
                                    <strong>COMPANY</strong>
                                </li>
                                <Link to='/blog'>
                                    <li style={{ color: 'grey' }}>
                                        blog
                                </li>
                                </Link>
                                <Link to='/contact'>
                                    <li style={{ color: theme.primaryColor2 }}>
                                        contact us
                                </li>
                                </Link>

                            </ul>

                        </div>
                        <div className="col-md-2 mb-md-0 mb-2">

                            <ul align='center' className="list-unstyled">
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
                        <div className="col-md-2 mb-md-0 mb-2">

                            <ul align='center' className="list-unstyled">
                                <li>
                                    <strong>PHONE</strong>
                                </li>
                                <li style={{ color: 'grey' }}> 
                                <a href="tel:13129770123"> +1 (312) 977-0123</a>
</li>
                            </ul>

                        </div>

                        <div className="col-md-2 mb-md-0 mb-2">

                            <ul align='center' className="list-unstyled">
                                <li>
                                    <strong>EMAIL</strong>
                                </li>
                                <li style={{ color: 'grey' }} href="mailto:sales@borntec.com">
                                <a href='mailto:sales@borntec.com'>sales@borntec.com</a> 
</li>
                            </ul>

                        </div>
                        <div className="col-md-2 mb-md-0 mb-2">

                            <div className="list-unstyled" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <div>
                                    <strong>SOCIAL MEDIA</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div style={{ color: 'grey', padding: '5px' }}>
                                        <a href='https://www.linkedin.com/company/born-technology'><img src='./assets/icons/In-White-41px-R.png'></img></a>
                                    </div>
                                    <div style={{ color: 'grey', padding: '5px' }}>
                                        <a href="https://twitter.com/borntec"><img width='51px' src='./assets/icons/Twitter_Logo_WhiteOnImage.svg'></img></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 text-light"><strong>© 2018 Copyright BornTec <Link to='/login'><i className='fas fa-lock'></i></Link></strong></div>

            </footer>
        );
    }
}

//href="https://www.borntec.com/login-2/" 