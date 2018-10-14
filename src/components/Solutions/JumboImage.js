import React, { Component } from 'react';
import { theme } from '../../constants'

class JumboImage extends Component {

    render() {
        console.log('reverse?', this.props.reverse, 'container ' + (this.props.reverse === true ? 'jumbo-image-reverse' : 'jumbo-image'))
        return (
            <div id={this.props.id} style={{ backgroundColor: "rgb(30, 30, 30" }} class="jumbotron jumbotron-fluid">
                <div align='center' class="container">
                
                    <h1 class="display-4" style={{ color: this.props.color }}>{this.props.title}</h1>
                    <p className='desc-text'>{this.props.desc}</p>
                </div>
                <hr />
                <div className={(this.props.reverse === true ? 'jumbo-image-reverse container-fluid' : 'jumbo-image container')} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <div style={{ flex: '1', padding: '20px' }}>
                        <div>

                            <ul style={{listStylePosition: 'inside'}}>
                                {
                                    this.props.list.map(list => {
                                        return list.map((li, i) => i === 0 ? (<h5 style={{ color: this.props.color }}><br/><br/>{li}</h5>) :
                                            (<li>{li}</li>))
                                    })

                                }
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: '1', minHeight: '490px', backgroundImage: `url("${this.props.image}")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                </div>
            </div>
        )
    }
}

export default JumboImage