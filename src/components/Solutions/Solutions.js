import React, { Component } from 'react';
import Header from '../Header/Header'
import './Solutions.css'
import { theme } from '../../constants'


export class Solutions extends Component {

    componentDidMount() {
        if (this.props.location && this.props.location.hash !== "")
            document.querySelector(this.props.location.hash).scrollIntoView()
    }

    render() {
        return (
            <div >
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/servers.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">MEET OUR SOLUTIONS</h1>
                <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Explore our <strong style={{color:'dodgerblue'}}>products</strong> that create our <strong style={{color:'dodgerblue'}}>Flight Control</strong> suite</h4>
            </div>
                <div className='container'>
                    <div id='crosscheck' style={{ backgroundColor: "rgb(30, 30, 30)" }} class="jumbotron jumbotron-fluid">
                        <div align='center' class="container">
                            <h1 class="display-4" style={{ color: theme.primaryColor1 }}>Cross Check</h1>
                            <p>Compliance and Monitoring System, MiFID II, CFTC and MAR</p>
                        </div>
                        <hr />
                        <div className={'container-fluid'} style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor1 }}>Automated Trading and DEA Management</h5>
                                    <ul>
                                        <li>Monitor messaging velocity in realtime</li>
                                        <li>Visualize by exchange, trade session, user, algo ID & more</li>
                                        <li>Monitor for rejections and limit band breaches</li>
                                        <li>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor1 }}>Position Monitoring and Alerting</h5>
                                    <ul>
                                        <li>Aggregate working orders and filled positions from all trading systems and exchanges in realtime</li>
                                        <li>Group blocks of accounts into custom risk groups</li>
                                        <li>Define thresholds for clip size, limit breaches, and many more parameters</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor1 }}>Transaction Reporting for MiFID II</h5>
                                    <ul>
                                        <li>Automated retrieval of customer trade records</li>
                                        <li>Data enrichment and formatting</li>
                                        <li>Report validation</li>
                                        <li>Secure delivery to regulators</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='trac' style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                        <div align='center' class="container">
                            <h1 class="display-4" style={{ color: theme.primaryColor2 }}>TraC</h1>
                            <p>Real-Time Trade Blotter Across All Vendors/Exchanges</p>
                        </div>
                        <hr />
                        <div className={'container-fluid'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor2 }}>Cost Effective Terminals for Risk & Compliance</h5>
                                    <ul>
                                        <li >TraC is intuitive and easy to use for non-trading personnel</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor2 }}>Single Screen, Rapid Access to All Order Flow</h5>
                                    <ul>
                                        <li>Navigate one application for worldwide order flow</li>
                                        <li>Easily search orders by any field</li>
                                        <li>View and cancel orders</li>
                                        <li>Export and download order flow detail</li>
                                    </ul>
                                </div>
                                <div >
                                    <h5 style={{ color: theme.primaryColor2 }}>Automated Trading and DEA Management</h5>
                                    <ul>
                                        <li>Monitor messaging velocity in realtime</li>
                                        <li>Visualize by exchange, trade session, user, algo ID & more</li>
                                        <li>Monitor for rejections and limit band breaches</li>
                                        <li>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='core' style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                        <div align='center' class="container">
                            <h1 class="display-4" style={{ color: theme.primaryColor1 }}>CORE</h1>
                            <p>Care Order STP Between Clients and Brokers</p>
                        </div>
                        <hr />
                        <div className={'container-fluid'} style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor1 }}>Client-Broker FIX Routing for Care Orders</h5>
                                    <ul>
                                        <li>SaaS deployment</li>
                                        <li> Full STP for clients</li>
                                        <li>Brokers execute away or via DMA</li>
                                        <li> Many OMS’s pre-certified</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='jetconnect' style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                        <div align='center' class="container">
                            <h1 class="display-4" style={{ color: theme.primaryColor2 }}>JetConnect</h1>
                            <p>SaaS Real-Time Trade Flow Distribution</p>
                        </div>
                        <hr />
                        <div className={'container-fluid'} style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor2 }}>Flexibility</h5>
                                    <ul>
                                        <li>Production ready in days to weeks</li>
                                        <li>Multi-Asset, Multi-Market Trade Flow</li>
                                        <li>Easy counterparty connectivity</li>
                                        <li>30+ API’s plug-and-play</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ color: theme.primaryColor2 }}>Consolidation</h5>
                                    <ul>
                                        <li>Rapid DMA/FIX Integrations with easy normalization and transformation</li>
                                        <li>Central hub for all trade flow</li>
                                        <li>Trade reporting in flexible formats via email/sftp</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}