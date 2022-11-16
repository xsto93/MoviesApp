import React from 'react'
import { Movie } from '../../../core/models/movies'

interface Props {
  movie: Movie
}

const MovieDetail = ({ movie }: Props) => {
  return <p>Detalle de la movie {JSON.stringify(movie)}</p>
}

export default MovieDetail
