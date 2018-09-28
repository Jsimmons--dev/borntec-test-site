import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../Header/Header'

export class Solutions extends Component {
    render() {
        return (
            <div >
                <Header src={'url(./assets/plane.jpg)'} text={'Meet Our Solutions'} />
                <div style= {{ backgroundColor: "darkGrey"}} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='center' class="display-4">Cross Check</h1>
                        <p align='center'>Compliance and Monitoring System, MiFID II, CFTC and MAR</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <h5>Automated Trading and DEA Management</h5>
                            <ul>
                                <li>Monitor messaging velocity in realtime</li>
                                <li>Visualize by exchange, trade session, user, algo ID & more</li>
                                <li>Monitor for rejections and limit band breaches</li>
                                <li>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Position Monitoring and Alerting</h5>
                            <ul>
                                <li>Aggregate working orders and filled positions from all trading systems and exchanges in realtime</li>
                                <li>Group blocks of accounts into custom risk groups</li>
                                <li>Define thresholds for clip size, limit breaches, and many more parameters</li>
                            </ul>
                        </div>
                        <div >
                            <h5>Transaction Reporting for MiFID II</h5>
                            <ul>
                                <li>Automated retrieval of customer trade records</li>
                                <li>Data enrichment and formatting</li>
                                <li>Report validation</li>
                                <li>Secure delivery to regulators</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style= {{ backgroundColor: "darkGrey"}} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='center' class="display-4">TraC</h1>
                        <p align='center'>Real-Time Trade Blotter Across All Vendors/Exchanges</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <h5>Cost Effective Terminals for Risk & Compliance</h5>
                            <ul>
                                <li>TraC is intuitive and easy to use for non-trading personnel</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Single Screen, Rapid Access to All Order Flow</h5>
                            <ul>
                                <li>Navigate one application for worldwide order flow</li>
                                <li>Easily search orders by any field</li>
                                <li>View and cancel orders</li>
                                <li>Export and download order flow detail</li>
                            </ul>
                        </div>
                        <div >
                            <h5>Automated Trading and DEA Management</h5>
                            <ul>
                                <li>Monitor messaging velocity in realtime</li>
                                <li>Visualize by exchange, trade session, user, algo ID & more</li>
                                <li>Monitor for rejections and limit band breaches</li>
                                <li>Realtime alerts via email, SMS, Symphony, Slack, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style= {{ backgroundColor: "darkGrey"}} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='center' class="display-4">CORE</h1>
                        <p align='center'>Care Order STP Between Clients and Brokers</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <h5>Client-Broker FIX Routing for Care Orders</h5>
                            <ul>
                                <li>SaaS deployment</li>
                                <li> Full STP for clients</li>
                                <li>Brokers execute away or via DMA</li>
                                <li> Many OMS’s pre-certified</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style= {{ backgroundColor: "darkGrey"}} class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 align='center' class="display-4">JetConnect</h1>
                        <p align='center'>SaaS Real-Time Trade Flow Distribution</p>
                    </div>
                    <hr />
                    <div className={'container-fluid'} style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <div>
                            <h5>Flexibility</h5>
                            <ul>
                                <li>Production ready in days to weeks</li>
                                <li>Multi-Asset, Multi-Market Trade Flow</li>
                                <li>Easy counterparty connectivity</li>
                                <li>30+ API’s plug-and-play</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Consolidation</h5>
                            <ul>
                                <li>Rapid DMA/FIX Integrations with easy normalization and transformation</li>
                                <li>Central hub for all trade flow</li>
                                <li>Trade reporting in flexible formats via email/sftp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}