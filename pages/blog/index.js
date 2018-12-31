import React, { Component } from 'react';
import Router from 'next/router';

import axios from '../../axios';

class Blog extends Component {
    state = {
        loadedPost: null
    }

    static getInitialProps({id}) {
		return {id}
	}

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
    	const id = this.props.url.query.query;
        if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== id) ) {
            axios.get( '/cakes/' + id )
                .then( response => {
                    this.setState( { loadedPost: response.data } );
                } );
        }
    }

    returnHandler = ( ) => {
        Router.push( '/' );
    }

    render () {
        let blog = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        if ( this.state.loadedPost ) {
            blog = (
                <div>
                	<style jsx>{`
		            	div {
						    width: 80%;
						    margin: 20px auto;
						    border: 1px solid #eee;
						    box-shadow: 0 2px 3px #ccc;
						    text-align: center;
						}

						div a {
						    cursor: pointer;
						}

						div a:hover {
						    color: #fa923f;
						}
					`}</style>
                    <h1>{this.state.loadedPost.name}</h1>
                    <p><img src={this.state.loadedPost.imageUrl} alt={this.state.loadedPost.name} /></p>
                    <p>{this.state.loadedPost.comment}</p>
                    <p><a onClick={this.returnHandler}>return to list</a></p>
                </div>

            );
        }
        return blog;
    }
}

export default Blog;
