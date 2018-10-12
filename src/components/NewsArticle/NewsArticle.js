import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import './NewsArticle.css'

class NewsArticle extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.progressRef = React.createRef()
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts().then((data) => {
            this.setState((state, props) => ({ posts: data }))
        }).catch(function (err) {
            console.log(err)
        });
    }

    componentDidUpdate() {
        if (this.state.posts) {
            this.progressRef.current.style.display = 'none'
        }
    }


    render() {
        let post = { __html: '' };
        if (this.state.posts !== undefined) {
            this.state.posts.forEach(p => {
                if (`${p.id}` === this.props.match.params.id) {
                    post = { __html: p.content.rendered }
                }
            })
        }
        return (
            <div>
                <div className="container-fluid jumbotron-fluid news-article-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/comms.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">BornTec News</h1>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} ref={this.progressRef} >
                    <br />
                    <progress className="pure-material-progress-circular" />
                    <span style={{fontSize:'30px'}}>Please Wait...</span>
                </div>
                <div style={{height:'50vh'}} dangerouslySetInnerHTML={post}>
                </div >
            </div>
        );
    }
}

export default NewsArticle