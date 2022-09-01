import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './moviesList';
import SearchMovie from './searchMovie';
import MoviesListHeading from './moviesListHeading';
import AddFavourite from './addToFavourites';
import RemoveFavourites from './removeFavourites';


const Movie = () => {
    const [movies, setMovies] = useState([]);

    const [searchValue, setSearchValue] = useState('');

	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
		setFavourites(movieFavourites);
	}, [searchValue]);

	// useEffect(() => {
	// 	const movieFavourites = JSON.parse(
	// 		localStorage.getItem('react-movie-app-favourites')
	// 	);

	// 	setFavourites(movieFavourites);
	// }, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MoviesListHeading heading='Movies' />
				<SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
			<MovieList
					movies={movies}
					favouriteComponent={AddFavourite}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>

			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MoviesListHeading heading='Favourites' />
			</div>
			<div className='row'>
			<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default Movie;