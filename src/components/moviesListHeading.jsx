import React from 'react';

const MoviesListHeading = (props) => {
	return (
		<div className='col'>
			<h1 className='text-light'>{props.heading}</h1>
		</div>
	);
};

export default MoviesListHeading;