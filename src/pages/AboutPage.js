import React from 'react';
import Card from '../components/shared/card';

import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About this project</h1>
				<p>Leave some feedback! built on react</p>
				<Link to="/">Home</Link>
			</div>
		</Card>
	);
}

export default AboutPage;
