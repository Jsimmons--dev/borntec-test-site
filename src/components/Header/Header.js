
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid jumbotron-fluid" style={{display:'flex', alignItems:'center', justifyContent:'center', background:this.props.prop1 + ' no-repeat center center'}}  >
                    <h1 style={{color:"OrangeRed", fontFamily: 'Maven Pro'}}  className="display-4 text-white">{this.props.text}</h1>
            </div>
        );
    }
}

export default Header