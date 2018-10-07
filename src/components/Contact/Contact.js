import React, { Component } from 'react';
import './Contact.css';
import { theme } from '../../constants'

class Contact extends Component {
    render() {
        return (
            <div>
           <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/servers.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">THANKS FOR VISITNG <strong style={{color:'dodgerblue'}}>BORNTEC</strong></h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}><strong style={{color:'dodgerblue'}}>Schedule</strong> a time to meet with us or <strong style={{color:'dodgerblue'}}>send us your contact information</strong> and we will <strong style={{color:'dodgerblue'}}>promptly</strong> get back to you!</h4>
            </div>
            <br/>
            <br/>
            <br/>
            <h1 align="left" style={{color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Contact</strong> Us</h1>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', height: "800px" }} id='contact'>
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
            onFormReady: function (form) {
                //form.parent().addClass('borntec-contact')
                let formFrame = window.$('.hs-form-iframe')
                formFrame.addClass('borntec-contact')
                formFrame.css('width', '')
            }
        })

        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.async = true;
        // s.innerHTML = "Calendly.initBadgeWidget({url: 'https://calendly.com/chrisboyle1993', text: 'Schedule time with me', color: '#4d5055', branding: true});";
        // this.instance.appendChild(s);

    }
}

export default Contact