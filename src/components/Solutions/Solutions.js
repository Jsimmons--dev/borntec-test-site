import React, { Component } from 'react';
import Header from '../Header/Header'
import './Solutions.css'
import { theme } from '../../constants'
import JumboImage from './JumboImage'


export class Solutions extends Component {

    componentDidMount() {
        if (this.props.location && this.props.location.hash !== "")
            document.querySelector(this.props.location.hash).scrollIntoView()
    }

    render() {
        return (
            <div >
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/stockpad.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Meet our solutions</h1>
                    <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Explore our <strong style={{ color: 'dodgerblue' }}>products</strong> that create our <strong style={{ color: 'dodgerblue' }}>Flight Control</strong> suite</h4>
                </div>
                <div>

                    <JumboImage title={'Cross Check'}
                        id={'crosscheck'}
                        desc={'Compliance and Monitoring System, MiFID II, CFTC and MAR'}
                        list={[
                            ['Automated Trading and DEA Management', 'Monitor messaging velocity in realtime', 'Visualize by exchange, trade session, user, algo ID & more', 'Monitor for rejections and limit band breaches', 'Realtime alerts via email, SMS, Symphony, Slack, etc.'],
                            ['Position Monitoring and Alerting', 'Aggregate working orders and filled positions from all trading systems and exchanges in realtime', 'Group blocks of accounts into custom risk groups', 'Define thresholds for clip size, limit breaches, and many more parameters'],
                            ['Transaction Reporting for MiFID II', 'Automated retrieval of customer trade records', 'Data enrichment and formatting', 'Report validation', 'Secure delivery to regulators']
                        ]}
                        image={'./assets/crosscheck_feature.jpg'} />

                    <JumboImage title={'TraC'}
                        reverse={true}
                        id={'trac'}
                        desc={'Real-Time Trade Blotter Across All Vendors/Exchanges'}
                        list={[
                            ['Cost Effective Terminals for Risk & Compliance', 'TraC is intuitive and easy to use for non-trading personnel'],
                            ['Single Screen, Rapid Access to All Order Flow', 'Navigate one application for worldwide order flow', 'Easily search orders by any field', 'View and cancel orders', 'Export and download order flow detail'],
                            ['Automated Trading and DEA Management', 'Monitor messaging velocity in realtime', 'Visualize by exchange, trade session, user, algo ID & more', 'Monitor for rejections and limit band breaches', 'Realtime alerts via email, SMS, Symphony, Slack, etc.']
                        ]}
                        image={'./assets/crosscheck_feature.jpg'} />

                    <JumboImage title={'CORE'}
                        id={'core'}
                        desc={'Care Order STP Between Clients and Brokers'}
                        listTop={'Client-Broker FIX Routing for Care Orders'}
                        list={[['Client-Broker FIX Routing for Care Orders', 'SaaS deployment', 'Full STP for clients', 'Brokers execute away or via DMA', 'Many OMS’s pre-certified']]}
                        image={'./assets/core_feature.jpg'} />

                    <JumboImage title={'JetConnect'}
                        reverse={true}
                        id={'jetconnect'}
                        desc={'SaaS Real-Time Trade Flow Distribution'}
                        list={[
                            ['Flexibility', 'Production ready in days to weeks', 'Multi-Asset, Multi-Market Trade Flow', 'Easy counterparty connectivity', '30+ API’s plug-and-play'],
                            ['Consolidation', 'Rapid DMA/FIX Integrations with easy normalization and transformation', 'Central hub for all trade flow', 'Trade reporting in flexible formats via email/sftp'],
                        ]}
                        image={'./assets/crosscheck_feature.jpg'} />
                </div>
            </div >
        );
    }
}