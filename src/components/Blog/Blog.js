import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import { Link } from 'react-router-dom';
import { theme } from '../../constants'
import './Blog.css'

class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.progressRef = React.createRef()
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts()
        //is this going to work with more than 10 cat 113s? may need to implement paging
            .categories([113])
            .then((data) => {
                this.setState((state, props) => ({ tags: this.state.tags, posts: data }))
            }).catch(function (err) {
            });
        //will this work with more than 100 tags? may need to implement paging or more specific tag getting
        wp.tags().perPage(100)
            .then((data) => {
                let tags = {}
                data.forEach(tag => tags[tag.id] = tag.slug)
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
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        let posts = this.state.posts && this.state.posts.map((d, i) => {
            if (d.featured_media) {
                wp.media().id(d.featured_media)
                    .then((data) => {
                        this.setState(Object.assign({}, this.state, { ["media" + '_' + d.featured_media]: data.guid.rendered }))
                    }).catch(function (err) {
                    });
            }

            return (<div className='card' style={{ background: theme.background, border: 'none', width: '520px', margin: '5px' }} key={i}>
                <div className='card-body blog-height' style={{ width: 'auto', overflow: 'hidden' }}>
                    <img className='blog-width' src={this.state["media"+"_"+d.featured_media] || '4 black_crop.png'} style={{}}></img>
                </div>
                <p align='right' style={{ padding: '10px', fontSize: '12px', paddingLeft: '1.25rem' }}>{new Date(d.date).toDateString()}</p>
                <br />
                <div style={{ paddingLeft: '1.25rem' }} dangerouslySetInnerHTML={{ __html: `<span style='font-size:30px'>${d.title.rendered}</span>` }}>
                </div>
                <span className='card-body'> {d.tags.map(d => this.state.tags ? this.state.tags[d] : '').join(" | ")}</span>
                <div>
                    <div className='card-body' dangerouslySetInnerHTML={{ __html: `${d.excerpt.rendered}` }}>
                    </div>
                    <Link className='card-body' to={`/article/${d.id}`}><button style={{ cursor: 'pointer', padding: '10px 14px', background: 'inherit', border: '2px solid ' + theme.primaryColor2, color: theme.textColor }} className='card-body'>Read more</button></Link>
                </div>
                <br />
                <br />
            </div >)
        })

        return (
            <div>
                <br />
                <br />
                <br />
                <h1 style={{ fontFamily: 'Maven Pro' }} className="display-3 container">BornTec <strong style={{ color: 'dodgerblue' }}>Blog</strong></h1>
                <p style={{ fontFamily: 'Maven Pro' }} className="h5 container">Our experts offer their best advice and insights to keep you up to date with what is happening at BornTec</p>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '100%' }}>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex' }} ref={this.progressRef} >
                                <br />
                                <progress className="pure-material-progress-circular" />
                                <span style={{ fontSize: '30px' }}>Please Wait...</span>
                            </div>
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