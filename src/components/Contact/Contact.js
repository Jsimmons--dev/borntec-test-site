import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'column', height:"800px"}} id='contact'>
            </div>
        );
    }

    componentDidMount() {
        window.hbspt.forms.create({
            portalId: "4754439",
            formId: "d1971e99-049b-4960-ac18-a31f5afae4a4",
            target: '#contact',
            onFormReady: function(form) {
                //form.parent().addClass('borntec-contact')
                let formFrame = window.$('.hs-form-iframe')
                formFrame.addClass('borntec-contact')
                formFrame.css('width', '')
            }
        })
        
    }
}

export default Contact