import React from 'react'
import { CardSize } from 'antd/lib/card/Card'
import { Movie } from '../../core/models/movies'
import MovieCard from './movie-card/movie-card'

import './movies-list.css'

interface CardConf {
  size: CardSize
}

interface Props {
  movies: Movie[] | undefined
  onClick: (id: string) => void
  cardConfiguration?: CardConf
}

const MoviesList = ({ movies, cardConfiguration, onClick }: Props): JSX.Element => {
  return (
    <section className="movies__list">
      {movies?.map((movie) => (
        <MovieCard
          id={String(movie.id)}
          key={movie.id}
          image={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          rating={movie?.rating}
          onClick={onClick}
          size={cardConfiguration?.size}
        />
      ))}
    </section>
  )
}

export default MoviesList
