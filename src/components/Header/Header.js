
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid jumbotron-fluid" style={{display:'flex', justifyContent:'space-around', flexDirection:'column', backgroundImage:this.props.src}}  >
                <div className="container">
                    <h1 style={{flex:1}}  className="display-4 text-white">{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default Header