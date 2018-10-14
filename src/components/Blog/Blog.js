import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import { Link } from 'react-router-dom';
import { theme } from '../../constants'

class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.progressRef = React.createRef()
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts().perPage(10)
            //.categories([113])
            .then((data) => {
                this.setState((state, props) => ({ tags:this.state.tags, posts: data }))
            }).catch(function (err) {
            });
        wp.tags().perPage(100)
            .then((data) => {
                let tags = {}
                data.forEach(tag => tags[tag.id] = tag.slug)
                console.log(tags)
                this.setState((state, props) => ({ tags, posts: this.state.posts }))
            }).catch(function (err) {
            });
    }

    componentDidUpdate() {
        if (this.state.posts) {
            this.progressRef.current.style.display = 'none'
        }
    }

    render() {
        console.log(this.state)
        let posts = this.state.posts && this.state.posts.map((d, i) =>
            <div className='card bg-dark' style={{ width: '500px', margin: '5px' }} key={i}>
                <div className='card-body' style={{ width: '100%', height: '196px' }}></div>
                <p className='card-body' style={{ fontSize: '12px' }}>{new Date(d.date).toDateString()}</p>
                <span className='card-body'>{d.tags.map(d => this.state.tags[d]).join(" | ")}</span>
                <div className='card-body' dangerouslySetInnerHTML={{ __html: `<span style='font-size:30px'>${d.title.rendered}</span>` }}>
                </div>
                <div>
                    <div className='card-body' dangerouslySetInnerHTML={{ __html: `${d.excerpt.rendered}` }}>
                    </div>
                    <Link className='card-body' to={`/article/${d.id}`}><span style={{ color: theme.primaryColor2 }} className='card-body'>Read More...</span></Link>
                </div>
            </div >)

        return (
            <div>
                <div className="container-fluid jumbotron-fluid news-article-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', 'alignContent': 'center', background: 'url(./assets/comms.jpg) no-repeat center center', backgroundSize: 'cover' }}  >
                    <h1 id="main-tag" style={{ fontFamily: 'Maven Pro' }} className="display-5">BornTec <strong style={{ color: 'dodgerblue' }}>Blog</strong></h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '100%' }}>
                        <br />
                        <br />
                        <div style={{ display: 'flex', }} ref={this.progressRef} >
                            <br />
                            <progress className="pure-material-progress-circular" />
                            <span style={{ fontSize: '30px' }}>Please Wait...</span>
                        </div>
                        <div className='container' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            {posts}
                        </div>
                        <br />
                        <br />
                    </div>
                </div >
            </div>
        );
    }
}

export default Blog