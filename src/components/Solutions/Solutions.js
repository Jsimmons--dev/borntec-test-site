import React, { Component } from 'react';
import Header from '../Header/Header'
import './Solutions.css'


export class Solutions extends Component {
    render() {
        return (
            <div >
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/plane.jpg) no-repeat center center' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5 text-white">MEET OUR SOLUTIONS</h1>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='Left' class="display-4" style={{color:"Coral"}}>Cross Check</h1>
                        <p align='Left' style={{color:"white"}}>Compliance and Monitoring System, MiFID II, CFTC and MAR</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div>
                            <h5 style={{color: "Coral"}}>Automated Trading and DEA Management</h5>
                            <ul>
                                <li style={{color: "White"}}>Monitor messaging velocity in realtime</li>
                                <li style={{color: "White"}}>Visualize by exchange, trade session, user, algo ID & more</li>
                                <li style={{color: "White"}}>Monitor for rejections and limit band breaches</li>
                                <li style={{color: "White"}}>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{color: "Coral"}}>Position Monitoring and Alerting</h5>
                            <ul>
                                <li style={{color: "White"}}>Aggregate working orders and filled positions from all trading systems and exchanges in realtime</li>
                                <li style={{color: "White"}}>Group blocks of accounts into custom risk groups</li>
                                <li style={{color: "White"}}>Define thresholds for clip size, limit breaches, and many more parameters</li>
                            </ul>
                        </div>
                        <div >
                            <h5 style={{color: "Coral"}}>Transaction Reporting for MiFID II</h5>
                            <ul>
                                <li style={{color: "White"}}>Automated retrieval of customer trade records</li>
                                <li style={{color: "White"}}>Data enrichment and formatting</li>
                                <li style={{color: "White"}}>Report validation</li>
                                <li style={{color: "White"}}>Secure delivery to regulators</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='Left' class="display-4" style={{color:"Dodgerblue"}}>TraC</h1>
                        <p align='Left' style={{color:"white"}}>Real-Time Trade Blotter Across All Vendors/Exchanges</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div>
                            <h5 style={{color:'dodgerblue'}}>Cost Effective Terminals for Risk & Compliance</h5>
                            <ul>
                                <li style={{color: "White"}}>TraC is intuitive and easy to use for non-trading personnel</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{color:'dodgerblue'}}>Single Screen, Rapid Access to All Order Flow</h5>
                            <ul>
                                <li style={{color: "White"}}>Navigate one application for worldwide order flow</li>
                                <li style={{color: "White"}}>Easily search orders by any field</li>
                                <li style={{color: "White"}}>View and cancel orders</li>
                                <li style={{color: "White"}}>Export and download order flow detail</li>
                            </ul>
                        </div>
                        <div >
                            <h5 style={{color:'dodgerblue'}}>Automated Trading and DEA Management</h5>
                            <ul>
                                <li style={{color: "White"}}>Monitor messaging velocity in realtime</li>
                                <li style={{color: "White"}}>Visualize by exchange, trade session, user, algo ID & more</li>
                                <li style={{color: "White"}}>Monitor for rejections and limit band breaches</li>
                                <li style={{color: "White"}}>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='Left' class="display-4" style={{color:'Coral'}}>CORE</h1>
                        <p align='Left' style={{color:'White'}}>Care Order STP Between Clients and Brokers</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div>
                            <h5 style={{color:'Coral'}}>Client-Broker FIX Routing for Care Orders</h5>
                            <ul>
                                <li style={{color: "White"}}>SaaS deployment</li>
                                <li style={{color: "White"}}> Full STP for clients</li>
                                <li style={{color: "White"}}>Brokers execute away or via DMA</li>
                                <li style={{color: "White"}}> Many OMS’s pre-certified</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='Left' class="display-4" style={{color:'dodgerblue'}}>JetConnect</h1>
                        <p align='Left' style={{color:'white'}}>SaaS Real-Time Trade Flow Distribution</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div>
                            <h5 style={{color:'dodgerblue'}}>Flexibility</h5>
                            <ul>
                                <li style={{color: "White"}}>Production ready in days to weeks</li>
                                <li style={{color: "White"}}>Multi-Asset, Multi-Market Trade Flow</li>
                                <li style={{color: "White"}}>Easy counterparty connectivity</li>
                                <li style={{color: "White"}}>30+ API’s plug-and-play</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{color:'dodgerblue'}}>Consolidation</h5>
                            <ul>
                                <li style={{color: "White"}}>Rapid DMA/FIX Integrations with easy normalization and transformation</li>
                                <li style={{color: "White"}}>Central hub for all trade flow</li>
                                <li style={{color: "White"}}>Trade reporting in flexible formats via email/sftp</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div >
        );
    }
}