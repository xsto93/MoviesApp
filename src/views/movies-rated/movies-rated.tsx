import React from 'react'
import { Spin } from 'antd'
import { useRatedMovies } from '../../shared/hooks/useRatedMovies'

import MoviesList from '../movies-list/movies-list'

const MoviesRated = (): JSX.Element => {
  const { movies, isLoading } = useRatedMovies()

  if (movies == null || movies.length === 0) { return <h1>No hay películas valoradas</h1> }
  return (
    <Spin spinning={Boolean(isLoading)}>
      <MoviesList
        movies={movies}
        cardConfiguration={{ size: 'default' }}
        onClick={() => {}}
      />
    </Spin>
  )
}

export default MoviesRated
