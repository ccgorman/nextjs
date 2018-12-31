import React from 'react';
import Link from 'next/link';

const errorPage = () => (
	<div>
		<h1>OOps, something went wrong ok</h1>
		<p>Go to <Link href="/"><a>Go Back</a></Link></p>
	</div>
);

export default errorPage;