import React from 'react'
import { Spin } from 'antd'
import MovieCard from '../movies-search/movie-card/movie-card'
import { useRatedMovies } from '../../shared/hooks/useRatedMovies'
import { Movie } from '../../core/models/movies'

import '../movies-search/movies-search.css'

const MoviesRated = (): JSX.Element => {
  const { movies, isLoading } = useRatedMovies()

  if (movies == null || movies.length === 0) return <h1>No hay películas valoradas</h1>
  return (
    <Spin spinning={Boolean(isLoading)}>
    <section className="movies__list">
      {movies?.map((movie: Movie) => (
        <MovieCard
          id={String(movie.id)}
          key={movie.id}
          image={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          rating={movie.rating}
          onClick={() => {}}
          size="default"
        />
      ))}
    </section>
  </Spin>
  )
}

export default MoviesRated
