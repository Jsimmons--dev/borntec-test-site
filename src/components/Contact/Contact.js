import React, { Component } from 'react';
import './Contact.css';
import { theme } from '../../constants'

class Contact extends Component {
    render() {
        return (
            <div>
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(/assets/comms.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 align='center' id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5"><strong>Thanks for visiting <strong>BornTec</strong> </strong></h1>
                    <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}><strong>Schedule a time to meet with us or send us your <strong>contact information</strong> and we will <strong>promptly</strong> get back to you!</strong></h4>
                </div>
                <br />
                <br />
                <br />
                <div className='contact-container' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 align="center" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Contact</strong> Us</h1>
                        <br />
                        <div className='contact-mobile' style={{ height: "800px" }} id='contact'>
                        </div>
                    </div>
                    <div className='contact-hidden-sm' style={{ margin:'50px', alignItems: 'center', flexDirection: 'column' }}>
                        <br />
                        <br />
                        <div>
                            <ul className="list-unstyled info-text">
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
                        <br />
                        <div>

                            <ul class="list-unstyled info-text">
                                <li>
                                    <strong>PHONE</strong>
                                </li>
                                <li style={{ color: 'grey' }}>
                                    +1 (312) 977-0123
</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        window.hbspt.forms.create({
            portalId: "4754439",
            formId: "d1971e99-049b-4960-ac18-a31f5afae4a4",
            target: '#contact',
            onCreate: (form) => {
                document.querySelector('.hs-form-iframe').classList.toggle('contact-mobile')
            }
        })
    }
}

export default Contact