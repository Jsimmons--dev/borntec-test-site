import React, { Component } from 'react';
import './Solutions.css'
import { theme } from '../../constants'
import JumboImage from './JumboImage'


export class Solutions extends Component {

    componentDidMount() {
        if (this.props.location && this.props.location.hash !== "") {
            //this.props.history.go(0)
            document.querySelector(this.props.location.hash).scrollIntoView()
        }
    }

    render() {
        return (
            <div >
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/stockpad.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Explore our <strong>solutions </strong></h1>
                    <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}><strong>CrossCheck, TraC, CORE</strong> and <strong>Jet Connect</strong> provide our clients with compliance and monitoring tools, real-time data analytics capabilities as well as direct market access and care orders between clients and brokers. </h4>
                </div>
                <div>

                    <JumboImage title={'Compliance and Monitoring'}
                        id={'crosscheck'}
                        desc={'CrossCheck™'}
                        color={theme.primaryColor1}
                        className={'desc-text lead'}
                        list={[
                            ['Automated Trading and DEA Management', 'Monitor messaging velocity in realtime', 'Visualize by exchange, trade session, user, algo ID & more', 'Monitor for rejections and limit band breaches', 'Realtime alerts via email, SMS, Symphony, Slack, etc.'],
                            ['Position Monitoring and Alerting', 'Aggregate working orders and filled positions from all trading systems and exchanges in realtime', 'Group blocks of accounts into custom risk groups', 'Define thresholds for clip size, limit breaches, and many more parameters'],
                            ['Transaction Reporting for MiFID II', 'Automated retrieval of customer trade records', 'Data enrichment and formatting', 'Report validation', 'Secure delivery to regulators']
                        ]}
                        image={'./assets/crosscheck2.jpg'} />
                    <hr style={{ width: '80%' }} />

                    <JumboImage title={'Trade Flow Distribution'}
                        reverse={true}
                        id={'jetconnect'}
                        color={theme.primaryColor1}
                        desc={'JetConnect™'}
                        list={[
                            ['Flexibility', 'Production ready in days to weeks', 'Multi-Asset, Multi-Market Trade Flow', 'Easy counterparty connectivity', '30+ API’s plug-and-play'],
                            ['Consolidation', 'Rapid DMA/FIX Integrations with easy normalization and transformation', 'Central hub for all trade flow', 'Trade reporting in flexible formats via email/sftp'],
                        ]}
                        image={'./assets/JCfeature_sm.jpg'} />
                    <JumboImage title={'Global Order Book'}
                        reverse={true}
                        id={'trac'}
                        color={theme.primaryColor1}
                        className={'desc-text lead'}
                        desc={'TraC™'}
                        list={[
                            ['Cost Effective Terminals for Risk & Compliance', 'TraC is intuitive and easy to use for non-trading personnel'],
                            ['Single Screen, Rapid Access to All Order Flow', 'Navigate one application for worldwide order flow', 'Easily search orders by any field', 'View and cancel orders', 'Export and download order flow detail'],
                            ['Automated Trading and DEA Management', 'Monitor messaging velocity in realtime', 'Visualize by exchange, trade session, user, algo ID & more', 'Monitor for rejections and limit band breaches', 'Realtime alerts via email, SMS, Symphony, Slack, etc.']
                        ]}
                        image={'./assets/tracfeature.jpg'} />
                    <hr style={{ width: '80%' }} />

                    <JumboImage title={'Care Orders'}
                        id={'core'}
                        color={theme.primaryColor1}
                        desc={'CORE™'}
                        listTop={'Client-Broker FIX Routing for Care Orders'}
                        list={[['Client-Broker FIX Routing for Care Orders', 'SaaS deployment', 'Full STP for clients', 'Brokers execute away or via DMA', 'Many OMS’s pre-certified']]}
                        image={'./assets/core_feature.jpg'} />
                    <hr style={{ width: '80%' }} />


                </div>
            </div >
        );
    }
}