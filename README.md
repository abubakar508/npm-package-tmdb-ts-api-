

# TMDB TypeScript NPM package and NodeJS wrapper for NextJS and React typescript applications

TMDB TypeScript API is a Node.js wrapper and package that provides a TypeScript-friendly interface for interacting with The Movie Database (TMDB) API. It simplifies the process of making requests to TMDB API endpoints and handling responses, allowing you to quickly integrate TMDB data into your TypeScript projects.

## Installation

You can install TMDB TypeScript API via npm or yarn:

```bash
npm install ts-tmdb

# or

yarn add ts-tmdb
```


## Usage

To use TMDB TypeScript API in your TypeScript project, first import the TMDBAPI class and create an instance by providing your TMDB API key:

This should be in a .ts file.

```bash
import TMDBAPI from 'ts-tmdb';

const apiKey = 'YOUR_TMDB_API_KEY';
const tmdbApi = new TMDBAPI(apiKey);

```

Once you have an instance of TMDBAPI, you can use its methods to interact with TMDB API endpoints. Here are some examples:


```bash

// Search movies
const searchResults = await tmdbApi.searchMovies('Avengers');

// Get movie details
const movieDetails = await tmdbApi.getMovieDetails('12345');

// Get movie credits
const movieCredits = await tmdbApi.getMovieCredits('12345');

// Get movie recommendations
const movieRecommendations = await tmdbApi.getMovieRecommendations('12345');

// Get popular movies
const popularMovies = await tmdbApi.getPopularMovies();

```
```bash

    TMDBAPI(apiKey: string): Creates a new instance of TMDBAPI with the provided TMDB API key.
    searchMovies(query: string): Promise<any>: Searches for movies based on the provided query string.
    getMovieDetails(movieId: string): Promise<any>: Gets details for a specific movie identified by its TMDB ID.
    getMovieCredits(movieId: string): Promise<any>: Gets credits for a specific movie identified by its TMDB ID.
    getMovieRecommendations(movieId: string): Promise<any>: Gets recommendations for a specific movie identified by its TMDB ID.
    getPopularMovies(): Promise<any>: Gets a list of popular movies.

```

# THIS IS AN EXAMPLE OF ITS USE CASE.
## CHECH THE LINK TO THE NPM REGISTRY ON THE REPO DESCRIPTION

```bash
"use client";
import { useEffect, useState } from 'react';
import TMDBAPI from 'ts-tmdb';

const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your actual TMDB API key(Keep API key safe by creating an environment file.).

// process.env.TMDB_API_KEY (replace YOUR_TMDB_API_KEY with this)

interface Movie {
  id: number;
  title: string;
}

export default function Home(): JSX.Element {

//set the usestate of the popular movies

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        // Create an instance of TMDBAPI with your API key
        const tmdbApi = new TMDBAPI(apiKey);
  
        // Fetch popular movies
        const data = await tmdbApi.getPopularMovies();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on GitHub.
