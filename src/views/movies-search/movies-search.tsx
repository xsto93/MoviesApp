import React from 'react'
import { useMovies } from '../../shared/hooks/useMovies'
import MovieCard from './movie-card/movie-card'

import './movies-search.css'

const MoviesSearch = (): JSX.Element => {
  const { movies } = useMovies('a')

  return (
    <section className='movies__list '>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          image={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
        />
      ))}
    </section>
  )
}

export default MoviesSearch
