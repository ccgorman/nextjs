import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import axios from '../axios';

import Blog from '../components/Blog';

class IndexPage extends Component {
	/*
	static async getInitialProps(context) {
		//could do an api call to get data from the database
		//use await keyword to awaite a promise
		//set up props to use in the app before it renders
		return {appName: 'Super App'};
	}

	or you can do this
	

	static getInitialProps(context) {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({appName: 'Super App 1'})
			}, 1000);
		});
		return promise;
	}


	render() {
		return (
			<div>
				<h1>The Main Page of {this.props.appName}?</h1>
				<p>Go to this link here <Link href="/auth"><a>Auth</a></Link></p>
				<button onClick={() => Router.push('/auth') }>Go to Auth</button>
			</div>
		);
	}
	*/
	state = {
        blogs: [],
        error: false
    }

    componentDidMount () {
        axios.get( '/cakes' )
            .then(
            	response => {
                	this.setState({blogs: response.data});
           		}
           	)
            .catch(
            	error => {
                	this.setState({error: true});
            	}
            );
    }

    blogSelectedHandler = ( id ) => {
        Router.push( '/blog/?query=' + id );
    }

    render() {
    	let blogs = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
        	blogs = this.state.blogs.map(blog => {
        		//just some basic validation there are a lot of bad URLs to images
        		if (blog.imageUrl.endsWith("jpg")) {
	        		return <Blog 
                        key={blog.id}
	                    name={blog.name} 
	                    imageUrl={blog.imageUrl}
                        clicked={() => this.blogSelectedHandler(blog.id)} />;
                }
                return null;
            });
        }
		
		return (
            <div>
            	<style jsx>{`
	            	section {
					    display: flex;
					    flex-flow: row wrap;
					    justify-content: center;
					    width: 80%;
					    margin: auto;
					}
					nav ul {
					    list-style: none;
					    margin: 0;
					    padding: 0;
					    width: 100%;
					    text-align: center;
					}
					nav li {
					    display: inline-block;
					    margin: 20px;
					}
					nav a {
					    text-decoration: none;
					    color: black;
					}
					nav a:hover,
					nav a:active,
					nav a.active {
					    color: #fa923f;
					}
				`}</style>
				<header>
                    <nav>
                        <ul>
                            <li><Link href="/"><a>Blogs</a></Link></li>
                            <li><Link href="/auth"><a>Auth</a></Link></li>
                            <li><Link href='/upload-blog'><a>Upload Blog</a></Link></li>
                        </ul>
                    </nav>
                </header>
    			<section>
    				{blogs}
    			</section>
            </div>
		);
    }
}

export default IndexPage;