import React from 'react'
import { useMovies } from '../../shared/hooks/useMovies'

const MoviesSearch = (): JSX.Element => {
  const { movies } = useMovies('a')

  return (
    <section>
      <pre>{JSON.stringify(movies)}</pre>
    </section>
  )
}

export default MoviesSearch
