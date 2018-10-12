import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import { Link } from 'react-router-dom';

class NewsFeed extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts().then((data) => {
            this.setState((state, props) => ({ posts: data }))
        }).catch(function (err) {
            console.log(err)
        });
    }

    render() {
        let posts = this.state.posts && this.state.posts.slice(0,5).map((d, i) => <li style={{margin:'5px'}} key={i}><Link style={{ color: "white" }} to={`/article/${d.id}`} dangerouslySetInnerHTML={{__html:`<i class="fas fa-list-alt"></i> <span style='font-size:20px'>${d.title.rendered}</span> <span style='font-size:12px'> ${new Date(d.date).toDateString()}</span> `}}></Link><hr style={{width:'100%'}}/></li>)
        return (
            <div>
                <h1 align="center" style={{ color: 'white' }}> STAY <strong style={{ color: 'dodgerblue' }}>UP TO DATE</strong> WITH RECENT <strong style={{ color: 'dodgerblue' }}>NEWS</strong></h1>
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <ul style={{ listStyleType: "none" }}>
                        {posts}
                    </ul>
                </div>

            </div >
        );
    }
}

export default NewsFeed