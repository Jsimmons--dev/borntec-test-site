import React, { Component } from 'react';
import * as d3 from 'd3'
import "./MiniProductPreview.css"

class SolutionPreview extends Component {
    render() {
        return (
            <div className="card" style={{ border:'none', backgroundColor: 'rgb(30, 30, 30)', width: '18rem', margin: '10px', display: 'inline-block' }}>
                <div className="miniproductpreview" style={{ backgroundColor:this.props.bgColor || 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '25px', height: '120px', width: '120px', borderRadius: '50%' }}>
                    <i style={{ color:this.props.color, textShadow: `3px 3px 1px ${d3.color(this.props.bgColor || 'black').darker(.5).toString()}`, fontSize: this.props.size || '100px' }} className={this.props.icon}></i>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-light" align="center">{this.props.name}</h5>
                    <p className="card-text text-light" align="center">{this.props.desc}</p>
                </div>
                <br />
            </div >
        );
    }
}

export default SolutionPreview