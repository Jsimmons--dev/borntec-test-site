import React, { Component } from 'react';
import './Contact.css';
import { theme } from '../../constants'

class Contact extends Component {
    render() {
        return (
            <div>
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/comms.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5"><strong style={{ color: 'White' }}>Thanks for visiting <strong style={{ color: 'dodgerblue' }}>BornTec</strong> </strong></h1>
                    <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}><strong style={{ color: 'White' }}>Schedule a time to meet with us or send us your <strong style={{ color: 'dodgerblue' }}>contact information</strong> and we will <strong style={{ color: 'dodgerblue' }}>promptly</strong> get back to you!</strong></h4>
                </div>
                <br />
                <br />
                <br />
                <div className='contact-container' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 align="center" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Contact</strong> Us</h1>
                        <br />
                        <div style={{ height: "800px" }} id='contact'>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 align="center" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Subscribe To Our </strong>News</h1>
                        <br />
                        <div style={{ height: "800px" }} id='subscribe'>
                        </div>
                    </div>
                    <div className='contact-hidden-sm' style={{ alignItems: 'center', flexDirection: 'column' }}>
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
            formId: "827ef2b4-b36e-4c71-b627-f87c111d1839",
            target: '#subscribe'
        });


        window.hbspt.forms.create({
            portalId: "4754439",
            formId: "d1971e99-049b-4960-ac18-a31f5afae4a4",
            target: '#contact'
        })

        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.async = true;
        // s.innerHTML = "Calendly.initBadgeWidget({url: 'https://calendly.com/x', text: 'Schedule time with me', color: '#4d5055', branding: true});";
        // this.instance.appendChild(s);

    }
}

export default Contact