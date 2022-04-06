import React from 'react';
import PropTypes from 'prop-types';

function HeaderComponent(text = '') {
	return (
		<header>
			<div className="container">
				<h2>Feedback UI</h2>
			</div>
		</header>
	);
}

HeaderComponent.propTypes = {
	text: PropTypes.string,
};

export default HeaderComponent;
