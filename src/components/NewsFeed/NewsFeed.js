import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import { Link } from 'react-router-dom';

class NewsFeed extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.progressRef = React.createRef()
        this.subscribeRef = React.createRef()
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'https://borntec.com/wp-json' });
        wp.posts().perPage(5).categories([11]).then((data) => {
            this.setState((state, props) => ({ posts: data }))
            window.hbspt.forms.create({
                portalId: "4754439",
                formId: "827ef2b4-b36e-4c71-b627-f87c111d1839",
                target: '#news-subscribe'
            });
        }).catch(function (err) {
        });
        
    }

    componentDidUpdate() {
        if (this.state.posts) {
            this.progressRef.current.style.display = 'none'
            this.subscribeRef.current.style.display = 'block'
        }
    }

    render() {
        let posts = this.state.posts && this.state.posts.map((d, i) => <div style={{ margin: '5px' }} key={i}><Link style={{ color: "white" }} to={`/article/${d.id}`} dangerouslySetInnerHTML={{ __html: `<i class="fas fa-list-alt"></i> <span style='font-size:20px'>${d.title.rendered}</span> <span style='font-size:12px'> ${new Date(d.date).toDateString()}</span> ` }}></Link><hr style={{ width: '100%' }} /></div>)
        return (
            <div>
                <h2 align="center" style={{ color: 'white' }}> STAY <strong style={{ color: 'dodgerblue' }}>UP TO DATE</strong> WITH RECENT <strong style={{ color: 'dodgerblue' }}>NEWS</strong></h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ref={this.progressRef} >
                    <br />
                    <progress className="pure-material-progress-circular" />
                    <span style={{ fontSize: '30px' }}>Please Wait...</span>
                </div>
                <div className='news-container' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <br />
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ listStyleType: "none" }}>
                                {posts}
                            </div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <br />
                        <div style={{display: 'none'}} ref={this.subscribeRef} id='news-subscribe'>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default NewsFeed