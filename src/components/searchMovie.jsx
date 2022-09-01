import React from 'react';

const SearchMovie = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Find your movie...'
			></input>
		</div>
	);
};

export default SearchMovie;