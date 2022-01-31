import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // for regulat API 
      // const url = 'https://swapi.dev/api/films/' ; 
      // const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error('Something went wrong!');
      // }

      // const data = await response.json();

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // ---------------------------------------------------------
      // for my firebase App 
      const firebaseURl = 'https://max-react-movie-default-rtdb.firebaseio.com/movies.json' ; 
      const fireResponse = await fetch(firebaseURl) ; 
      const firebaseData = await  fireResponse.json() ; 
      const firbaseMovies = [] ; 
      for(const key in firebaseData){
        firbaseMovies.push({
          id: key , 
          title: firebaseData[key].title , 
          openingText: firebaseData[key].openingText , 
          releaseDate: firebaseData[key].releaseDate
        })
      }

      setMovies(firbaseMovies);
      // setMovies(transformedMovies)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function  addMovieHandler (movie) {
    const response = await fetch('https://max-react-movie-default-rtdb.firebaseio.com/movies.json' , {
      method:'POST' , 
      body: JSON.stringify(movie) , 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
