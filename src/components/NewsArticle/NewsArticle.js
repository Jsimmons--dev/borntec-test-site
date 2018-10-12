import React, { Component } from 'react';
import * as WPAPI from 'wpapi'

class NewsArticle extends Component {
    

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
        console.log(this.props.match.params.id, this.state.posts)
        let post = {__html:''};
        if(this.state.posts !== undefined){
            this.state.posts.forEach(p => {
                console.log(p)
                if(`${p.id}` === this.props.match.params.id){
                    post = {__html:p.content.rendered}
                }
            })
        }
        console.log(post)
        return (
            <div dangerouslySetInnerHTML={post}>
            </div >

        );
    }
}

export default NewsArticle