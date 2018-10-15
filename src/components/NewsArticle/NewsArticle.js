import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import './NewsArticle.css'
import ReactDOM from 'react-dom'
import { theme } from '../../constants'

class NewsArticle extends Component {


    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
        this.progressRef = React.createRef()
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts().id(this.props.match.params.id).then((data) => {
            this.setState((state, props) => ({ post: data, media: this.state.media, tags: this.state.tags }))
            if (this.state.featured_media) {
                wp.media().id(this.state.post.featured_media).then((media) => {
                    this.setState((state, props) => ({ post: this.state.post, media, tags: this.state.tags }))
                }).catch(function (err) {
                    console.log(err)
                });
            }

            if (this.state.post.tags) {
                this.state.post.tags.forEach(tagId => {
                    wp.tags().id(tagId).then((tag) => {
                        this.setState((state, props) => ({ post: this.state.post, media: this.state.media, tags: Array(...this.state.tags, tag.slug)}))
                    }).catch(function (err) {
                        console.log(err)
                    });
                })
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    componentDidUpdate() {
        if (this.state.post) {
            var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
            this.progressRef.current.style.display = 'none'
        }
        let node = ReactDOM.findDOMNode(this)
        if (node.querySelector('img') !== null) {
            node.querySelector('img').style.float = 'left'
            node.querySelector('img').style.margin = '30px'
        }
    }


    render() {

        let post = <span></span>//{ __html: '' };
        if (this.state.post !== undefined) {
            let d = this.state.post
            post = (<div>


                <div className='card-body' style={{ width: 'auto', height: '496px', overflow: 'hidden' }}>
                    <img src={this.state.media ? this.state.media.guid.rendered : '4 black_crop.png'} width="1000px" style={{}}></img>
                </div>
                <p align='right' style={{ padding: '10px', fontSize: '12px', paddingLeft: '1.25rem' }}>{new Date(d.date).toDateString()}</p>
                <br />
                <div style={{ paddingLeft: '1.25rem' }} dangerouslySetInnerHTML={{ __html: `<span style='font-size:30px'>${d.title.rendered}</span>` }}>
                </div>
                <span className='card-body'> {this.state.tags.join(" | ")}</span>
                <div>
                    <div className='card-body' dangerouslySetInnerHTML={{ __html: `${d.content.rendered}` }}>
                    </div>
                </div>
                <br />
                <br />
            </div>
            )

            //`<span style='font-size:30px;display:block;margin-bottom:30px'>${this.state.post.title.rendered}</span>  ${this.state.post.content.rendered}` }
        }
        return (
            <div>
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ref={this.progressRef} >
                    <br />
                    <progress className="pure-material-progress-circular" />
                    <span style={{ fontSize: '30px' }}>Please Wait...</span>
                </div>
                <div className='container'>

                    <div className='' style={{ minHeight: '50vh', margin: '20px', fontSize: '18px' }} >
                        {post}
                    </div >
                </div>
            </div>
        );
    }
}

export default NewsArticle