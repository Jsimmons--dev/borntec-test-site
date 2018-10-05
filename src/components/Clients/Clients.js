import React, { Component } from 'react';
import { theme } from '../../constants'
import IconHeader from '../IconHeader/IconHeader'

class Clients extends Component {
    render() {
        return (
            <div>
                <div class="container" style={{ color: theme.textColor }}>
                    <h1 class="display-4" style={{ color: theme.primaryColor2 }}><strong>Hedge Funds/</strong> CTAs</h1>
                    <IconHeader icon="icon-fixconnectivity" color={theme.primaryColor2} text="FIX Connectivity" />
                    <p class="lead">Providing customized FIX connectivity is one of Born Technolgy’s core strengths. Virtually all large trading groups utilize their own variation of FIX, making custom integration capabilities a must.</p>
                    <IconHeader icon="icon-automatedtrading" color={theme.primaryColor2} text="Automated Trading" />
                    <p class="lead">Born Technology offers flexible API connectivity via Trading Technologies and other systems to numerous electronic futures exchanges.</p>
                    <h5 style={{ color: theme.primaryColor2 }}>	Algorithm Development Services</h5>
                    <p class="lead">Born offers complete algorithm development services. With many years of experience designing algorithms for the top hedge funds and institutions, our team focuses on both algorithmic execution and arbitrage based algorithms.</p>
                    <h5 style={{ color: theme.primaryColor2 }}>Colocation</h5>
                    <p class="lead">Born’s technology is located in facilities that set the standard for world-class premium technology colocation.</p>
                    <h5 style={{ color: theme.primaryColor2 }}>Trading Allocation</h5>
                    <p class="lead">Our execution facilities are set up such that firms can execute and clear trades with the clearer of their choice, thus reducing dependence on a single FCM.</p>
                    <h5 style={{ color: theme.primaryColor2 }}>Non-Competition</h5>
                    <p class="lead">Born Technology does NOT trade and is not in competition with our trading customers.</p>
                </div>


                <div class="container">
                    <h1 class="display-4" style={{ color: theme.primaryColor1 }}>Banks, FCM’s, & Broker Dealers</h1>
                    <IconHeader icon="icon-reduceinfrastructurecosts" color={theme.primaryColor1} text="Reduced Infrastructure Costs" />
                    <p class="lead">Born allows banking institutions the ability to provide a diverse offering of front end trading platforms without the cost associated with each respective infrastructure requirements.</p>
                    <h5 style={{ color: theme.primaryColor1 }}>Optimized Global Footprint</h5>
                    <p class="lead">Customers leverage Born’s extensive data center infrastructure for co-location and low latency trading needs, as well as increased reliability and uptime.</p>
                    <h5 style={{ color: theme.primaryColor1 }}>Synergistic Relationship</h5>
                    <p class="lead">Born’s philosophy is to work with internal IT staff, not replace them. We believe creating a synergistic relationship with internal IT groups provides the best technology infrastructures for the bank and its clients.</p>
                    <h5 style={{ color: theme.primaryColor1 }}>Trader Support Services</h5>
                    <p class="lead">Born’s client services teams, operating in Chicago provide 24*7 support coverage for functional and technical services.</p>
                    <h5 style={{ color: theme.primaryColor1 }}>Customized Solutions</h5>
                    <p class="lead">Delivered on time and under budget, Born has the expertise and relationships necessary to deliver complex solutions rapidly and cost-effectively.</p>
                </div>

                <div>


                </div>
            </div>
        );
    }
}

export default Clients