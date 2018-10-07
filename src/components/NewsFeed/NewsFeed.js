import React, { Component } from 'react';
import * as WPAPI from 'wpapi'
import { Link } from 'react-router-dom';

class NewsFeed extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount() {
        var wp = new WPAPI({ endpoint: 'http://borntec.com/wp-json' });
        wp.posts().then((data) => {
            this.setState((state, props) =>  ({ posts:data }))
        }).catch(function (err) {
            console.log(err)
        });
    }


    render() {
    
        console.log(this.state)
    let posts = this.state.posts && this.state.posts.map((d, i) => <li key={i}><Link to={`/article/${d.id}`}>{d.title.rendered}</Link></li>)
        return (
            <div>
                <h1 align='center' style={{color:'white'}}> STAY <strong style={{color:'dodgerblue'}}>UP TO DATE</strong> WITH RECENT <strong style={{color:'dodgerblue'}}>NEWS</strong></h1>
                <br/>
                <br/>
                <ul style={{color:'white'}}>
                    {posts}
                </ul>
            </div >
        );
    }
}

export default NewsFeed