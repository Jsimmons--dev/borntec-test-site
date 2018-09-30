import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SolutionPreview from '../MiniProductPreview'

class CrossCheckPreview extends Component {
    render() {
        return (
            <SolutionPreview color="coral" name="Cross Check" desc="Compliance and Monitoring System, MiFID II, CFTC and MAR" icon="fas fa-arrow-right" />
        );
    }
}
export default CrossCheckPreview