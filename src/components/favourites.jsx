import React from "react";
import { useState, useEffect } from "react";


const Favourite = () => {
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const removeFavouriteMovie = (movie) => {
	// localStorage.removeItem(movie);
	// let items =JSON.parse(localStorage.getItem("react-movie-app-favourites"));
    // items = items.filter((item) => item.imdbID !== movie.imdbID);
    // localStorage.setItem(movie, JSON.stringify(items));
    // if (items.length === 0) {
    //   localStorage.removeItem(movie);
    // }
	console.log(movie.imdbID);
  }

  return (
    <>
      <h1 className="text-light">My Favourites {items}</h1>

      <div className="row">
        {favourites.map((movie, index) => (
          <div className="col-3 mt-5">
            <div className="row" onClick={() => removeFavouriteMovie(movie)}>
              <img
                src={movie.Poster}
                style={{ width: "220px", height: "300px", borderRadius: "10%" }}
                alt="movie"
              />
			  
              <span className="d-block mt-2 text-light">Title: {movie.Title}</span>
              <span className="d-block text-info">Year: {movie.Year}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
