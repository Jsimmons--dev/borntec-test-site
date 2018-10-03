import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../Header/Header'


export class Services extends Component {
    render() {
        return (
            <div >
                <Header src={'url(./assets/plane.jpg)'} text={'FlightControl Suite'} />
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'White'}}>Managed Hosting <strong style={{color: "Red"}}>Services</strong></h1>
                        <h5 style={{color: 'Red'}}>Trading Technologies</h5>
                        <p class="lead" style={{color:"white"}}>An extremely popular trading tool with extensive customization capabilities. Proprietary trading groups, locals and hedge funds are large users of X_Trader.
                        </p>
                        <h5 style={{color: "Red"}}>Itiviti</h5>
                           <p style={{color: "white"}}>Born Technology is a global partner with Itiviti Software, delivering fully hosted and managed solutions for Itiviti and Cameron FIX.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'Dodgerblue'}}><strong style={{color: "white"}}>Direct Market</strong> Access</h1>
                        <h5 style={{color: "dodgerblue"}}>Closest Proximity to Exchange Matching Engine</h5>
                        <p class="lead" style={{color:"white"}}>Born Technology delivers “Sponsored Direct Market Access” services to its customer base across the futures, equities, equity options, fixed income and FX markets. Trading technology offerings provided to our institutional clientele include managed services of execution platforms, global co-location, infrastructure management, network management, technical and market support.</p>
                        <h5 style={{color: "dodgerblue"}}>Global Colocation Facilities</h5>
                        <p class="lead" style={{color: "white"}}>Born has invested significant resources to build out data centers with the closest proximity to any given exchange matching engine, in most cases located in the same building as the exchange matching engine. Born offers connectivity to exchanges in North America, Europe and Asia, and connects to customers from datacenters in Chicago, New York, Toronto, London, Frankfurt, Tokyo, Sao Paulo and Hong Kong</p>
                        <h5 style={{color: "dodgerblue"}}>Execution Control</h5>
                        <p class="lead" style={{color: "white"}}>Born owns and maintains control of the technology along the entire path of a trade, from customer execution to the exchange. While clearing firms must set risk parameters, they see the trades on a post-trade basis.</p>
                        <h5 style={{color: "dodgerblue"}}>Institutional Focus</h5>
                        <p class="lead" style={{color: "white"}}>Born services professional traders only, allowing for higher level of support.</p>
                        <h5 style={{color: "dodgerblue"}}>Physical and Network Security</h5>
                        <p class="lead" style={{color: "white"}}>Our data center delivers multi-level security to ensure the highest level of security for your operations.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" style={{color:'white'}}>Low Latency <strong style={{color: "Red"}}>Trading</strong></h1>
                        <h5 style={{color: "Red"}}>State of the Art Architecture</h5>
                        <p class="lead" style={{color: "white"}}>Born Technology ensures the fastest execution into the world’s exchanges through our unique architecture that reduces latencies and provides our clients the most direct route to the respective exchange matching engine.</p>
                        <h5 style={{color: "Red"}}>Ultra Low-latency Infrastructure</h5>
                        <p class="lead" style={{color: "white"}}>Born’s state of the art ultra low-latency infrastructure currently provides direct market access to dozens futures, fixed income and FX exchanges in North America, South America, and Europe</p>
                        <h5 style={{color: "Red"}}>Network Infrastructure</h5>
                        <p class="lead" style={{color: "white"}}>In addition to providing custom fiber pathways and other unique transit systems, Born is a global partner with a leading telco providers. Born provides the lowest latency connections between our data centers and exchanges.</p>
                        <h5 style={{color: "Red"}}>Microwave Telecommunication Services</h5>
                        <p class="lead" style={{color: "white"}}>Born offers the lowest latency data transmission using state-of-the-art RF technologies.</p>
                    </div>
                </div>
            </div >
            
            
        );
    }
}
