import React, { Component } from 'react';
import { theme } from '../../constants'


class About extends Component {

    componentDidMount() {
        if (this.props.location && this.props.location.hash !== "")
            window.scrollTop()
    }

    render() {
        return (
            <div>
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/stockbw.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">About <strong>BornTec</strong></h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}> Learn about us and <strong>explore </strong>our site</h4>
            </div>
            <br/>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Our</strong> Technology</h1>
                        <p className='desc-text'>Our core business is providing unparalleled technology services to banks, institutions, hedge funds and asset managers. We ensure the fastest execution into the world’s exchanges through our unique architecture that reduces latencies and provides our clients the most direct route to the respective exchange matching engine. We service our clients through technical installations in North America, South America, and Europe.</p>
                        <br/>
                        <p className='desc-text'>Our combination of first-class technology and support provide the fastest and most reliable access into the world’s major electronic exchanges. In addition to our fully staffed 24-hour operation that supervises our technology systems, we have developed proprietary automated monitoring systems, which analyze all of our systems and sub-systems 24 hours per day, 365 days per year.</p>
                    </div>
                </div>
            </div >


        );
    }
}

export default About
