
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" style={{display:'flex', justifyContent:'space-around', flexDirection:'column', backgroundImage:this.props.src}}  >
                <div class="container">
                    <h1 style={{flex:1, color:"coral"}}  class="display-4 text-white">{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default Header