import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
	<div>
		<h1>The Auth Page of {props.appName}</h1>
		<User name="Chris" age="45" />
	</div>
);

authIndexPage.getInitialProps = (contect) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({appName: 'Super App Auth'})
		}, 1000);
	});
	return promise;
}

export default authIndexPage;