import React, { Component } from 'react';
import './Contact.css';
import { primaryColor1, primaryColor2 } from '../../constants'

class Contact extends Component {
    render() {
        return (
            <div>
            <br/>
            <br/>
            <br/>
            <h1 align="center" style={{color: primaryColor2 }}><strong style={{ color: 'White' }}>Contact</strong> Us</h1>
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