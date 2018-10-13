import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import './NewsArticle.css'
import ReactDOM from 'react-dom'

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
        let node = ReactDOM.findDOMNode(this)
        if (node.querySelector('img') !== null) {
            node.querySelector('img').style.float = 'left'
            node.querySelector('img').style.margin = '30px'
        }
    }


    render() {
        let post = { __html: '' };
        if (this.state.posts !== undefined) {
            this.state.posts.forEach(p => {
                if (`${p.id}` === this.props.match.params.id) {
                    post = { __html: `<span style='font-size:30px;display:block;margin-bottom:30px'>${p.title.rendered}</span>  ${p.content.rendered}` }
                }
            })
        }
        return (
            <div>
                <div className="container-fluid jumbotron-fluid news-article-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/comms.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">BornTec <strong style={{color:'dodgerblue'}}>News</strong></h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ref={this.progressRef} >
                    <br />
                    <progress className="pure-material-progress-circular" />
                    <span style={{ fontSize: '30px' }}>Please Wait...</span>
                </div>
                <div style={{ minHeight: '50vh', margin: '20px', fontSize: '18px' }} dangerouslySetInnerHTML={post}>
                </div >
            </div>
        );
    }
}

export default NewsArticle