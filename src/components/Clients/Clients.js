import React, { Component } from 'react';
import { theme } from '../../constants'
import IconHeader from '../IconHeader/IconHeader'

class Clients extends Component {

    componentDidMount() {
        if (this.props.location && this.props.location.hash !== "")
            document.querySelector(this.props.location.hash).scrollIntoView()
    }

    componentDidUpdate() {
        if (this.props.location && this.props.location.hash !== "")
            document.querySelector(this.props.location.hash).scrollIntoView()
    }

    render() {
        return (
            <div key={this.props.location.hash}>
                <div id='main-page-header' className="container-fluid jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/analog.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">Client Services</h1>
                    <h4 id="supporting-tag" style={{ flexBasis: '100%', marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', fontFamily: 'Maven Pro' }}>Explore how you will <strong style={{ color: 'dodgerblue' }}>advance</strong> from the services <strong style={{ color: 'dodgerblue' }}>BornTec</strong> offers our clients</h4>
                </div>
                <br />
                <div id="hedgefunds" class="container" style={{ color: theme.textColor }}>
                    <br />
                    <br />
                    <br />
                    <h1 class="display-4" style={{ color: "white" }}><strong>Hedge Funds</strong><strong style={{ color: 'DodgerBlue' }}> & CTAs</strong></h1>
                    <IconHeader icon="icon-fixconnectivity" color={theme.primaryColor2} text="FIX Connectivity" />
                    <p className='desc-text lead'>Providing customized FIX connectivity is one of Born Technolgy’s core strengths. Virtually all large trading groups utilize their own variation of FIX, making custom integration capabilities a must.</p>
                    <IconHeader icon="icon-automatedtrading" color={theme.primaryColor2} text="Automated Trading" />
                    <p className='desc-text lead'>Born Technology offers flexible API connectivity via Trading Technologies and other systems to numerous electronic futures exchanges.</p>
                    <IconHeader icon="icon-algorithmdevelopmentservices" color={theme.primaryColor2} text="Algorithm Development Services" />
                    <p className='desc-text lead'>Born offers complete algorithm development services. With many years of experience designing algorithms for the top hedge funds and institutions, our team focuses on both algorithmic execution and arbitrage based algorithms.</p>
                    <IconHeader icon="icon-colocation" color={theme.primaryColor2} text="Colocation" />
                    <p className='desc-text lead'>Born’s technology is located in facilities that set the standard for world-class premium technology colocation.</p>
                    <IconHeader icon="icon-tradingallocation" color={theme.primaryColor2} text="Trading Allocation" />
                    <p className='desc-text lead'>Our execution facilities are set up such that firms can execute and clear trades with the clearer of their choice, thus reducing dependence on a single FCM.</p>
                    <IconHeader icon="icon-noncompetition" color={theme.primaryColor2} text="Non-Competition" />
                    <p className='desc-text lead'>Born Technology does NOT trade and is not in competition with our trading customers.</p>
                </div>
                <br />
                <br />
                <br />


                <div id="banks" class="container">
                    <br />
                    <br />
                    <br />
                    <h1 class="display-4" style={{ color: 'white' }}>Banks, FCM’s, <strong style={{ color: 'dodgerblue' }}>& Broker Dealers</strong></h1>
                    <IconHeader icon="icon-reduceinfrastructurecosts" color={theme.primaryColor2} text="Reduced Infrastructure Costs" />
                    <p className='desc-text lead'>Born allows banking institutions the ability to provide a diverse offering of front end trading platforms without the cost associated with each respective infrastructure requirements.</p>
                    <IconHeader icon="icon-optimizedglobalfootprint" color={theme.primaryColor2} text="Optimized Global Footprint" />
                    <p cclassName='desc-text lead'>Customers leverage Born’s extensive data center infrastructure for co-location and low latency trading needs, as well as increased reliability and uptime.</p>
                    <IconHeader icon="icon-group" color={theme.primaryColor2} text="Synergistic Relationship" />
                    <p className='desc-text lead'>Born’s philosophy is to work with internal IT staff, not replace them. We believe creating a synergistic relationship with internal IT groups provides the best technology infrastructures for the bank and its clients.</p>
                    <IconHeader icon="icon-tradersupportservices" color={theme.primaryColor2} text="Trader Support Service" />
                    <p className='desc-text lead'>Born’s client services teams, operating in Chicago provide 24*7 support coverage for functional and technical services.</p>
                    <IconHeader icon="icon-customizedsolutions" color={theme.primaryColor2} text="Customized Solutions" />
                    <p className='desc-text lead'>Delivered on time and under budget, Born has the expertise and relationships necessary to deliver complex solutions rapidly and cost-effectively.</p>
                </div>
                <br />
                <br />
                <br />

                <div id="proptrading" class='container'>
                    <br />
                    <br />
                    <br />
                    <h1 class='display-4' style={{ color: 'white' }}>Proprietary Trading <strong style={{ color: 'dodgerblue' }}>Groups</strong></h1>
                    <IconHeader icon="icon-lowlatencytrading" color={theme.primaryColor2} text="Low Latency Trading" />
                    <p className='desc-text lead'>Born’s state of the art ultra low latency infrastructure currently provides direct market access to dozens of futures, fixed income and FX exchanges in North America, South America, Europe and Asia</p>
                    <IconHeader icon="icon-globalcolocation" color={theme.primaryColor2} text="Global Colocation" />
                    <p className='desc-text lead'>Over the past decade Born has invested significant resources to build out co-location facilities with the closest proximity to any given exchange matching engine, in most cases located in the same building as the exchange matching engine. Born currently has co-location facilities for the major exchanges in North America, South America, Europe and Asia.</p>
                    <IconHeader icon="icon-fixconnectivity" color={theme.primaryColor2} text="Microwave Connectivity" />
                    <p className='desc-text lead'>Born’s exclusive microwave connection to the CME data center in Aurora uses state-of-the-art RF technology to provide the industry with the lowest possible latency.</p>
                    <IconHeader icon="icon-networkinsfrastructure" color={theme.primaryColor2} text="Network Infrastructure" />
                    <p className='desc-text lead'>Born is a global partner with the leading data transport / telecommunication provider. Born provides the lowest latency connection between data centers and exchanges.</p>
                    <IconHeader icon="icon-hosting" color={theme.primaryColor2} text="Server Hosting" />
                    <p className='desc-text lead'>Born server hosting services allow proprietary trading groups to utilize our infrastructure and reduce cost and maintenance associated with data center contractual agreements.</p>
                    <IconHeader icon="icon-noncompetition" color={theme.primaryColor2} text="Non-Competition" />
                    <p className='desc-text lead'>Born Technology does NOT trade and is not in competition with our trading customers.</p>




                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Clients