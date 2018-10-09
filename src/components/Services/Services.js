import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../Header/Header'
import { theme } from '../../constants'


export class Services extends Component {

    componentDidMount() {
        console.log(this.props)
        if (this.props.location && this.props.location.hash !== "")
            window.scrollTop()
    }

    render() {
        return (
            <div>
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/girlserver.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Colocation</h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Explore how <strong style={{color:'dodgerblue'}}>BornTec</strong> can help you optimize your <strong style={{color:'dodgerblue'}}>trading operations</strong> in todays rapidly changing world.</h4>
            </div>
            <br/>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{ color: theme.primaryColor2 }}><strong style={{ color: theme.textColor }}>Direct Market</strong> Access</h1>
                        <h5 style={{ color: theme.primaryColor2 }}>Closest Proximity to Exchange Matching Engine</h5>
                        <p class="lead">Born Technology delivers “Sponsored Direct Market Access” services to its customer base across the futures, equities, equity options, fixed income and FX markets. Trading technology offerings provided to our institutional clientele include managed services of execution platforms, global co-location, infrastructure management, network management, technical and market support.</p>
                        <h5 style={{ color: theme.primaryColor2 }}>Global Colocation Facilities</h5>
                        <p class="lead">Born has invested significant resources to build out data centers with the closest proximity to any given exchange matching engine, in most cases located in the same building as the exchange matching engine. Born offers connectivity to exchanges in North America, Europe and Asia, and connects to customers from datacenters in Chicago, New York, Toronto, London, Frankfurt, Tokyo, Sao Paulo and Hong Kong</p>
                        <h5 style={{ color: theme.primaryColor2 }}>Execution Control</h5>
                        <p class="lead">Born owns and maintains control of the technology along the entire path of a trade, from customer execution to the exchange. While clearing firms must set risk parameters, they see the trades on a post-trade basis.</p>
                        <h5 style={{ color: theme.primaryColor2 }}>Institutional Focus</h5>
                        <p class="lead">Born services professional traders only, allowing for higher level of support.</p>
                        <h5 style={{ color: theme.primaryColor2 }}>Physical and Network Security</h5>
                        <p class="lead">Our data center delivers multi-level security to ensure the highest level of security for your operations.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{ color: theme.textColor }}>Low Latency <strong style={{ color: theme.primaryColor1 }}>Trading</strong></h1>
                        <h5 style={{ color: theme.primaryColor1 }}>State of the Art Architecture</h5>
                        <p class="lead">Born Technology ensures the fastest execution into the world’s exchanges through our unique architecture that reduces latencies and provides our clients the most direct route to the respective exchange matching engine.</p>
                        <h5 style={{ color: theme.primaryColor1 }}>Ultra Low-latency Infrastructure</h5>
                        <p class="lead">Born’s state of the art ultra low-latency infrastructure currently provides direct market access to dozens futures, fixed income and FX exchanges in North America, South America, and Europe</p>
                        <h5 style={{ color: theme.primaryColor1 }}>Network Infrastructure</h5>
                        <p class="lead">In addition to providing custom fiber pathways and other unique transit systems, Born is a global partner with a leading telco providers. Born provides the lowest latency connections between our data centers and exchanges.</p>
                        <h5 style={{ color: theme.primaryColor1 }}>Microwave Telecommunication Services</h5>
                        <p class="lead">Born offers the lowest latency data transmission using state-of-the-art RF technologies.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Managed Hosting <strong style={{ color: theme.primaryColor1 }}>Services</strong></h1>
                        <h5><strong style={{ color: theme.primaryColor1 }}>Blue Trading Systems</strong></h5>
                        <p class='lead'>Blue Trading Systems builds practical, efficient solutions to complex problems presented by today's capital markets, offering high-performance, robust trading platforms for sophisticated derivatives traders.</p>
                        <h5 style={{ color: theme.primaryColor1 }}>Trading Technologies</h5>
                        <p class="lead">An extremely popular trading tool with extensive customization capabilities. Proprietary trading groups, locals and hedge funds are large users of X_Trader.
                        </p>
                        <h5 style={{ color: theme.primaryColor1 }}>Itiviti</h5>
                        <p>Born Technology is a global partner with Itiviti Software, delivering fully hosted and managed solutions for Itiviti and Cameron FIX.</p>
                    </div>
                </div>
            </div >


        );
    }
}
