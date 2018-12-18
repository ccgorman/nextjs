import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
	/*
	static async getInitialProps(context) {
		//could do an api call to get data from the database
		//use await keyword to awaite a promise
		//set up props to use in the app before it renders
		return {appName: 'Super App'};
	}

	or you can do this
	*/

	static getInitialProps(context) {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({appName: 'Super App'})
			}, 1000);
		});
		return promise;
	}


	render() {
		return (
			<div>
				<h1>The Main Page of {this.props.appName}</h1>
				<p>Go to <Link href="/auth"><a>Auth</a></Link></p>
				<button onClick={() => Router.push('/auth') }>Go to Auth</button>
			</div>
		);
	}
}

export default IndexPage;